import React, { Component } from 'react';
import PersonDetails from '../../PersonDetails/PersonDetails';
import ItemList from '../../ItemList/ItemList';
import ErrorIndicator from '../../ErrorIndicator/ErrorIndicator';

class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className='row mb-2'>
        <div className='col-md-6'>
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className='col-md-6'>
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
