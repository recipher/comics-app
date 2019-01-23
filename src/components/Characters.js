import React, { Component } from 'react';
import Character from './Character';
import api from '../api';

class Characters extends Component {
  state = {
    characters: [],
    loaded: false,
  }

  componentDidMount() {
    api.characters().then(characters => {
      this.setState({ characters, loaded: true });
    });
  }
  render() {
    return (
      <div>    
        {this.state.loaded === false && <div>Loading...</div>}
        {this.state.characters.length === 0 && this.state.loaded && <div>No characters</div>}
        {this.state.characters.map(c => <Character key={c.id} {...c} />)}
      </div>
    );
  }
}

export default Characters;
