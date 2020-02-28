import React, { Component } from 'react';
import ItemList from '../../itemList/itemList';
import ItemDetails from '../../itemDetails/itemDetails';
import SwapiService from '../../../services/swapiService';
import Row from '../../layout/row/row';
import ErrorBoundry from '../../errorBoundry/errorBoundry';

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false
  };

  onItemSelected = id => {
    return this.setState({ selectedPerson: id });
  };

  render() {
    const { selectedPerson } = this.state;

    const itemList = (
      <ItemList
        getData={this.swapiService.Get.All.people}
        onItemSelected={this.onItemSelected}
      >
        {i => `${i.name} (${i.birthYear})`}
      </ItemList>
    );
    const personDetails = <ItemDetails itemId={selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;
