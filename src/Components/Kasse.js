import { useState } from "react";
import { db } from "../Database/firebase";
import { ref,set } from "firebase/database";

function Kasse(props){
    let Basketitems=props.Basketitems;
    let NewSume=props.NewSume;
    let[daten,setdaten]=useState({
        Vorname:"",
        Nachname:"",
        Strasse:"",
        PLZ:"",
        Stadt:"",
        Land:"",
        Items:Basketitems
    })

    let Zahlung=(e,text)=>{
        setdaten((prevdaten)=>({
            ...prevdaten,
            [text]:e.target.value
        }))
    }

    let Zahlungdaten=()=>{
        const useref=ref(db,"/Bestellungen/"+daten.Nachname);
        set(useref,daten)
        alert("Danke für Ihre Bestelung")
    }

    return(
        <div className="kasse">
            <div className="kasse_tablediv">
                <table>
                    <tbody>
                        {Basketitems.map((item,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td className="kasse_mobile"><img src={item.liste[item.Color]} className="Basket_img" alt={item.Color} /></td>
                                    <td className="kasse_mobile">{item.Nr}</td>
                                    <td>{item.Proname}</td>
                                    <td>{item.Size}</td>
                                    <td>{item.Color}</td>
                                    <td>{item.Quant}</td>
                                    <td>{item.Price}€</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="kasse_sume">
                    <p className="sume_text" >Gesamtsumme:</p>
                    <p className="sume">{(parseFloat(NewSume)+10).toFixed(2)}€</p>
                </div>
                <p style={{textAlign:"end",margin:"0px"}}>Inkl. MwSt</p>
            </div>
            <div className="kasse_form">
                <div className="kasse_email">
                    <h4>E-Mail Adresse</h4>
                    <p>wichtig für die Bestellbestätigung!</p>
                    <input type="text"></input>
                </div>
                <div className="adresse">
                    <h4>Versandadresse</h4>
                    <div className="Name">
                        <div>
                            <p>Vorname</p>
                            <input type="text" onChange={(e)=>Zahlung(e,"Vorname")}></input>
                        </div>
                        <div>
                            <p>Nachname</p>
                            <input type="text" onChange={(e)=>Zahlung(e,"Nachname")} ></input>
                        </div>
                    </div>
                    <div className="strasse">
                        <p >Straße + Hausnr.</p>
                        <input type="text" onChange={(e)=>Zahlung(e,"Strasse")}></input>
                    </div>
                    <div className="Name">
                        <div>
                            <p>PLZ</p>
                            <input type="text" onChange={(e)=>Zahlung(e,"PLZ")}></input>
                        </div>
                        <div>
                            <p>Stadt</p>
                            <input type="text" onChange={(e)=>Zahlung(e,"Stadt")}></input>
                        </div>
                    </div>
                    <div className="strasse">
                        <p >Land</p>
                        <input type="text" onChange={(e)=>Zahlung(e,"Land")}></input>
                    </div>
                   
                </div>
                <p className="kasse_akzept">Wir akzeptieren</p>
                <div className="bezahlung">
                    <label><img src="img/paypal.png" style={{width:"50px"}}></img></label>
                    <input type="radio" name="sizeGroup"    value={"Paypal"} style={{marginRight:"20px"}}/>
                    <label><img src="img/visa.png" style={{width:"50px"}}></img></label>
                    <input type="radio" name="sizeGroup"   value={"Paypal"} />
                </div>
                <div className="kasse_bb">
                    <button  onClick={Zahlungdaten}>WEITER ZUR ZAHLUNG</button>
                </div>
            </div>
        </div>
    )
}
export default Kasse;