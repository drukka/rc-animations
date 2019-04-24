import React from 'react';

import styles from '../styles.css';

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

export default ComponentToTrack;
