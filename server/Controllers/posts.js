const PostMessage = require('../Models/postsModal');

const getAllPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)

    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

const createPost = async (req, res) => {
    const Post = new PostMessage(req.body);

    try {
        await Post.save();
        res.status(201).json({Post})
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

module.exports = { getAllPosts, createPost };