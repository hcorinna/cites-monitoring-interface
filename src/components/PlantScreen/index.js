import React from 'react';
import ScreenHeader from '../ScreenHeader';
import Plot from 'react-plotly.js';
import '../../App.css';
import './PlantScreen.css';

const plotColor = window.getComputedStyle(document.documentElement).getPropertyValue("--accent2");

const weeklyOffers = [2, 6, 3, 1, 1, 2, 5, 8, 10, 7]
var lastWeek = weeklyOffers[0]
const weeklyChanges = []
for (var week = 1; week < weeklyOffers.length; week++) {
  var weeklyChange = (weeklyOffers[week] - lastWeek) / lastWeek
  weeklyChanges.push(weeklyChange)
  var lastWeek = weeklyOffers[week]
}

const PlantScreen = ({plant, names}) => {
  return (
    <div>
      <ScreenHeader title={names.name}/>
      <div className="Details-row">
        <div className="Details-column Details-left">
          <img className="Details-gallery" src={plant.images[0]} alt={plant.name}/>
          <a href="/plants.json" download>
            <button className="Fab"><i className="fa fa-file-csv"/></button>
          </a>
          <button className="Fab"><i className="fa fa-sync"/></button>
        </div>
        <div className="Details-column Details-right">
          <h3>ID</h3>
          <p>
            {plant.id}
          </p>
          {names.nonscientific_names !== undefined && names.nonscientific_names.length > 0 &&
            <div>
              <h3>Other names</h3>
              <p>
                {names.nonscientific_names.join(", ")}
              </p>
            </div>
          }
          <h3>Average price</h3>
          <p>
            {plant.alloffers[0].platform}: {plant.alloffers[0].offers[0].price} {plant.alloffers[0].offers[0].currency}
          </p>
          <Plot
            data={[
              {
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                y: weeklyOffers,
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: plotColor},
              }
            ]}
            layout={
              {
                width: 400,
                height: 300,
                title: 'Number of offers per week',
                xaxis: {
                  title: 'week',
                  showline: true,
                  dtick: 1
                },
                yaxis: {
                  title: '# offers',
                  showline: true,
                  dtick: 2
                }
              }
          }
          />
          <Plot
            data={[
              {
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                y: weeklyChanges,
                type: 'bar',
                marker: {color: plotColor},
              }
            ]}
            layout={
              {
                width: 400,
                height: 300,
                title: 'Weekly changes',
                xaxis: {
                  title: 'week',
                  showline: true,
                  dtick: 1
                },
                yaxis: {
                  title: 'In-/decrease (%)',
                  showline: true,
                  dtick: 2
                }
              }
          }
          />
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
                                        <a href={offer.link} target="_blank" rel="noopener noreferrer">{offer.price} {offer.currency}</a>
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
