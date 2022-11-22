import React from 'react'

export default function Cards(props){
    return(
        <main className="cards">
         <div className="card">
          <img
            src={`${props.item.imageUrl}`} 
            className="card--img"
          />
          <div className="card--content">
            <div className="location">
              <i className="fa-sharp fa-solid fa-location-dot "></i>
              <span >{props.item.location}</span>
              <a href={`${props.item.googleMapsUrl}`}>View on Google maps</a>
            </div>
            <h1>{props.item.title}</h1>
            <p className="date">
              <span className="startData">{props.item.startDate} </span>
              <span className="endData">{props.item.endDate}</span>
            </p>
            <p className="content--text">
              {props.item.description}
            </p>
          </div>
        </div>
        </main>
        
    )
    
}