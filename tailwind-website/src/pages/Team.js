import React from 'react'
import Footer from "../components/Footer"
function Team() {
    return (
        <>
            <div className = "p-8 flex h-full bg-indigo-100 text-xl md:h-screen flex flex-col">
                <h1 className =" text-3xl md:text-4xl flex justify-center items-center">Our Team</h1>
            <div className ="mt-20 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-x-32 mx-auto md:mt-20 space-y-4">
                <div className ="flex flex-col justify-center items-center animate-pulse">
                <img src="https://res.cloudinary.com/dev-ltd/image/upload/v1615530638/Profile_jm0jxj.png" alt="" className ="w-52 h-52 lg:w-70 lg:h-70 rounded-full"/>
                <div>
                    <div className ="flex mt-4">
                    <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/location-512.png" alt="" className ="w-7"/>
                    <h1 className ="text-xl">Thierry Ntirandekura</h1>
                    </div>
                    <p className ="text-sm ml-4">Chief Technical Lead</p>
                <p></p>
                </div>
                </div>
                <div className ="flex flex-col justify-center items-center animate-pulse">
                <img src="https://res.cloudinary.com/dev-ltd/image/upload/v1615530638/Profile_jm0jxj.png" alt="" className ="w-52 h-52 lg:w-70 lg:h-70 rounded-full"/>
                <div>
                    <div className ="flex mt-4">
                    <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/location-512.png" alt="" className ="w-7"/>
                    <h1 className ="text-xl">Thierry Ntirandekura</h1>
                    </div>
                    <p className ="text-sm ml-4">Chief Technical Lead</p>
                <p></p>
                </div>
                </div>
                <div className ="flex flex-col justify-center items-center animate-pulse">
                <img src="https://res.cloudinary.com/dev-ltd/image/upload/v1615530638/Profile_jm0jxj.png" alt="" className ="w-52 h-52 lg:w-70 lg:h-70 rounded-full"/>
                <div>
                    <div className ="flex mt-4">
                    <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/location-512.png" alt="" className ="w-7"/>
                    <h1 className ="text-xl">Thierry Ntirandekura</h1>
                    </div>
                    <p className ="text-sm ml-4">Chief Technical Lead</p>
                <p></p>
                </div>
                </div>
                <div className ="flex flex-col justify-center items-center animate-pulse">
                <img src="https://res.cloudinary.com/dev-ltd/image/upload/v1615530246/Screen_Shot_2020-12-25_at_10.49.52_nmcjg2.png" alt="" className ="w-52 h-52 lg:w-70 lg:h-70 rounded-full"/>
                <div>
                    <div className ="flex mt-4">
                    <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/location-512.png" alt="" className ="w-7"/>
                    <h1 className ="text-xl">Thierry Ntirandekura</h1>
                    </div>
                    <p className ="text-sm ml-4">Sales Manager</p>
                <p></p>
                </div>
                </div>
            </div>
        </div>
        <Footer /> 
        </>
    )
}

export default Team
