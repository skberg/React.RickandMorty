import React from 'react';
import {Link} from 'react-router-dom';
import Tilt from 'react-tilt';
import './CharacterCard.css';

const characterCard = (props) => {
  
  let linkButton = null
  if (props.showLink) {
   linkButton = <Link to={{ pathname: '/character/' + props.id }}className="button-text" >view</Link>;
  }
  
  return <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
      
            <Tilt className="Tilt" options={{ max : 25 }}  >
                <div className="Tilt-inner"> 
                <div  className="Card-img"> <img className="img" src={props.image}  data-tilt></img><br/></div>
                  </div>
                </Tilt>
            <hr />
            <div className="card-list">
            <b>Specifes: </b> {props.species}<br/>
            <b>Status:</b> {props.status}<br/>
            <b>Gender:</b> {props.gender}<br/>
            <b>Location:</b> {props.location}<br/>
            <b>Place of origin:</b> {props.origin}<br/>
            </div>
            <hr />
            
            <div className="button">{linkButton} </div>
           
         

   </div>
        
}
export default characterCard;