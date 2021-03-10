import React from 'react'
import { Link } from "react-router-dom";
function Navbar({toggle, showModel}) {

    return (
        <>
   <nav className ="flex justify-between items-center bg-gray-500 h-16 relative shadow-lg text-gray-900 text-xl sticky top-0 z-50">
  <Link to ="/" className = "pl-8">
  <img src="https://cdn1.iconfinder.com/data/icons/essentials-pack/96/code_coding_html_css_programming-512.png" alt="" className = "w-10" />
  </Link>

    <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
    <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" alt ="menu" className="w-10"/>
    </div>

   <div className ="pr-8 md:block hidden">
   <Link to="/" class=" p-4 text-yellow-100 hover:text-yellow-600"> 
  Home
  </Link>
   <Link to="/team" class=" p-4 text-yellow-100 hover:text-yellow-600"> 
  Team
  </Link>

  <Link to="/about" class="p-4 text-yellow-100 hover:text-yellow-600">
    About
  </Link>


  <Link class="bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-600 hover:text-yellow-100 hover:transition ease-in duration-150" onClick={showModel}>
    Register or Login
  </Link>
   </div>
</nav>

        </>
    )
}

export default Navbar





