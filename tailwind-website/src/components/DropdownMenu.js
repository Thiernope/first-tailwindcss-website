import React from 'react'
import {Link} from "react-router-dom"
function DropdownMenu({isOpen, toggle, showModel}) {
    return (
        <>
             <div className ={isOpen ? "grid grid-rows-5 text-start  items-center bg-gray-600": "hidden"} onClick={toggle}>
   <Link to="/" class=" p-4 text-yellow-100 hover:text-yellow-600"> 
  Home
  </Link>
   <Link to="/team" class=" p-4 text-yellow-100 hover:text-yellow-600"> 
  Team
  </Link>

  <Link to="/about" class="p-4 text-yellow-100 hover:text-yellow-600">
    About
  </Link>


  <Link to="/register" class="bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-600 hover:text-yellow-100 hover:transition ease-in duration-150 w-32"onClick={showModel}>
    Login
  </Link>
   </div>
        </>
    )
}

export default DropdownMenu
