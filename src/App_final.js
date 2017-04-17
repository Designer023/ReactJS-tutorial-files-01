import React, { Component } from 'react';

import List from './components/List';


let top_animals = [
  "Cat",
  "Dog",
  "Fish",
  "Parrot",
  "Rabbit"
]

let other_animals = [
  "koala",
  "Chimp",
  "Tiger",
  "Shark",
  "Humming bird"
]



class App extends Component {
  render() {
    return (
      <div>
        <h1>List of lists</h1>
        <List data={top_animals} title="Top animals" />
        <List data={other_animals} title="Other animals"/>
      </div>
    );
  }
}

export default App;
