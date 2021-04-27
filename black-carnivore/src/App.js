import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div id="App">
      <Header/>
      <Nav/>
      <Video/>
    </div>
  );
}
}

class Header extends React.Component {
  render() {
  return (
    <div id="header">
      <h1>Black Carnivore</h1>
    </div>
  );
}
}

class Nav extends React.Component {
  render() {
  return (
    <div id="nav">
      
    </div>
  );
}
}

class Video extends React.Component {
  render() {
  return (
    <div id="video">
      
    </div>
  );
}
}

export default App;
