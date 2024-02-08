import { useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';

function Newwindow(props){
    let setBasketitems=props.setBasketitems;
    let Basketitems=props.Basketitems;
    const { data } = useParams();
    let Carpet=JSON.parse(data);
    let[imgidx,setImgIdx]=useState(0)
    let Name=Carpet.Name;
    let Size=Carpet.Size;
    let Price=Carpet.Price;
    let Colors=Carpet.colors;
    let keys = Object.keys(Colors[0]);
    let[selectedColor, setSelectedColor] = useState(keys[0]);
    let[quant,setquant]=useState(1);
    let[Newdisplay,setNewdisplay]=useState("none");
    let[Product,setProduct]=useState({
        "Nr":Carpet.Nr,
        "Proname":Name,
        "Size":Size,
        "Color":selectedColor,
        "Priceitem":Price,
        "Quant":quant,
        "Price":Price,
        "liste":Colors[1]
    })
    let imglist=[];
    for(let i=0; i<keys.length; i++){
        imglist.push(Colors[0][keys[i]])
    }
    
    let check=(event)=>{
        setSelectedColor(event.target.value);
        let colordiv=event.target.parentElement.parentElement;
        let colorNum=colordiv.getAttribute("data");
        setImgIdx(colorNum);
    }

    let quantity=(symbol)=>{
        if(symbol==="+" ){
            if(quant<Carpet.Kap)
                setquant(quant+1);
            else
                alert("there are no more");
        }
        else{
            if(quant>1)
                setquant(quant-1);
        }
    }

    let control=()=>{
        let NewQuant="";
        let update = [...Basketitems]; 
        for(let i=0; i<update.length; i++){
            if(Product.Nr===update[i].Nr && Product.Color===update[i].Color){
                NewQuant=update[i].Quant+quant;
                update[i].Quant= NewQuant;
                update[i].Price=(NewQuant*update[i].Priceitem).toFixed(2);
                setBasketitems(update); 
                break
            }
        }
        return NewQuant;
    }
    
    let add=()=>{
        if(Basketitems.length!==0){
            if(control()==="")
                setBasketitems((prevBasketItems) => [...prevBasketItems, Product]); 
        }
        else
            setBasketitems((prevBasketItems) => [...prevBasketItems, Product]);
    }
    
    useEffect(()=>{
        setProduct(prevbankDaten=>({
            ...prevbankDaten,
                Quant:quant,
                Color:selectedColor,
                Price:(quant*Price).toFixed(2)
        }))
    },[quant,selectedColor,Price])

    let displayimg=()=>{
        if(Newdisplay==="none")
            setNewdisplay("block");
        else
            setNewdisplay("none");
    }
    
    return(
        <div className='New'>
            <div className="New_slice">
                <div className='New_img'>  
                    <img src={imglist[imgidx]} alt="Carpet" onClick={displayimg} ></img>
                </div>
            </div>
            <div className='New_daten'>
                <p className='New_p1'>{Name}</p>
                <p className='New_p2'>{Size}</p>
                <p className='New_p4'>"Die Teppiche von Carpet Diem bieten eine hochwertige Qualität in Kombination mit 
                    Stil und Modernität. Unsere Teppiche sind nicht nur ein funktionales Element, sondern 
                    auch ein Ausdruck von zeitgemäßem Design und Eleganz.
                </p>
                <p className='New_p3'>{Price} €.</p>
                {keys.map((color,idx)=>{
                    return(
                    <div key={idx} data={idx}>
                        <label className='New_colors'>{color}
                            <input type="radio"  checked={selectedColor === color} onChange={check} value={color}></input>
                        </label><br/>
                    </div>
                    )
                })}
                <div className='New_quant'>
                    <button className='b1' onClick={()=>{quantity("-")}}>-</button>
                    <p>{quant}</p>
                    <button className='b2' onClick={()=>{quantity("+")}}>+</button>
                </div>
                <button className='New_add'onClick={add} >In den Warenkorb</button>
            </div>
            <div className="New_div" style={{display:Newdisplay}}>
                <img src={imglist[imgidx]} onClick={displayimg} alt="Beschreibung des Bildes" />
            </div>
        </div>
    )
}
export default Newwindow;