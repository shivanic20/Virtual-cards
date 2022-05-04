import React, { Component } from "react"
import '../style.css'
import { Icon } from '@iconify/react';


export default function Card(props){
    let text,icon ;
    if(props.item.card_type === "burner") 
    text =<span className="limit">Expires: {props.item.expiry} </span>
    else
     text= <span className="limit">August limit: {props.item.limit} </span>
     if(props.item.card_type === "burner") 
    icon =<Icon icon="el:fire" color="#fa2a55" width="20" height="25" /> 
    else
    //  icon= <Icon icon="ph:arrows-clockwise-bold" color="#fa2a55" width="25"  rotate={1}  />
    icon = <Icon icon="fa6-solid:arrows-rotate" color="#fa2a55" width="20" height="25" rotate={1} />
     
     let barValue = (props.item.spent.value/(props.item.available_to_spend.value+props.item.spent.value))*100;
   let x = Math.round(barValue);
  
   
    
    return (
        
         
           <div className="card"> 
            
           <div className="pic"><div className="head"><span className="name">{props.item.name}</span>
           <span className="gray">{props.item.owner}     •     {props.item.budget_name}</span>
           </div><div className="firearrow">{icon}</div></div>
           
          <span className="line"> <span className="card--badge"> {props.item.card_type}</span>  
            {text}
            </span>
            <div className="bar"  style={{width:'100%'}}>
                 <div className="bartwo" style={{width: `${x}%`,
                backgroundColor: '#fa2a55',
                height:'100%',
                borderRadius: '25px 0px 0px 25px'}}  ></div>
                 </div>
                 <div className="spent"><div className="pinkdot"><li></li></div><div className="sa">Spent</div> 
                 <div className="currency">{props.item.spent.value}{props.item.spent.currency}</div>
                 </div>
                 <div className="available"><div className="greendot"><li></li></div><div className="sa">Available</div> 
                 <div className="currency">{props.item.available_to_spend.value}{props.item.available_to_spend.currency}</div>
                 </div>
        </div>
       
                       
    )

}
  