import React, { Component } from 'react';
import Comic from './Comic';
import api from '../api';

class Comics extends Component {
  state = {
    comics: [],
    loaded: false,
  }

  componentDidMount() {
    api.comics(this.props.character).then(comics => {
      this.setState({ comics, loaded: true });
    });
  }

  render() {
    return (
      <div>
        {this.state.loaded === false && <div>Loading...</div>}
        {this.state.comics.length === 0 && this.state.loaded && <div>No comics</div>}
        {this.state.comics.map(c => <Comic key={c.id} {...c} />)}
      </div>
    );
  }
}

export default Comics;
