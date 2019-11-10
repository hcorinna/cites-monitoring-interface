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

const PlantScreen = ({offers, details}) => {
  return (
    <div>
      <ScreenHeader title={details.name}/>
      <div className="Details-row">
        <div className="Details-column Details-left">
          <img className="Details-gallery" src={details.images[0]} alt={details.name}/>
          <a href="/offers.json" download>
            <button className="Fab"><i className="fa fa-file-csv"/></button>
          </a>
          <button className="Fab"><i className="fa fa-sync"/></button>
        </div>
        <div className="Details-column Details-right">
          <h3>ID</h3>
          <p>
            {details.id}
          </p>
          {details.nonscientific_names !== undefined && details.nonscientific_names.length > 0 &&
            <div>
              <h3>Other names</h3>
              <p>
                {details.nonscientific_names.join(", ")}
              </p>
            </div>
          }
          {offers.all_offers !== undefined && offers.all_offers.length > 0 &&
            <div>
            <h3>Average price</h3>
            <p>
              {offers.all_offers[0].platform}: {offers.all_offers[0].offers[0].price}
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
              <h3>Latest offers</h3>
              <p>
                {offers.all_offers.map(p => {
                  return <div>
                          <h4>{p.platform}</h4>
                          {p.offers !== undefined && p.offers.length > 0 &&
                            <div>
                            <table>
                            <tr>
                              <th>Price</th>
                              <th>Minimum orders</th>
                              <th>Flag link</th>
                            </tr>
                              {p.offers.map(offer => {
                                return <tr>
                                          <td>
                                            <a href={offer.link} target="_blank" rel="noopener noreferrer">{offer.price}</a>
                                          </td>
                                          <td>
                                            {offer.min_order}
                                          </td>
                                          <td>
                                            <button className="flag"><i className="fa fa-flag"/></button>
                                          </td>
                                        </tr>
                              })}
                            </table>
                            </div>
                          }
                          </div>
                })}
              </p>
            <span className="more">Show more...</span>
            </div>
        }
        {offers.all_offers === undefined || offers.all_offers.length == 0 &&
          <h3>No offers found</h3>
        }
        </div>
      </div>
    </div>
  );
}

export default PlantScreen;
