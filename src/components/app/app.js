import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context/';
import './app.css';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage
} from '../pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StarshipDetails from '../sw-components/starship-details';

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
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
    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className='stardb-app App'>
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Switch>
                <Route
                  path='/'
                  exact
                  render={() => (
                    <>
                      <h2 className='mb-4'>Welcome to StarDB</h2>
                      <h5
                        className='mb-4'
                        style={{
                          letterSpacing: '1.5px',
                          paddingRight: '30%',
                          lineHeight: '2rem'
                        }}
                      >
                        This is a fully React Redux database site where you can
                        find characters, space ships or planets from Star wars.
                        Choose the right 'Category' on the top of the site.
                        Enjoy it!
                      </h5>
                    </>
                  )}
                />
                <Route path='/people/:id?' component={PeoplePage} />
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
                <Route
                  path='/login'
                  render={() => {
                    return (
                      <LoginPage
                        isLoggedIn={isLoggedIn}
                        onLogin={this.onLogin}
                      />
                    );
                  }}
                />
                <Route
                  path='/secret'
                  render={() => {
                    return <SecretPage isLoggedIn={isLoggedIn} />;
                  }}
                />

                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
