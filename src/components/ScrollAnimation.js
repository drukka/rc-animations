import React from 'react';
import TrackVisibility from 'react-on-screen';
import ComponentToTrack from './ComponentToTrack';
const ScrollAnimation = props => {
  return (
    <TrackVisibility>
      <ComponentToTrack animation={props.animation} default='anime'>
        {props.children}
      </ComponentToTrack>
    </TrackVisibility>
  );
};
export default ScrollAnimation;
