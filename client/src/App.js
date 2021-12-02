import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      {/* whatever is outside the Routes nesting will be available on all the pages of the app, like a Navbar or Footer
<a href='/home'>Go to Home Page</a> */}
      <Routes>
        this is where we declare our Routes
        <Route path='/' />
      </Routes>
    </Router>
  );
}

export default App;
