import React, { Component } from 'react';

import Animation from 'rc-animations';
const ITEMS = [
  'slideInDown',
  'slideInLeft',
  'slideInRight',
  'slideInUp',
  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'fadeInUp',
  'fadeInUpBig',
  'zoomIn',
  'zoomInDown',
  'zoomInLeft',
  'zoomInRigh',
  'zoomInUp',
  'bounce',
  'bounceIn',
  'flip',
  'flipInX',
  'flipInY',
  'rotateIn',
  'rotateInDownLeft',
  'rotateInDownRight',
  'rotateInUpLeft',
  'rotateInUpRight',
  'flash',
  'pulse',
  'rubberBand',
  'shake',
  'swing',
  'tada',
  'wobble',
  'lightSpeedIn'
];
export default class App extends Component {
  render() {
    let items = ITEMS.map((item, index) => {
      return (
        <Animation key={index} animation={item}>
          <img src='https://drukka.hu/assets/img/drukka_logo.png' />
        </Animation>
      );
    });
    return <div>{items}</div>;
  }
}
