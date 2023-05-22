import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
function App() {
  return (
  <>  
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
