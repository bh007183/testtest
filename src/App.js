import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Test from "./Test"
import Home from "./Home"

function App() {
  return (
    <>
    <Router>
      <Link to="/">home</Link>
      <Link to="/test">test</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>

      </Router>
    </>
  );
}

export default App;
