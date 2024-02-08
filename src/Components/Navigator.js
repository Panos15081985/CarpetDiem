import { Link, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Navigator(props){
  let Basketitems=props.Basketitems;
  const [clickedLink, setClickedLink] = useState("Home");
  let [Newdisplay,setNewdisplay]=useState("none");
  
  useEffect(()=>{
    if(Basketitems.length!==0)
      setNewdisplay("block")
  },[Basketitems,setNewdisplay])

  const color = (link) => {
    setClickedLink(link);
  };
  
  return(
    <div className="Nav">
      <div className="Nav_links">
        <ul className="nav_ul">
            <li className="btn">
              <img alt="btn" style={{width:"50px"}}  src="img/btn.jpg"></img>
            </li>
            <li>
              <Link
                  to="/"
                  style={{ color: clickedLink === "Home" ? "rgb(92, 188, 212)" : "" }}
                  onClick={() => color("Home")}
                >
                Home
              </Link>
            </li>
            <li>
              <Link
                  to="/Wohnzimmer"
                  style={{ color: clickedLink === "Wohnzimmer" ? "rgb(92, 188, 212)" : "" }}
                  onClick={() => color("Wohnzimmer")}
              >
                Wohnzimmer
              </Link>
            </li>
            <li>
              <Link
                  to="/Kinderzimmer"
                  style={{ color: clickedLink === "Kinderzimmer" ? "rgb(92, 188, 212)" : "" }}
                  onClick={() => color("Kinderzimmer")}
              >
                Kinderzimmer
              </Link>
            </li>
            <li>
              <Link
                  to="/Flur"
                  style={{ color: clickedLink === "Flur" ? "rgb(92, 188, 212)" : "" }}
                  onClick={() => color("Flur")}
              >
                Flur
              </Link>
            </li>
            <li>
              <Link
                  to="/Kontakt"
                  style={{ color: clickedLink === "Kontakt" ? "rgb(92, 188, 212)" : "" }}
                  onClick={() => color("Kontakt")}
                >
                Kontakt
              </Link>
            </li>
          </ul>
          <ul className="login_basket">
            <li>
                <Link
                    to="/Login"
                  >
                  <img src="img/login.png" alt="login" style={{width:"30px"}}></img>
                  </Link>
              </li>
              <li className="basket">
                  <Link
                      to="/Basket"
                  >
                  <img src="img/basket.png" alt="basket" style={{width:"30px"}}></img>
                  </Link>
                  <div className="Nav_punkt" style={{display:Newdisplay}}>{Basketitems.length}</div>
              </li>
          </ul>
        
      </div>
      <Outlet />
    </div>
  );
}
export default Navigator;