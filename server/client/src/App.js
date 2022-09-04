import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Feed from './Pages/Feed';
import Campaign from  './Components/Campaign';
import Campaigns from './Pages/Campaigns';
import Event from './Components/Event';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Substitute from './Pages/Substitute';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/feed' element={<Feed/>} />
    <Route path='/campaigns' element={<Campaigns/>} />
    <Route path='/campaigns/1' element={<Campaign/>} />
    <Route path='/campaigns/event' element={<Event/>} />
    <Route path='/substitute' element={<Substitute/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
