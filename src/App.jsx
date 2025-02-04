import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import Addblogs from "./components/Addblogs";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Blogs from './components/Blogs';
import Display from './components/Display';
import Edit from './components/Edit';

function App() {

  return (
    <Router>
      <Header/>
      <div className="flex">
      <SideBar/>
      <Routes>
      <Route path="/" element={<Blogs/>}/>
      <Route path="/addblogs" element={<Addblogs/>}/>
      <Route path="/display" element={<Display/>}/>
      <Route path="/edit" element={<Edit/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App
