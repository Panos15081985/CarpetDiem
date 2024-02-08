import { useState } from "react";
import { Link } from 'react-router-dom';

function Card(props){
    let Carpet=props.Carpet;
    let string=JSON.stringify(Carpet);
    let Name=Carpet.Name;
    let Size=Carpet.Size;
    let Price=Carpet.Price;
    let Colors=Carpet.colors;
    let[imgidx,setImgIdx]=useState(0);
    let keys = Object.keys(Colors[0]);
    let imglist=[];
    
    for(let i=0; i<keys.length; i++){
        imglist.push(Colors[1][keys[i]])
    }
    
    let next=()=>{
        setImgIdx((imgidx+1) % imglist.length)  
    }
  
    let prev=()=>{
        if (imgidx === 0) 
            setImgIdx(imglist.length - 1);
        else 
            setImgIdx(imgidx - 1);
    }
     
    return(
        <div className="Card">
            <div className="Card_slice">
                <div className="Card_img" >
                    <Link  to={`/Newwindow/${encodeURIComponent(string)}`}>
                    <img src={imglist[imgidx]} alt="Carpet" ></img>
                    </Link>
                </div>
                <button  className="left" onClick={next}>❯</button>
                <button  className="right" onClick={prev}>❮</button>
            </div>
            <div className="Card_daten">
                <ul>
                    <li>{Name}</li>
                    <li>{Size}</li>
                    <li>{Price} €.</li>
                </ul>
            </div>
        </div>
    )
}
export default Card;