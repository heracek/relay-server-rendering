import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div id="app">
        <h1>This is app container</h1>
        <div className="children">{this.props.children || null}</div>
      </div>
    );
  }
}

export default App;