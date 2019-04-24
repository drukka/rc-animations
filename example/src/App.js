import React, { Component } from 'react';

import { Animation, HoverAnimation } from 'rc-animations';
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
      let animation = {
        name: item,
        duration: 3,
        fill_mode: 'both'
      };
      return (
        <Animation key={index} animation={animation}>
          <img src='https://drukka.hu/assets/img/drukka_logo.png' />
        </Animation>
      );
    });
    return (
      <div>
        <HoverAnimation
          animation={{ name: 'lightSpeedIn', duration: 3, fill_mode: 'both' }}
        >
          <img src='https://drukka.hu/assets/img/drukka_logo.png' />
        </HoverAnimation>
        {items}
      </div>
    );
  }
}
