import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import ItemList from '../itemList/itemList';
import PersonDetails from '../personDetails/personDetails';

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className='m-auto' style={{width: '90%'}}>
        <Header />
        <RandomPlanet />

        <div className='container-fluid'>
          <div className='row flex-wrap'>
            <ItemList />
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
