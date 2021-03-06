import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Categories from './containers/Categories';
import Jokes from './containers/Jokes';
import ViewedJokes from './containers/ViewedJokes';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: 1000,
  margin: 'auto'
}

class App extends Component {


  render() {
    return (
      <div style={styles}>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/categories' component={Categories} />
        <Route path='/jokes' exact component={Jokes} />
        <Route path='/viewed' component={ViewedJokes} />
      </div>
    );
  }
}

export default App;
