import React, { Component } from "react"
import '../style.css'


export default function Card(props){
    let text ;
    if(props.item.card_type === "burner") 
    text =<span >Expires: {props.item.expiry} </span>
    else
     text= <span>August limit: {props.item.limit} </span>
     
     let barValue = (props.item.spent.value/(props.item.available_to_spend.value+props.item.spent.value))*100;
   let x = Math.round(barValue);
  
   
    
    return (
        
         
           <div className="card"> 
            
           <span className="name">{props.item.name}</span>
           <span className="gray">{props.item.owner}     •     {props.item.budget_name}</span>
           
          <span className="line"> <span className="card--badge"> {props.item.card_type}</span>  
            {text}
            </span>
            
             <div className="bar"  style={{width:'100%'}}>
                 <div className="bartwo" style={{width: `${x}%`,
                backgroundColor: '#fa2a55',
                height:'100%',
                borderRadius: '25px 0px 0px 25px'}}  ></div>
                 </div>
           
            

           
            </div>
       
                       
    )

}
  