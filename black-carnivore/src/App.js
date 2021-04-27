import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <div id = "container">
        <Header/>
        <Nav/>
        <Video/>
      </div>
    </div>
  );
}
}

class Header extends React.Component {
  render() {
  return (
    <div id="header">
      <h1>Black Carnivore</h1>
      <h3>A whole foods, meat-based lifestyle for vibrant health</h3>
    </div>
  );
}
}

class Nav extends React.Component {
  render() {
  return (
    <div id="nav">
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Why Carnivore?</a></li>
        <li><a href="#">Podcast</a></li>
        <li><a href="#">Shopping</a></li>
        <li><a href="#">Merchandise</a></li>
        <li><a href="#">Events</a></li>
      </ul>
    </div>
  );
}
}

class Video extends React.Component {
  render() {
  return (
    <div id="video">
      <iframe 
      width="750" 
      height="480" 
      src="https://www.youtube.com/embed/VeWbhUFdtrY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

      </iframe>
    </div>
  );
}
}

export default App;
