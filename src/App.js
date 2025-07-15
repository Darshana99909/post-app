import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addpost from './components/Addpost';
import Searchpost from './components/Searchpost';
import Deletepost from './components/Deletepost';
import Viewall from './components/Viewall';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Add' element={<Addpost/>}/>
      <Route path="/Searchpost" element={<Searchpost/>}/>
      <Route path="/Deletepost" element={<Deletepost/>}/>
      <Route path="/Viewall" element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
