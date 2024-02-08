import { useState,useEffect} from "react";

function Navigator2(props){
    let Carpets=props.Carpets;
    let setCarpetlist=props.setCarpetlist;
    let min=0;
    let max=0;
    let filter=props.filter;
    let setfilter=props.setfilter;
    let setcarddisplay=props.setcarddisplay;
    let Sizelist=["alle","80 x 80","80 x 150","120 x 170","140 x 200","200 x 290"];
    
    for(let i=0; i<Carpets.length; i++){
        if(Carpets[i].Price > max)
            max = Carpets[i].Price
        if(Carpets[i].Price < min)
            min = Carpets[i].Price
    }
    let[Minimum,setMinimum]=useState(min);
    let[Maximum,setMaximum]=useState(max);
    let[coloroption,setcoloroption]=useState("alle Farbe");
    let[sizeoption,setsizeoption]=useState("alle");
    
    useEffect(()=>{
        if(coloroption!=="alle Farbe" || sizeoption !=="alle" || Minimum!==min ||Maximum!==max){
            let newlist=[...Carpets];
            let filteredList=[];

            newlist= newlist.filter((carpet) => {
                return carpet.Price <= Maximum && carpet.Price >= Minimum;
              });
            filteredList=[...newlist]
            if(coloroption!=="alle Farbe"){
                filteredList=filteredList.filter((carpet)=>{
                    let keys=Object.keys(carpet.colors[0]);
                    return keys.includes(coloroption);
                })
            }
            if(sizeoption!=="alle"){
                filteredList=filteredList.filter((carpet)=>{
                    return carpet.Size===sizeoption
                })
            }
            setCarpetlist(filteredList);
        }
        else
            setCarpetlist(Carpets);
    },[coloroption,sizeoption,Maximum,Minimum,Carpets,setCarpetlist,max,min])

    let closefilter=()=>{
        setfilter({display:"none"});
        setcarddisplay("block");
    }
    
    return(
        <div className="Nav2" style={filter}>
            <div className="Nav2_logo">
                <img src="img/logo2.png" alt="logo"></img>
            </div>
            <div className="Nav2_price">
                <h4>Preis</h4>
               Ab: <input placeholder="20" onChange={(e)=>{
                        if(e.target.value==="")
                            setMinimum(min)
                        else
                            setMinimum(e.target.value);
                    }} ></input><br/>
               Bis: <input placeholder="150" onChange={(e)=>{
                        if(e.target.value==="")
                          setMaximum(max)
                        else
                          setMaximum(e.target.value);
                	}}></input>
            </div>
            <div className="Nav2_color">
                <h4>Farbe</h4>
                <select onChange={(e)=>{
                    setcoloroption(e.target.value)
                }}>
                    <option>alle Farbe</option>
                    <option>Beige</option>
                    <option>Blue</option>
                    <option>Cream</option>
                    <option>Grey</option>
                    <option>Terra</option>
                    <option>Pink</option>
                    <option>Multi</option>
                    <option>Green</option>
                    <option>Moca</option>
                    <option>Silver</option>
                    <option>Red</option>
                    <option>Black</option>
                </select>
            </div>
            <div className="Nav2_size">
                <h4>Grösse</h4>
                {Sizelist.map((size,idx)=>{
                    return(
                        <div key={idx}>
                            <label className='New_colors'>{size}
                                <input type="radio" name="sizeGroup"checked={sizeoption===size}   onChange={(e)=>{setsizeoption(e.target.value)}} value={size} ></input>
                            </label><br/>
                        </div>
                    )
                })}
            </div>
            <div className="mobilenav2but">
            <button  onClick={closefilter}>Anwendung</button> 
            </div>
        </div>
    )
}
export default Navigator2;