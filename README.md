# rc-animations

> React animations on scroll

[![NPM](https://img.shields.io/npm/v/rc-animations.svg)](https://www.npmjs.com/package/rc-animations) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rc-animations
```

## Animations

- slideInDown
- slideInLeft
- slideInRight
- slideInUp
- fadeIn
- fadeInDown
- fadeInDownBig
- fadeInLeft
- fadeInLeftBig
- fadeInRight
- fadeInRightBig
- fadeInUp
- fadeInUpBig
- zoomIn
- zoomInDown
- zoomInLeft
- zoomInRigh
- zoomInUp
- bounce
- bounceIn
- flip
- flipInX
- flipInY
- rotateIn
- rotateInDownLeft
- rotateInDownRight
- rotateInUpLeft
- rotateInUpRight
- flash
- pulse
- rubberBand
- shake
- swing
- tada
- wobble
- lightSpeedIn

## Usage

```jsx
import React, { Component } from 'react';

import Animations from 'rc-animations';

class App extends Component {
  render() {
    return (
      <Animation animation='lightSpeedIn'>
        <img src='https://drukka.hu/assets/img/drukka_logo.png' />
      </Animation>
    );
  }
}
```

## License

MIT © [norco95](https://github.com/drukka/rc-animations)
