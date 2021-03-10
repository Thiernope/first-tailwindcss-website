import React from 'react'
import {FaFacebookSquare} from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"
function Footer() {

    return (
        <>
            <div className ="flex justify-around items-center h-16 bg-gray-500 shadow-lg text-gray-900 text-xl text-yellow-100 hover:text-yellow-600 mb-0">
                <p>Copyright © 2021</p>
                <div>
                <h1>contact us on</h1>
                <div className = "flex justify-around">
                    <a href="#"> <FaFacebookSquare /></a>
                    <a href="#"><FaInstagramSquare/></a>
                    <a href="#"><AiFillLinkedin/></a>
    
                </div>
                </div>
                

            </div>
        </>
    )
}

export default Footer
