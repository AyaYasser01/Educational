
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/common/header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Pricing from './components/prices/Pricing';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/courses' element={<CourseHome/>} />
          <Route  path='/team'  element={<Team/>}/>
          <Route  path='/pricing'  element={<Pricing/>}/>
          <Route  path='/journal'  element={<Blog/>}/>
          <Route  path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
