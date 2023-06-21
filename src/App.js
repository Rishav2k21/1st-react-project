import React from 'react'

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";


import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
 

const App = () => {
  return (
    // header footer sara route me hai 
    <Router>
     <Header />
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Services" element={<Services/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="*" element={"page not found"}/>

     </Routes>
     <Footer/>
    </Router>
  )
}

export default App
