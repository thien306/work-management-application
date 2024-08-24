import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      iterm: ''
    };
  }

  handleChange = (event) => {
    this.setState({iterm : event.target.value});
  }

  handleAddItem = () => {
    const {iterm, list} = this.state;
    if(iterm !== '') {
      this.setState({
        list: [...list, iterm],
          iterm: ''
      });
    }
  };

  render() {
    return(
      <div>
      <h1>Todo List</h1>
      <input
          type="text"
          value={this.state.iterm}
          onChange={this.handleChange}
      />
      <button onClick={this.handleAddItem}>Add</button>
      <ul>
          {this.state.list.map((iterm, index) => (
              <li key={index}>{iterm}</li>
          ))}
      </ul>
  </div>
    );
  }
}



export default App;
