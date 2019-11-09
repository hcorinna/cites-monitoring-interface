import React from 'react';
import ScreenHeader from '../ScreenHeader';
import Fab from '../Fab';
import './PlantScreen.css';

const PlantScreen = ({plant}) => {
  return (
    <div>
      <ScreenHeader title={plant.name}/>
      <div className="Details-row">
        <div className="Details-column Details-left">
          <img className="Details-gallery" src={plant.images[0]} alt={plant.name}/>
          <a href="/plants.json" download>
            <Fab icon={<i className="fa fa-file-csv"/>}/>
          </a>
        </div>
        <div className="Details-column Details-right">
          <h3>ID</h3>
          <p>
            {plant.id}
          </p>
          <h3>Average price</h3>
          <p>
            {plant.alloffers[0].platform}: {plant.alloffers[0].offers[0].price} {plant.alloffers[0].offers[0].currency}
          </p>
          {plant.alloffers !== undefined && plant.alloffers.length > 0 &&
            <div>
            <h3>Latest offers</h3>
            <p>
              {plant.alloffers.map(p => {
                return <div>
                        <h4>{p.platform}</h4>
                        {p.offers !== undefined && p.offers.length > 0 &&
                          <div>
                          <p>
                            {p.offers.map(offer => {
                              return <div>
                                        <a href={offer.link} target="_blank">{offer.price} {offer.currency}</a>
                                        <button className="flag"><i className="fa fa-flag"/></button>
                                      </div>
                            })}
                          </p>
                          </div>
                        }
                        </div>
              })}
            </p>
            </div>
          }
          <span className="more">Show more...</span>
        </div>
      </div>
    </div>
  );
}

export default PlantScreen;
