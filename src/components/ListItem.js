import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render() {
    return (
      <li>{this.props.text}</li>
    )
  }
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default ListItem;
