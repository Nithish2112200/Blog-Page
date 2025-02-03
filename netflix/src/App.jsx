import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import Addblogs from "./components/Addblogs";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Blogs from './components/Blogs';

function App() {

  return (
    <Router>
      <Header/>
      <div className="flex">
      <SideBar/>
      <Routes>
      <Route path="/" element={<Blogs/>}/>
      <Route path="/addblogs" element={<Addblogs/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App
