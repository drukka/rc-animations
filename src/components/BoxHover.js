import React, { Component } from 'react';
import styles from '../styles.css';
import Animation from './Animation';
function getComponent(children, type) {
  let indexOfHovered = -1;
  React.Children.forEach(children, (child, index) => {
    if (child.type.name === type) {
      indexOfHovered = index;
      return;
    }
  });
  return indexOfHovered;
}

class BoxHover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }
  hoverOn = () => {
    this.setState({
      hovered: true
    });
  };
  hoverOff = () => {
    this.setState({
      hovered: false
    });
  };
  render() {
    const hovered = this.props.children[
      getComponent(this.props.children, 'Hovered')
    ];
    const hover = this.props.children[
      getComponent(this.props.children, 'Hover')
    ];
    return (
      <div
        onMouseOver={this.hoverOn}
        onMouseLeave={this.hoverOff}
        className={styles.hover}
      >
        {this.state.hovered ? (
          <Animation
            animation={{
              name: 'zoomInImage',
              duration: 1,
              fill_mode: 'both'
            }}
          >
            {hover}
          </Animation>
        ) : (
          hover
        )}
        {this.state.hovered ? <div>{hovered}</div> : null}
      </div>
    );
  }
}
export default BoxHover;
