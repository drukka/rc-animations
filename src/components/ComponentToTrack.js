import React from 'react';
import animations from '../animations/animtatios';
import styles from '../styles.css';
function generateKeyframe(tpl, data) {
  var re = /<%([^%>]+)?%>/g,
    match;
  while ((match = re.exec(tpl))) {
    tpl = tpl.replace(match[0], data[match[1]]);
  }
  return tpl;
}

const ComponentToTrack = props => {
  let styleSheet = document.styleSheets[0];
  const opacityFrom = props.animation.opacityFrom
    ? props.animation.opacityFrom
    : 0;

  const opacityTo = props.animation.opacityTo ? props.animation.opacityTo : 1;
  const transformFrom = props.animation.transformFrom
    ? props.animation.transformFrom * 100
    : 100;

  const animationName = Math.random()
    .toString(36)
    .substring(7);
  const animationData = {
    name: animationName,
    opacityFrom: opacityFrom,
    opacityTo: opacityTo,
    transformFrom: transformFrom
  };
  let keyframes = generateKeyframe(
    animations[props.animation.name],
    animationData
  );
  let keyframesWebkit = generateKeyframe(
    animations[`${props.animation.name}Webkit`],
    animationData
  );

  if (keyframes) {
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }
  if (keyframesWebkit) {
    styleSheet.insertRule(keyframesWebkit, styleSheet.cssRules.length);
  }
  const duration = props.animation.duration ? props.animation.duration : 1;
  const fill_mode = props.animation.fill_mode
    ? props.animation.fill_mode
    : 'both';
  let style = {
    animationName: `${props.animation.name}-${animationName}`,
    WebkitAnimationName: `${props.animation.name}-${animationName}`,
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
