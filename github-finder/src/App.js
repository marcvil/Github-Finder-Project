import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import  Navbar  from "./components/layout/Navbar.jsx";
import  Footer  from "./components/layout/Footer.jsx";
import  Home  from "./components/pages/Home";
import  About  from "./components/pages/About";
import  NotFound  from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar/>
       <main className='container mx-auto px-3 pb-12 s'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/notound' element={<NotFound/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
       </main>
        <Footer/>
      </div>
    </Router>
  
  );
}

export default App;
