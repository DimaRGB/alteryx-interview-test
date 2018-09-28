import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Registration.css';
import * as actions from './state/actions';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

class Login extends React.Component {
  state = {
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  };

  setFormField(fieldName) {
    return (event) => {
      const value = event.target.value;
      this.setState(prevState => ({
        formData: {
          ...prevState.formData,
          [fieldName]: value
        }
      }));
    }
  }

  handleSubmit = (event) => {
    const { actions } = this.props;
    const { formData } = this.state;
    actions.registerUser(formData);
    event.preventDefault();
  }

  render() {
    const { state } = this;
    return (
      <form className="registration" onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" value={state.firstName} onInput={this.setFormField('firstName')} />
        <input type="text" name="lastName" value={state.lastName} onInput={this.setFormField('lastName')} />
        <input type="email" name="email" value={state.emailName} onInput={this.setFormField('email')} />
        <input type="password" name="password" value={state.passwordName} onInput={this.setFormField('password')} />
        <button type='submit'>Create Accout</button>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);
