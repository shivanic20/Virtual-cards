import React from 'react';
// import Scroll from './Scroll';
import Card from './Card';
import "../style.css"


export default function Search({filteredCards}) {

    
    let filtered = filteredCards.map(items =>  <Card key={items.id} item={items} />); 
    return (
      <div>
        {filtered}
        
      </div>
    );
  }
  

  
