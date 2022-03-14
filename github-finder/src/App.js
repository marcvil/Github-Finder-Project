import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import  Navbar  from "./components/layout/Navbar.jsx";
import  Footer  from "./components/layout/Footer.jsx";
import  Home  from "./components/pages/Home";
import  About  from "./components/pages/About";
import  NotFound  from "./components/pages/NotFound";
import {GithubProvider} from './context/github/GithubContext'

function App() {
  return (
    <GithubProvider >
      <Router>
        <div className='flex flex-col justify-between h-screen backgroud--grey'>
          <Navbar/>
          <div className='backgroud--grey'>
          <main className='container mx-auto px-3 pb-12 backgroud--grey'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/home' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/notound' element={<NotFound/>} />
              <Route path='/*' element={<NotFound/>} />
            </Routes>
          </main>
        </div>
          <Footer/>
        </div>
      </Router>
    </GithubProvider>
  
  );
}

export default App;
