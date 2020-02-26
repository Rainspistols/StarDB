import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import Spinner from '../spinner/spinner';
import PersonContent from './personContent';
import ErrorIndicator from '../errorIndicator/errorIndicator';

class PersonDetails extends Component {
  swapiService = new SwapiService();
  wrapClasses =
    'col-12 col-md-6 ml-auto mb-auto card d-flex flex-row rounded align-items-center p-3';

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
      this.updatePerson();
    }
  }

  updatePerson = () => {
    const { personId } = this.props;
    if (!personId) return;

    this.setState({ loading: true });

    this.swapiService.Get.person(personId)
      .catch(err => {
        this.setState({ error: true, loading: false });
      })
      .then(person => {
        this.setState({ person });
      })
      .then(() => this.setState({ loading: false }));
  };

  render() {
    const { loading, person, error } = this.state;

    const spinner = loading && !error ? <Spinner /> : null;
    const content =
      person && !loading ? <PersonContent person={person} /> : null;
    const emptyPerson =
      !person && !loading ? (
        <p className='m-auto'>Select a person from a list</p>
      ) : null;

    const errorIndicator = error ? <ErrorIndicator /> : null;

    return (
      <div className={this.wrapClasses}>
        {emptyPerson}
        {spinner}
        {content}
        {errorIndicator}
      </div>
    );
  }
}

export default PersonDetails;
