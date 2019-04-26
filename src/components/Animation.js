import React, { Component } from 'react';

import ComponentToTrack from './ComponentToTrack';

class Animation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ComponentToTrack isVisible={true} animation={this.props.animation}>
        {this.props.children}
      </ComponentToTrack>
    );
  }
}
export default Animation;
