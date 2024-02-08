import Navigator2 from "../Components/Navigator2";
import Carpet from "../Database/Carpets.json";
import Card from "../Components/Card";
import { useState,useEffect } from "react";

function Kinderzimmer(){
    useEffect(()=>{
        setCarpetlist(Carpet.filter(car=>car.categ==="k"));
        setloading(true);
      },[])
  
    let [loading,setloading]=useState();
    let [carpetnew,setcarpetnew]=useState(Carpet.filter(car=>car.categ==="k"));
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
                            Entdecken Sie zauberhafte Teppiche für das Kinderzimmer von <span>Carpet Diem</span>, 
                            die Ihr Kind einfach lieben wird.
                        </p>
                        <div className="HomeMobilebut">
                        <button onClick={filterfunc}><img src="img/filter.png" alt="filter" style={{width:"30px"}}></img></button>
                        </div>
                    </div>
                    <p className="Home_p2">
                        Entdecken Sie zauberhafte Teppiche für das Kinderzimmer, die Ihr Kind einfach 
                        lieben wird. Unsere Auswahl an kinderfreundlichen Teppichen zaubert ein Lächeln 
                        auf jedes Gesicht und verleiht dem Raum eine warme und  verspielte Atmosphäre.
                    </p>
                </div>
                <div className="Home_card" style={{display:carddisplay}}>
                    {loading && Carpetlist.map((car, index) => {
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
export default Kinderzimmer;