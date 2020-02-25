import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import Spinner from '../spinner/spinner';
import PersonContent from './personContent';
import ErrorIndicator from '../errorIndicator/errorIndicator';

class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: false,
    error: false
  };

  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.personId !== this.props.personId) {
      this.setState({ loading: true });
      this.updatePerson();
    }
  }

  updatePerson = () => {
    const { personId } = this.props;
    if (!personId) return;

    this.swapiService.Get.person(personId)
      .catch(err => {
        this.setState({ error: true, loading: false });
      })
      .then(person => this.setState({ person }))
      .then(() => this.setState({ loading: false }));
  };

  render() {
    if (!this.state.person && !this.state.error) {
      return (
        <div className='col-12 col-md-6 ml-auto mb-auto card d-flex flex-row rounded align-items-center p-3'>
          <p className='m-auto'>Select a person from a list</p>
        </div>
      );
    }
    if (this.state.error) {
      return (
        <div className='text-center col-12 col-md-6 ml-auto mb-auto card d-flex flex-row rounded align-items-center p-3'>
          <ErrorIndicator />
        </div>
      );
    }

    const { loading, person } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = loading ? null : <PersonContent person={person} />;

    return (
      <div className='col-12 col-md-6 ml-auto mb-auto card d-flex flex-row rounded align-items-center p-3'>
        {spinner}
        {content}
      </div>
    );
  }
}

export default PersonDetails;
