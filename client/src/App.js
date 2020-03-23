import React from 'react';
import NavBar from './components/NavBar';
import PlayerList from './components/PlayerList';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players : []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(response => response.json())
      .then(data => this.setState({ ...this.state, players : data}))
      console.log('component mounted');
  }

  render() {
    return (
      <div className='App'>
        <h1>Women's Cup Players</h1>
        <NavBar />
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}


export default App;
