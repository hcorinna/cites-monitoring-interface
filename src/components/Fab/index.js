import React from 'react';
import './Fab.css';

const Fab = ({icon, onClick}) => {
  return (
    <div><button className="Fab" onClick={onClick}>{icon}</button></div>
  );
}

export default Fab;
