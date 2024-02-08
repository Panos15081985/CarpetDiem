import Navigator2 from "../Components/Navigator2";
import Carpet from "../Database/Carpets.json";
import Card from "../Components/Card";
import { useState, useEffect } from "react";

function Wohnzimmer(){
  useEffect(()=>{
    setCarpetlist(Carpet.filter(car=>car.categ==="w"));
    setloading(true);
  },[])

  let [loading,setloading]=useState();
  let [carpetnew,setcarpetnew]=useState(Carpet.filter(car=>car.categ==="w"));
  let[Carpetlist,setCarpetlist]=useState();
  let[filter,setfilter]=useState();
  let[carddisplay,setcarddisplay]=useState();
  let filterfunc=()=>{
    setfilter({display:"block",position:"absolute",width:"100%"});
    setcarddisplay("none");
  }

  return( 
    <div className="Wohnzimmer">
      <div className="Home_nav2">
        <Navigator2
          Carpets={carpetnew}
          setCarpetlist={setCarpetlist}
          filter={filter}
          setfilter={setfilter}
          setcarddisplay={setcarddisplay}
        />
      </div>
      <div>
        <div className="Home_text">
          <img className="logo_center" src="img/logo.png" alt="logo"></img>
          <div className="mobile_carpet">
              <p style={{margin:"0px"}}>
                  Erwecken Sie Ihr Wohnzimmer zum Leben mit <span>Carpet Diem </span> Teppichen.
              </p>
              <div className="HomeMobilebut">
              <button onClick={filterfunc}><img src="img/filter.png" alt="filter" style={{width:"30px"}}></img></button>
              </div>
          </div>
          <p className="Home_p2">
              Erwecken Sie Ihr Wohnzimmer zum Leben mit <span>Carpet Diem </span> Teppichen. Unser Sortiment verleiht 
              Ihrem Zuhause Eleganz und Stil in jedem einzelnen Detail. Entdecken Sie die Kunst der 
              Inneneinrichtung und verwandeln Sie Ihr Wohnzimmer in einen Ort der Schönheit
          </p>
        </div>
        <div className="Home_card" style={{display:carddisplay}}>
          {loading && Carpetlist.map((car, index) => {
            return (
              <Card
                key={index}
                Carpet={car}
              />
            );
          })};
        </div>
      </div>
    </div>
  )

}
export default Wohnzimmer;