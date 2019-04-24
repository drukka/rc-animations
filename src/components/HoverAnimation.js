import React, { Component } from 'react';

import ComponentToTrack from './ComponentToTrack';

class HoverAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  hoverOn = () => {
    this.setState({
      isActive: true
    });
  };
  hoverOff = () => {
    this.setState({
      isActive: false
    });
  };
  render() {
    return (
      <div onMouseOver={this.hoverOn} onMouseLeave={this.hoverOff}>
        <ComponentToTrack
          animation={this.props.animation}
          isVisible={this.state.isActive}
          over={this.hoverOn}
          default='animed'
        >
          {this.props.children}
        </ComponentToTrack>
      </div>
    );
  }
}
export default HoverAnimation;
