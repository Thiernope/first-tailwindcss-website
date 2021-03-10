import React from 'react'

function Hero() {
    return (
   <>

   <div className ="bg-gray-400 space-y-6 p-4 mx-w-md mx-auto lg:grid grid-cols-2 lg: items-start lg:p-20">
     <div className ="space-y-6">
    <h2 className="text-2xl font-bold text-yellow-800 md:text-4xl md:pt-10">Welcome to Code City</h2>
    <div class="md:hidden">
      <img src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1lcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt ="programmer" className="rounded-md shadow-lg object-cover object-center"/>
    </div>
    <p className = "text-sm  text-gray-600 md:text-xl ">We help you learn quickly from zero to hero. You get hired as a full stack web-developer in no more than 6 months while coding with us</p>
    <div className="mt-4 ">
    <button className="inline-block uppercase tracking-wider font-bold text-sm bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-700 hover:text-yellow-100 hover:transition ease-in duration-150"> Get Started </button>
    </div>  
    </div>
    <div class="hidden md:block">
      <img src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1lcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt ="programmer"className="rounded-md shadow-lg object-cover object-center"/>
    </div>
  </div>
        </>
    )
}

export default Hero
