import React, { Component } from 'react';
import styles from '../styles.css';

class Hover extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
export default Hover;
