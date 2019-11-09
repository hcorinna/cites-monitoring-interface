import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import ScreenHeader from '../ScreenHeader';
import Gallery from '../Gallery';

const PlantsScreen = ({plants, removePlant, history}) => {
  const elements = plants.map(plant => ({
    id: plant.id,
    name: plant.name,
    path: "/plant/" + plant.id,
    image: plant.images[0]
  }));
  return (
    <div>
      <ScreenHeader title="Plants"/>
      <Gallery elements={elements}/>
    </div>
    );
}

export default withRouter(PlantsScreen);
