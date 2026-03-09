import { Route, Routes } from "react-router";
import HomePage from "./assets/Pages/HomePage";
import AboutPage from "./assets/Pages/AboutPage";
import StudentsPage from "./assets/Pages/StudentsPage"
import { BrowserRouter, Link } from "react-router";

function App() {
  return(
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Students">Students</Link>
    </nav>  

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/About" element={<AboutPage/>}/>
      <Route path="/Students" element={<StudentsPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}