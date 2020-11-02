import React from 'react';
import '../scss/App.scss';
import Error404 from './Error404';
import Header from './Header';
import Banner from './Banner';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';

function App(props) {

  return (
    <div className="App">
      <Banner />
      <Header />
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  authUser: state.authState
})

export default connect(mapStateToProps)(App);
