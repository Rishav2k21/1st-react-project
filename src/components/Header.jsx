import React from 'react'
// import {BrowserRouter as Router} from "react-router-dom"
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link"
const Header = () => {
  return (

   <>
<nav>
<h1>Techy.</h1>
    <main>
      {/* /# walle me jaise hi click kroge wo scroll ho kr niche aa jyega q ki id me dena hoga jaha bhi isko bnye ho usme  */}
      <HashLink to ={"/#home"}>Home</HashLink>
      <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
    </main>
</nav>

   </>
  )
}

export default Header
