import React, { useEffect} from 'react'
import ReactDom from "react-dom";
function Model({closeModel}) {
    let myRef;
useEffect(()=>{
document.addEventListener("click", closePopUpModel);
return ()=>{
    document.removeEventListener("click", closePopUpModel);
}
},[]);

const closePopUpModel = (e)=>{
if(myRef && !myRef.contains(e.target)){
    closeModel();
}
}

const modelZIndex = {
    zIndex:"1000",
    position: "fixed",
    top:-20,
    width: "100%",
}
    return ReactDom.createPortal (
    
        <>
        < div className ="h-screen mt-20 bg-gray-200" style={modelZIndex}>
           <form ref={(node)=> (myRef = node)}class=" rounded mt-20 bg-white hover:bg-white hover:shadow-lg hover:border-transparent h-62 max-w-sm mx-auto  flex flex-col justify-center items-center py-6 px-4 border bor shadow-sm">
           <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt ="" onClick={closeModel} className ="h-7 ml-auto cursor-pointer"/>
            <h1 className = "text-gray-900 text-2xl">Login</h1> 
            <div className="mb-4">
                <label className ="text-gray-600 text-sm">Email</label><br/>
                <input type="text" className=" border border-gray-300 px-3 py-1 hover:shadow-lg rounded"/>
            </div>
            <div className="mb-4">
                <label className ="text-gray-600 text-sm">Password</label><br/>
                <input type="text" className=" border border-gray-300 px-3 py-1 hover:shadow-lg rounded"/>
            </div>
            <div className="mb-2">
                <label className ="text-gray-600 text-sm">confirm password</label><br/>
                <input type="password" className=" border border-gray-300 px-3 py-1 hover:shadow-lg rounded"/>
                <p className ="text-xs text-blue-500">forget password ?</p>
            </div>
            <button className =" bg-blue-400 hover:bg-blue-500 my-5 px-8 py-2 inline-block rounded-lg">Login</button>
            <h3>Don't have account? <a href="#" className ="text-blue-400">Sign Up</a></h3>
           </form> 
        </div>
        </>,
        document.getElementById("portal")
    )
}

export default Model
