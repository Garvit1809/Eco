import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Feed from './Pages/Feed';
import Campaign from  './Components/Campaign';
import Campaigns from './Pages/Campaigns';
import Event from './Components/Event';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/feed' element={<Feed/>} />
    <Route path='/campaigns' element={<Campaigns/>} />
    <Route path='/campaigns/id' element={<Campaign/>} />
    <Route path='campaigns/event' element={<Event/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
