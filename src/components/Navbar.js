import React from "react"
import '../style.css'
import Card from "./Card"
import data from "../data.js"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../reactstyle.css";
import Search from "./Search"
import { Icon } from '@iconify/react';


export default function Navbar() {
   
    const cards = data.map(item => {

       
            return ( <Card
                key={item.id}
                item={item}
                
                 />)
               
    }) ;

    
    const cardsYour = data.map(item => {
        return (
           item.owner_id==1 && <Card
                key={item.id}
                item={item}
                
            />
        )
    }) ; 
    
    const [searchField, setSearchField] = React.useState("");
    const [searchShow, setSearchShow] = React.useState(false);

    const [on,setOn] = React.useState(false);
    const [burner,setBurner] = React.useState(false);
    
    const [sub,setSub]=React.useState(false);
    const [apply,setApply]=React.useState(false);
        let filteredCards = data.filter(
      person => {
        return (
          person
          .name
          .toLowerCase()
          .includes(searchField.toLowerCase()) 
        );
      }
    );
    let filteredb = data.map(item =>
         {   
             return (
                 (item.card_type==="burner") &&
                 <Card
                     key={item.id}
                     item={item}
                     
                 />)
              
             })
             let filtereds = data.map(item =>
                {   
                    return (
                        (item.card_type==="subscription") &&
                        <Card
                            key={item.id}
                            item={item}
                            
                        />)
                     
                    })

                    let filteredbo = data.map(item =>
                        {   
                            return (
                                (item.card_type==="burner") &&
                               item.owner_id==1&& <Card
                                    key={item.id}
                                    item={item}
                                    
                                />)
                             
                            })
                            let filteredbs = data.map(item =>
                                {   
                                    return (
                                        (item.card_type==="subscription") &&
                                       item.owner_id==1&& <Card
                                            key={item.id}
                                            item={item}
                                            
                                        />)
                                     
                                    })
  
    function handleChange(e) {
           setSearchField(e.target.value);
           if(e.target.value===""){
            setSearchShow(false);
          }
          else {
            setSearchShow(true);
          }
       }  
    function toggle() {
        setOn(prevMode => !prevMode)
    }
    function handle(e){
        let isChecked = e.target.checked;
        setBurner(isChecked);
    }
    function handleSub(e){
        let isCheck = e.target.checked;
        setSub(isCheck);
        
    }
    
    function clear() {
       document.getElementById('filterdrop').reset();
    }
    
    
return (
    <nav> 
         
        
     <Tabs>
    
    <TabList>
      <Tab>Your</Tab>
      <Tab>All</Tab>
    </TabList>
   <div className="searchfilter">
   <input 
          className="search"
          type = "search" 
          placeholder = "search" 
          
          onChange = {handleChange}
           
        /><Icon icon='ic:round-search' className="icon"/>
        <div className="button" onClick={toggle}><Icon icon="ic:outline-filter-list" id='icon'/>Filter</div>
      
        </div>
        { on &&  <div className="filterdrop" >
            <form id='filterdrop'>
         <p className="heading">Filters</p>
        <hr className="hr"></hr>
        <p className="heading">Type</p>

        <input type="checkbox" className="burner" onChange={handle} />Burner 
        <input type="checkbox" className="subscription" onChange={handleSub}/>subscription
        
        <p className="headingthree">Card</p>
         
        <select className="typeselect" placeholder="Select cardholder">
           <option>Darla</option>
             <option>shiva</option> </select>

             <div className="buttonone" onClick={toggle}>Apply</div>

             <div className="buttontwo" onClick={clear}>Clear</div>       </form> </div>
}
        
        
     <TabPanel>

     {!searchShow &&<section className="cards-list">
                {!burner && !sub && cardsYour}
                {burner && filteredbo}
                {sub && filteredbs}
               
                
            </section>}
    </TabPanel>
    <TabPanel>
      {!searchShow &&<h2><section className="cards-list">
               {sub && filtereds}
                {burner && filteredb} 
               {!burner && !sub && cards}
            </section></h2>}
    </TabPanel>
  </Tabs>
 {searchShow && <Search filteredCards={filteredCards} />}
  </nav>
   
    
    )
}









