import React from 'react';
import './ScreenHeader.css';

const ScreenHeader = ({title}) => {
  return (
    <header className="Screen-header">
      <h1 className="Screen-title">{title}</h1>
    </header>
  );
}

export default ScreenHeader;
