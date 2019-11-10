import React from 'react';
import { withRouter } from 'react-router-dom'
import ScreenHeader from '../ScreenHeader';
import Gallery from '../Gallery';

const PlantsScreen = ({details}) => {
  const elements = details.map(plantDetails => ({
    id: plantDetails.id,
    name: plantDetails.name,
    path: "/plant/" + plantDetails.id,
    image: plantDetails.images !== undefined? plantDetails.images[0] : "https://www.westminster.ac.uk/sites/default/public-files/styles/panel_image_4_4_1200px_/public/general-images/Plant-edited.jpg?itok=cOXgyF9j"
  }));
  return (
    <div>
      <ScreenHeader title="Plants"/>
      <Gallery elements={elements}/>
    </div>
    );
}

export default withRouter(PlantsScreen);
