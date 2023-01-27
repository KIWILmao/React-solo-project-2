import React from 'react'

export default function Card(props){
     return(
         <div>
            <div className = "card">
                <img src={props.imageUrl}/>
                <div className="card--info">
                    <div className = "typo">
                        <img src="./image/5.png"/>
                        <p className="para1">{props.location}</p>
                        <a href={props.googleMapsUrl} className="para2">View on Google </a>
                    </div>
                        <h2>{props.title}</h2>
                        <p className="para3">{props.startDate} - {props.endDate}</p>
                        <p className="para4">{props.description}</p>
                </div>
             </div>
        </div>
     )
 }