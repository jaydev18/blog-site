import React from 'react'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import data from './data'
export default function App(){
   const cards = data.map(item => {
       return (
            < Cards 
            key = {item.key}
            item = {item}
            />
       )
   }
  
   ) 
    return(
        <>
         <Navbar />
        {cards}
        
        </>
      
       
    )
}