import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from './Components/Navigator';
import Newwindow from "./Components/Newwindow";
import Home from "./Pages/Home";
import Basket from "./Pages/Basket";
import Login from "./Pages/Login";
import Kasse from "./Components/Kasse";
import Wohnzimmer from "./Pages/Wohnzimmer";
import Kinderzimmer from "./Pages/Kinderzimmer";
import Flur from "./Pages/Flur";
import Kontakt from "./Pages/Kontakt";

import './App.css';
import { useState } from "react";


function App() {
  let[Basketitems,setBasketitems]=useState([])
  let[NewSume,setNewSume]=useState(0)

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigator Basketitems={Basketitems} />}>
        <Route index element={<Home />} />
        <Route path="Newwindow/:data" element={<Newwindow 
                                                Basketitems={Basketitems} 
                                                setBasketitems={setBasketitems}
                                              />}/>
        <Route path="Basket" element={<Basket
                                       Basketitems={Basketitems} 
                                       setBasketitems={setBasketitems} 
                                       NewSume={NewSume} 
                                       setNewSume={setNewSume}
                                      />}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Kasse" element={<Kasse
                                      Basketitems={Basketitems}
                                      NewSume={NewSume}
                                    />}/>
        <Route path="Wohnzimmer" element={<Wohnzimmer/>}/>
        <Route path="Kinderzimmer" element={<Kinderzimmer/>}/>
        <Route path="Flur" element={<Flur/>}/>
        <Route path="Kontakt" element={<Kontakt/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
 
   
  );
}

export default App;
