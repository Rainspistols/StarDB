import React, { Component } from 'react';
import ItemList from '../../itemList/itemList';
import PersonDetails from '../../personDetails/personDetails';
import ErrorIndicator from '../../errorIndicator/errorIndicator';
import SwapiService from '../../../services/swapiService';

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false
  };

  onItemSelected = id => {
    return this.setState({ selectedPerson: id });
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className='container-fluid mb-2'>
        <div className='row'>
          <ItemList
            getData={this.swapiService.Get.All.people}
            onItemSelected={this.onItemSelected}
            renderItem={({ name, gender, birthYear }) =>
              `${name} (${gender}, ${birthYear})`
            }
          />
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
