import React, { Component } from 'react';
import styles from '../styles.css';
import Animation from './Animation';
class Hovered extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      backgroundColor: this.props.background
        ? this.props.background
        : 'transparent',
      opacity: this.props.opacity ? this.props.opacity : 0
    };
    return (
      <Animation
        animation={{
          name: 'fadeIn'
        }}
      >
        <div style={style} className={styles.hovered}>
          {this.props.children}
        </div>
      </Animation>
    );
  }
}
export default Hovered;
