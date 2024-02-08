import Navigator2 from "../Components/Navigator2";
import Carpet from "../Database/Carpets.json";
import Card from "../Components/Card";
import { useState, useEffect } from "react";

function Flur(){
    useEffect(()=>{
        setCarpetlist(Carpet.filter(car=>car.categ==="f"));
        setloading(true);
      },[])
  
    let [loading,setloading]=useState();
    let [carpetnew,setcarpetnew]=useState(Carpet.filter(car=>car.categ==="f"));
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
                        <span>Carpet Diem</span> bietet für jeden Winkel Ihres Zuhauses einen eleganten und 
                        wunderschönen Teppich.
                        </p>
                        <div className="HomeMobilebut">
                        <button onClick={filterfunc}><img src="img/filter.png" alt="filter" style={{width:"30px"}}></img></button>
                        </div>
                    </div>
                    <p className="Home_p2">
                        Carpet Diem bietet für jeden Winkel Ihres Zuhauses einen eleganten und 
                        wunderschönen Teppich. Unsere Kollektion verwandelt jede Ecke in einen Ort des 
                        Stils und der Schönheit.
                    </p>
                </div>
                <div className="Home_card" style={{display:carddisplay}}>
                    { loading && Carpetlist.map((car, index) => {
                        return (
                            <Card
                            key={index}
                            Carpet={car}
                            />
                        )
                    })}    
                </div>
            </div>
        </div>
    )
}
export default Flur;