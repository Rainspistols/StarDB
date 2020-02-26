import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import Spinner from '../spinner/spinner';

class ItemList extends Component {
  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .catch(err => console.log('error', err))
      .then(itemList => {
        this.setState({ itemList });
      });
  }

  renderItems = arr => {
    return arr.map(item => {
      const label = this.props.renderItem(item);
      const { id } = item;

      return (
        <li
          className='list-group-item list-group-item-action'
          style={{ cursor: 'pointer' }}
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  };

  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

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
