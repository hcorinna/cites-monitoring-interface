import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import DashboardContainer from './container/DashboardContainer';
import PlantsScreenContainer from './container/PlantsScreenContainer';
import PlantScreenContainer from './container/PlantScreenContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="Content">
          <Switch>
            <Route exact path="/" component={DashboardContainer}/>
            <Route exact path="/plants" component={PlantsScreenContainer}/>
            <Route exact path="/plant/:plantId" component={PlantScreenContainer}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
