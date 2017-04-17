import React, { Component } from 'react';

let list_data = [
  "Cat",
  "Dog",
  "Fish",
  "Parrot",
  "Rabbit"
]


class ListItem extends Component {
  render() {
    return (
      <li>{this.props.text}</li>
    )
  }
}


class List extends Component {
  render() {

    // Create variable with mapped data
    let list_items = list_data.map(function(item, index) {
      return (
        <ListItem text={item} key={index} />
      )
    })

    // Return the HTML
    return (
      <div>
        <h2>List title</h2>
        <ul>
          {list_items}
        </ul>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <List />
      </div>
    );
  }
}

export default App;
