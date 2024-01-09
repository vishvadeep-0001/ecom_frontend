import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
