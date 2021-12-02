
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';


function App() {
  return (
    <Router>
      {/* whatever is outside the Routes nesting will be available on all the pages of the app, like a Navbar or Footer
<a href='/home'>Go to Home Page</a> */}

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>

      </nav>
      <Routes>
        this is where we declare our Routes
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
