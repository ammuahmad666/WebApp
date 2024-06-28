
import './App.css';
import Container from './pages/Container';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {

  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route path="/signup" element= {<SignUpPage/>}/>
    <Route path="/home" element={<Container/>}/>
  </Routes>
    
  </BrowserRouter>)
}


