import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

class List extends Component {
  render() {

    // Create variable with mapped data
    let list_items = this.props.data.map(function(item, index) {
      return (
        <ListItem text={item} key={index} />
      )
    })

    // Return the HTML
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
          {list_items}
        </ul>
      </div>
    )
  }
}


List.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired
};


export default List;
