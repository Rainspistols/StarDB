import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import ItemList from '../itemList/itemList';
import PersonDetails from '../personDetails/personDetails';
import ToggleRandomPlanet from '../toggleRandomPlanet/toggleRandomPlanet';

class App extends React.Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: null
  };

  onTogglePlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };
  onItemSelected = id => {
    return this.setState({ selectedPerson: id });
  };

  render() {
    const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div className='m-auto' style={{ width: '90%' }}>
        <Header />
        {randomPlanet}
        <ToggleRandomPlanet onTogglePlanet={this.onTogglePlanet} />
        <div className='container-fluid'>
          <div className='row'>
            <ItemList onItemSelected={this.onItemSelected} />
            <PersonDetails 
            personId={this.state.selectedPerson} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
