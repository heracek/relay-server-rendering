import React, {Component} from 'react';
import Relay from 'react-relay';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>This is a home container</h1>
      </div>
    );
  }
}

Home = Relay.createContainer(Home, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        list {
         name
        }
      }
    `
  }
});

export default Home;