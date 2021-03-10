import React, {useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import DropdownMenu from "./components/DropdownMenu"
import Model from "./components/Model"
import About from "./pages/About"
import Home from "./pages/Home"
import Team from "./pages/Team"
import { BrowserRouter as Router, Switch , Route} from "react-router-dom"
function App() {
  const [isOpen, setIsOpen ] = useState(false);
  const toggle = ()=>{
    setIsOpen(!isOpen);
  }

  useEffect(()=>{
    const closeMenu = ()=>{
      if(window.innerWidth > "768px" && isOpen === true){
        setIsOpen(false);
        console.log("It is greater than 768px");
      }

      window.addEventListener("resize", closeMenu);
      return ()=>{
        window.removeEventListener("resize", closeMenu);
      }
    }
  });

  const [ showModel, setShowModel ] = useState(false);

  const handleShowModel = ()=>{
      setShowModel(true);
  }

  const handleCloseModel = ()=>{
      setShowModel(false)
  }
  return (
    <div>
 <Router>
 <Navbar toggle={toggle} showModel = {handleShowModel}/>
{showModel && <Model closeModel={handleCloseModel} />}
< DropdownMenu toggle = {toggle} isOpen={isOpen} showModel={handleShowModel}/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
    </Switch>  
</Router>
</div>
  );
}

export default App;
