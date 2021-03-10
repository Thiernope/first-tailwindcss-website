import React from 'react'

function Section() {
    return (
        <>
        <h1 className="flex justify-center items-center -mb-4 text-xl text-yellow-600 text-2xl m-6" >Course to offer</h1>
 <div className ="p-4 md:grid grid-cols-4 items-center text-center space-y-5 cursor-pointer" >
 <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent h-52 flex items-center px-10 justify-center flex-col">
  <p class="text-indigo-600 group-hover:text-yellow-600 ...">CSS</p>
  <p class="text-indigo-500 group-hover:text-gray-500 ...">Cascading Style Sheets is a style sheet language used for describing...</p>
</div>

<div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent h-52 flex items-center px-10 justify-center flex-col">
  <p class="text-indigo-600 group-hover:text-yellow-600 ...">HTML</p>
  <p class="text-indigo-500 group-hover:text-gray-500 ...">Hypertext Markup Language is the standard markup language for documents designed ...</p>
</div>

<div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent h-52 flex items-center px-10 justify-center flex-col">
  <p class="text-indigo-600 group-hover:text-yellow-600...">JAVASCRIPT</p>
  <p class="text-indigo-500 group-hover:text-gray-500 ...">JavaScript, often abbreviated as JS, is a programming language that conforms...</p>
</div>

<div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent h-52 flex items-center px-10 justify-center flex-col">
  <p class="text-indigo-600 group-hover:text-yellow-600...">REACT</p>
  <p class="text-indigo-500 group-hover:text-gray-500 ...">React is an open-source, front end, JavaScript library for ...</p>
</div>
<div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent h-52 flex items-center px-10 justify-center flex-col">
  <p class="text-indigo-600 group-hover:text-yellow-600 ...">VUE</p>
  <p class="text-indigo-500 group-hover:text-gray-500 ...">Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building...</p>
</div>
<div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent h-52 flex items-center px-10 justify-center flex-col">
  <p class="text-indigo-600 group-hover:text-yellow-600 ...">NodeJs</p>
  <p class="text-indigo-500 group-hover:text-gray-500 ...">Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs...</p>
</div>
<div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent h-52 flex items-center px-10 justify-center flex-col ">
  <p class="text-indigo-600 group-hover:text-yellow-600...">Express.js</p>
  <p class="text-indigo-500 group-hover:text-gray-500 ...">Express.js, or simply Express, is a back end web application framework for Node.js</p>
</div>
<div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent h-52 flex items-center px-10 justify-center flex-col">
  <p class="text-indigo-600 group-hover:text-yellow-600 ...">PostgreSQL</p>
  <p class="text-indigo-500 group-hover:text-gray-500 ...">PostgreSQL, also known as Postgres, is a free and open-source relational database ...</p>
</div>
  <button class="bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-600 hover:text-yellow-100 hover:transition ease-in duration-150 flex justify-center cursor-wait">Unlock more</button>   
 </div>
        </>
    )
}

export default Section
