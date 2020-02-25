import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import Spinner from '../spinner/spinner';

class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiService.Get.All.people()
      .catch(err => console.log('error', err))
      .then(peopleList => {
        this.setState({ peopleList });
      });
  }
  renderItems = arr => {
    return arr.map(({ name, id }) => {
      return (
        <li
          className='list-group-item list-group-item-action'
          style={{ cursor: 'pointer' }}
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  };

  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return (
      <div className='p-0 col-12 col-md-5 mb-2 mb-md-0'>
        <ul
          className='list-group list-group-flush rounded'
          style={{ overflow: 'hidden' }}
        >
          {items}
        </ul>
      </div>
    );
  }
}

export default ItemList;
