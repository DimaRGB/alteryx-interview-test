import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Registration.css';
import * as actions from './state/actions';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions)
})

class Login extends React.Component {
  render() {
    const { actions } = this.props;

    return (
      <form className="registration" onSubmit={actions.registerUser}>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type='submit'>Create Accout</button>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);
