import React, { Component } from 'react';
import './itemDetails.css';
import SwapiService from '../../services/swapiService';
import Spinner from '../spinner/spinner';
import ItemDetailsView from './itemDetailsView/itemDetailsView';





class ItemDetails extends Component {
  swapiService = new SwapiService();
  wrapClasses =
    'card d-flex flex-row rounded align-items-center p-3 itemDetails';

  state = {
    item: null,
    loading: false,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId) {
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;

    this.setState({ loading: true });

    getData(itemId)
      .then(item => {
        this.setState({ item, image: getImageUrl(item) });
      })
      .then(() => this.setState({ loading: false }));
  };

  render() {
    const { loading, item, image } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content =
      item && !loading ? (
        <ItemDetailsView item={item} image={image}>
          {this.props.children}
        </ItemDetailsView>
      ) : null;
    const emptyItem =
      !item && !loading ? (
        <p className='m-auto'>Select a person from a list</p>
      ) : null;

    return (
      <div className={this.wrapClasses}>
        {emptyItem}
        {spinner}
        {content}
      </div>
    );
  }
}

export default ItemDetails;
