import React, { Component } from 'react';
import TrackVisibility from 'react-on-screen';
import styles from './styles.css';

const ComponentToTrack = props => {
  const duration = props.animation.duration ? props.animation.duration : 1;
  const fill_mode = props.animation.fill_mode
    ? props.animation.fill_mode
    : 'both';
  let style = {
    WebkitAnimationDuration: `${duration}s`,
    animationDuration: `${duration}s`,
    WebkitAnimationFillMode: fill_mode,
    AnimationFillMode: fill_mode
  };
  return (
    <div
      className={
        props.isVisible ? styles[props.animation.name] : styles[props.default]
      }
      style={style}
    >
      {props.children}
    </div>
  );
};

const Animation = props => {
  return (
    <TrackVisibility>
      <ComponentToTrack animation={props.animation} default='anime'>
        {props.children}
      </ComponentToTrack>
    </TrackVisibility>
  );
};

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
export { Animation, HoverAnimation };
