import React from 'react';
import TrackVisibility from 'react-on-screen';
import styles from './styles.css';

const ComponentToTrack = props => {
  return (
    <div className={props.isVisible ? styles[props.animation] : styles.anime}>
      {props.children}
    </div>
  );
};

const Animation = props => {
  return (
    <TrackVisibility>
      <ComponentToTrack animation={props.animation}>
        {props.children}
      </ComponentToTrack>
    </TrackVisibility>
  );
};
export default Animation;
