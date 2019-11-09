import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({path, name, image}) => {
  return (
    <span>
      <Link to={path}>
        <div className="Card complete">
          <div className="Card-element">
            <img className="complete" src={image} alt={name}/>
            <div className="Card-description">{name}</div>
          </div>
        </div>
      </Link>
    </span>
  );
}

export default Card;
