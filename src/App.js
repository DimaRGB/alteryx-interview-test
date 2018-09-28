import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import './App.css';
import { tokenSelector } from './modules/currentUser';

const mapStateToProps = state => ({
  isAuthorized: !!tokenSelector(state),
});

class App extends React.Component {
  render() {
    const { isAuthorized } = this.props;

    return (
      <div className="app">
        <header>
          <nav>
            {isAuthorized ? (
              <React.Fragment>
                <Link to='/profile'>Profile</Link>
                <Link to='/logout'>Log Out</Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Sign Up</Link>
              </React.Fragment>
            )}
          </nav>
        </header>
        <main>
          <Route></Route>
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
