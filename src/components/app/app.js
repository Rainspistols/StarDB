import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context/';
import './app.css';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StarshipDetails from '../sw-components/starship-details';

export default class App extends Component {
  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      console.log('switched to', Service.name);

      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className='stardb-app'>
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Route path='/' exact render={() => <h2>Welcome to StarDB</h2>} />
              <Route path='/people' exact render={() => <h2>People</h2>} />
              <Route path='/people' component={PeoplePage} />
              <Route path='/planets' component={PlanetsPage} />
              <Route path='/starships' exact component={StarshipsPage} />
              <Route
                path='/starships/:id'
                render={({ match }) => {
                  console.log(match);
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
