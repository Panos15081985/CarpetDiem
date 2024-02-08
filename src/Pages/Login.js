import { useState } from "react";
import { db } from "../Database/firebase";
import { set, ref } from "firebase/database";

function Login(){

    let[Nkunde,setNkunde]=useState({
        Vorname:"",
        Nachname:"",
        Email:"",
        Pass:""
    });

    let acount=(e,text)=>{
        setNkunde((prevNkunde)=>({
            ...prevNkunde,
            [text]:e.target.value
        }))
    }

    let speicher=()=>{
        const dataref=ref(db,"/kunden/" + Nkunde.Nachname);
        set(dataref,Nkunde);
        alert("register copleted");
    }

    return(
        <div className="Login">
            <div className="Login_anmelden">
                <div className="Login_form">
                    <h3>Ich habe bereits ein Kundenkonto</h3>
                    <p>Email-Adresse</p>
                    <input type="text"></input>
                    <p>Passwort</p>
                    <input type="text"></input>
                    <button>Anmelden</button>
                    <p>Passwort vergessen?</p>
                </div>
            </div>
            <div className="Login_neukunde">
                <h3>Ich bin Neukunde</h3>
                <p>
                    Kostenlos und unverbindlich! Den Bestellvorgang schneller abschließen, mehrere 
                    Versandadressen speichern, deinen bisherigen Bestellverlauf verfolgen und vieles mehr.
                </p>
                <p className="Login_Newp">Vorname</p>
                <input type="text"  onChange={(e)=>acount(e,"Vorname")}></input>
                <p className="Login_Newp">Nachname</p>
                <input type="text" onChange={(e)=>acount(e,"Nachname")}></input>
                <p className="Login_Newp">Email-Adresse</p>
                <input type="text" onChange={(e)=>acount(e,"Email")}></input>
                <p className="Login_Newp">Passwort</p>
                <input type="password" onChange={(e)=>acount(e,"Pass")}></input>
                <button onClick={speicher}>Jetzt Konto erstellen</button>
                <p>
                    Ich stimme den Datenschutzbestimmungen und den AGB sowie der Widerrufsbelehrung zu. 
                    vitafy.de wird mir Werbung zu ähnlichen Produkten oder Dienstleistungen nach einem Kauf 
                    zusenden. Der Verwendung meiner Daten kann ich durch den in den Mailings enthaltenem 
                    Abmeldelink oder per E-Mail an info@carpetdiem.de jederzeit widersprechen. Dabei entstehen 
                    lediglich die Übermittlungskosten nach den Basistarifen.
                </p>
                <p>Alle Felder sind Pflichtfelder</p>
            </div>
        </div>
    )
}
export default Login;