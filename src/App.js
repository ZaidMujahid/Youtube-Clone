import Navbar from './components/Navbar';
import Feed from './components/Feed'
import ChannelDetail from './components/ChannelDetail'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import Search from './components/Search';
import VideoDetail from './components/VideoDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<Search />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
