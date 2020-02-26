import React, { Component } from 'react';
import ItemList from '../../itemList/itemList';
import PersonDetails from '../../personDetails/personDetails';
import ErrorIndicator from '../../errorIndicator/errorIndicator';

class PeoplePage extends Component {
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
      <div className='container-fluid'>
        <div className='row'>
          <ItemList onItemSelected={this.onItemSelected} />
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
