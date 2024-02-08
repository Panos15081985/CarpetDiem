import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

function Basket(props){
    let[text,settext]=useState("Your Basket is empty");
    let[Newdisplay,setdisplay]=useState("none");
    let NewSume=props.NewSume;
    let setNewSume=props.setNewSume;
    let Basketitems=props.Basketitems;
    let setBasketitems=props.setBasketitems;
 
    useEffect(()=>{
        let Sume=0
        if(Basketitems.length!==0){
            if(text==="Your Basket is empty"){
                settext("Your Basket : ")
                setdisplay("grid")
            }
            for(let i=0; i<Basketitems.length; i++)
               Sume=parseFloat(Basketitems[i].Price)+Sume;
          
            Sume=Sume.toFixed(2);
            setNewSume(Sume);
        }
    },[setNewSume,settext,Basketitems,text])
      
    let QuantityHandler=(e,param)=>{
        let Row=e.target.parentElement.parentElement.parentElement;
        let Nr=Row.cells[1].innerHTML;
        let Color=Row.cells[4].innerHTML;
        let NewList=[...Basketitems];
        for(let i=0; i<NewList.length; i++){
            if(Nr===NewList[i].Nr && Color===NewList[i].Color){
                let QQ=NewList[i].Quant
                if(param===1){
                   NewList[i].Quant=QQ-1
                    if(NewList[i].Quant===0){
                        NewList = NewList.filter((item, index) => index !== i);
                        setdisplay("none");
                        settext("Your Basket is empty");
                    }
                    else
                        NewList[i].Price=(NewList[i].Priceitem*NewList[i].Quant).toFixed(2);
                }
                else{
                    NewList[i].Quant=QQ+1;
                    NewList[i].Price=(NewList[i].Priceitem*NewList[i].Quant).toFixed(2);
                }
            }
            setBasketitems(NewList);
        }
    }

    return(
        <div>
            <p className='Basket_p0'>{text}</p>
            <div className="Basket" style={{display:Newdisplay}}>
                <div className="Basket_table">
                    <table>
                        <tbody>
                            <tr>
                                <td className='basket_mobile'><h4>Bild</h4></td>
                                <td className='basket_mobile'><h4>Nr.</h4></td>
                                <td><h4>Name</h4></td>
                                <td><h4>Size</h4></td>
                                <td><h4>Color</h4></td>
                                <td><h4>Quantity</h4></td>
                                <td><h4>Price</h4></td>
                            </tr>
                            {Basketitems.map((item,idx)=>{
                                return(
                                    <tr key={idx}>
                                        <td className='basket_mobile'><img src={item.liste[item.Color]} className="Basket_img" alt={item.Color} /></td>
                                        <td className='basket_mobile'>{item.Nr}</td>
                                        <td>{item.Proname}</td>
                                        <td>{item.Size}</td>
                                        <td>{item.Color}</td>
                                        <td >
                                            <div className="Basket_quant">
                                                <button onClick={(e)=>{QuantityHandler(e,1)}} className="b1">-</button>
                                                <p>{item.Quant}</p>
                                                <button onClick={(e)=>{QuantityHandler(e,2)}} className="b2">+</button>
                                            </div>
                                        
                                        </td>
                                        <td>{item.Price}€</td>
                                        
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='Bestellübersicht'>
                    <h3>Bestellübersicht</h3>
                    <div className="Basket_sumary">
                        <p className="Basket_p1">Zwischensumme</p>
                        <p className="Basket_p1b">{NewSume}€</p>
                        <p className="Basket_p2">zzgl. Versandkosten</p>
                        <p className="Basket_p2b">10.00€</p>
                        <p className="Basket_p3">Gesamtsumme</p>
                        <p className="Basket_p3b">{(parseFloat(NewSume)+10).toFixed(2)}€</p>
                        <p className='Basket_p4'>Inkl. MwSt</p>
                    </div>
                    <div className='Basket_button'>
                        <Link  to={`/Kasse`}>
                            <button>Zur Kasse</button>
                        </Link>
                        <p className='Basket_p5'>30-Tage-Rückgaberecht</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Basket;