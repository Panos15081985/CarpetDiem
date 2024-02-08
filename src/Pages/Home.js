import Navigator2 from "../Components/Navigator2";
import Carpet from "../Database/Carpets.json";
import Card from "../Components/Card";
import { useState,useMemo } from "react";

function Home(){
  let[Carpetlist,setCarpetlist]=useState(Carpet);
  let[filter,setfilter]=useState();
  let[carddisplay,setcarddisplay]=useState();
  
  let filterfunc=()=>{
    setfilter({display:"block",position:"absolute",width:"100%"});
    setcarddisplay("none");
  }
    
  return(
    <div className="Home">
      <div className="Home_nav2">
        <Navigator2
            Carpets={Carpet}
            setCarpetlist={setCarpetlist}
            filter={filter}
            setfilter={setfilter}
            setcarddisplay={setcarddisplay}
        />
      </div>
      <div>
        <div className="Home_text">
            <div className="row">
              <div className="column">
                <img src="img/log7.jpg" alt="foto"></img>
                <img src="img/log3.jpg" alt="foto"></img>
              </div>
              <div   className="columnMobile">
                <img src="img/log2.jpg" alt="foto"></img>
              </div>
              <div className="column">
                <img src="img/log4.jpg" alt="foto"></img>
                <img src="img/log8.jpg" alt="foto"></img>
              </div>
              <div className="column">
                <img src="img/log6.jpg" alt="foto"></img>
                <img src="img/log5.jpg" alt="foto"></img>
              </div>
            </div>
            <img className="logo_center" src="img/logo.png" alt="logo"></img>
            <p className="Home_p1">Herzlich willkommen</p>
            <div className="mobile_carpet">
              <p style={{margin:"0px"}}>
                bei <span className="Carpetdiem">Carpet Diem</span>, Ihrer Anlaufstelle für hochwertige 
                und dennoch erschwingliche Teppiche. Unsere Kollektion bietet eine Vielzahl von modernen 
                Designs, die Ihren Wohnraum mühelos aufwerten können. Entdecken Sie noch heute den perfekten 
                Teppich für Ihr Zuhause und gestalten Sie Ihren Raum mit Stil neu. Einkaufen Sie bei uns, um 
                die Gelegenheit zu nutzen, Ihr Zuhause Schritt für Schritt zu verschönern.
              </p>
              <div className="HomeMobilebut">
                <button onClick={filterfunc}><img src="img/filter.png" alt="filter" style={{width:"30px"}}></img></button>
              </div>
            </div>
            <p className="Home_p2">
              bei <span>Carpet Diem</span> Ihrem Online-Ziel für hochwertige und preisgünstige Teppiche 
              mit zeitgemäßer Eleganz. Unsere Teppiche aus erstklassigen Materialien verleihen Ihrem Wohnraum 
              Haltbarkeit und einen Hauch von Luxus. Entdecken Sie unsere vielfältige Auswahl an Teppichen in 
              verschiedenen Größen, die perfekt in jedes Zimmer passen. Was uns auszeichnet, sind moderne Designs, 
              die Ihren Wohnraum aufwerten. Verschönern Sie Ihr Zuhause mit unseren hochwertigen, 
              budgetfreundlichen Teppichen. Finden Sie noch heute den perfekten Teppich bei Carpet Diem und 
              verwandeln Sie Ihren Raum mit Stil.
            </p>
        </div>
        <div className="Home_card" style={{display:carddisplay}}>
          {useMemo(() => {
            return Carpetlist.map((car, index) => {
              return (
                <Card
                  key={index}
                  Carpet={car}
                />
              );
            });
          }, [Carpetlist])}
        </div>
      </div>
    </div>
  )
}
export default Home;