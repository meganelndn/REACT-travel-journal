import React from "react";
import location from "../images/location-icon.png";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--stats">
                <img 
                    src={props.item.imageUrl} 
                    className="card--img" 
                />
                <div className="card--text">
                    <div className="location--details">
                        <img src={location} className="location" />
                        <h6 className="card--location">{props.item.location}</h6>
                        {props.item.googleMapsUrl && <a className="grey"
                                href={props.item.googleMapsUrl} 
                                target="_blank">View on Google Maps
                        </a>}
                    </div>
                    <h2 className="card--title">{props.item.title}</h2>
                    <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="card--desc">{props.item.description}</p>                       
                </div>
            </div>
        </div>
    )
}