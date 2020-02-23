import React, { Component } from 'react';
import PersonDetails from '../../itemDetails/itemDetails';
import ItemList from '../../ItemList/ItemList';
import ErrorIndicator from '../../ErrorIndicator/ErrorIndicator';
import SwapiService from '../../../services/swapiService';
import Row from '../../../layout/row/row';
import ErrorBoundry from '../../errorBoundry/errorBoundry';

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {i => `${i.name} (${i.birthYear})`}
      </ItemList>
    );
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <div>
        <ErrorBoundry>
          <Row left={itemList} right={personDetails} />
        </ErrorBoundry>
      </div>
    );
  }
}

export default PeoplePage;
