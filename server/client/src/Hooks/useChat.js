import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";

const USER_JOIN_CHAT_EVENT = "USER_JOIN_CHAT_EVENT";
const USER_LEAVE_CHAT_EVENT = "USER_LEAVE_CHAT_EVENT";
const NEW_CHAT_MESSAGE_EVENT = "NEW_CHAT_MESSAGE_EVENT";
const START_TYPING_MESSAGE_EVENT = "START_TYPING_MESSAGE_EVENT";
const STOP_TYPING_MESSAGE_EVENT = "STOP_TYPING_MESSAGE_EVENT";
const SOCKET_SERVER_URL = "http://localhost:5000";

const useChat = (chatId) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [user, setUser] = useState();
  const socketRef = useRef();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("https://api.randomuser.me/");
      const result = response.data.results[0];
      setUser({
        name: result.name.first,
        picture: result.picture.thumbnail,
      });
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        `${SOCKET_SERVER_URL}/chat/${chatId}/users`
      );
      const result = response.data.users;
      setUsers(result);
    };

    fetchUsers();
  }, [chatId]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get(
        `${SOCKET_SERVER_URL}/chat/${chatId}/messages`
      );
      const result = response.data.messages;
      setMessages(result);
    };

    fetchMessages();
  }, [chatId]);

  useEffect(() => {
    if (!user) {
      return;
    }
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { chatId, name: user.name, picture: user.picture },
    });

    socketRef.current.on("connect", () => {
      console.log(socketRef.current.id);
    });

    socketRef.current.on(USER_JOIN_CHAT_EVENT, (user) => {
      if (user.id === socketRef.current.id) return;
      setUsers((users) => [...users, user]);
    });

    socketRef.current.on(USER_LEAVE_CHAT_EVENT, (user) => {
      setUsers((users) => users.filter((u) => u.id !== user.id));
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    socketRef.current.on(START_TYPING_MESSAGE_EVENT, (typingInfo) => {
      if (typingInfo.senderId !== socketRef.current.id) {
        const user = typingInfo.user;
        setTypingUsers((users) => [...users, user]);
      }
    });

    socketRef.current.on(STOP_TYPING_MESSAGE_EVENT, (typingInfo) => {
      if (typingInfo.senderId !== socketRef.current.id) {
        const user = typingInfo.user;
        setTypingUsers((users) => users.filter((u) => u.name !== user.name));
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [chatId, user]);

  const sendMessage = (messageBody) => {
    if (!socketRef.current) return;
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
      user: user,
    });
  };

  const startTypingMessage = () => {
    if (!socketRef.current) return;
    socketRef.current.emit(START_TYPING_MESSAGE_EVENT, {
      senderId: socketRef.current.id,
      user,
    });
  };

  const stopTypingMessage = () => {
    if (!socketRef.current) return;
    socketRef.current.emit(STOP_TYPING_MESSAGE_EVENT, {
      senderId: socketRef.current.id,
      user,
    });
  };

  return {
    messages,
    user,
    users,
    typingUsers,
    sendMessage,
    startTypingMessage,
    stopTypingMessage,
  };
};

export default useChat;
