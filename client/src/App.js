import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Feed from './Pages/Feed';
import Campaign from './Pages/Campaign';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/feed' element={<Feed/>} />
    <Route path='/campaigns' element={<Campaign/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
