import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetail from './components/Details/ProductDetail';
import ProductDetail2 from './components/Details/ProductDetail2';
function App() {
  return (
  <>  
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/details/:id' element={<ProductDetail/>}/>
      <Route path='/detail/:Name' element={<ProductDetail2/>}/>

    </Routes>
    <Footer/>
  </>
  );
}

export default App;
