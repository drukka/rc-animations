import React, { Component } from 'react';
import ComponentToTrack from './ComponentToTrack';

class EventAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  componentWillReceiveProps() {
    this.setState({
      isActive: true
    });

    setTimeout(
      () => {
        this.setState({
          isActive: false
        });
      },
      this.props.animation.duration
        ? this.props.animation.duration * 1000
        : 1000
    );
  }
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
export default EventAnimation;
