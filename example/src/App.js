import React, { Component } from 'react';

import {
  Hover,
  Hovered,
  BoxHover,
  ScrollAnimation,
  HoverAnimation,
  EventAnimation,
  Progressbar,
  Animation
} from 'rc-animations';

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
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
      value: 0
    };

    // var x = setInterval(
    //   function() {
    //     this.setState({
    //       value: this.state.value + 10
    //     });
    //     if (this.state.value === 100) {
    //       clearInterval(x);
    //     }
    //   }.bind(this),
    //   500
    // );
  }
  animate = () => {
    this.setState({
      animate: !this.state.animate
    });
  };
  render() {
    let items = ITEMS.map((item, index) => {
      let animation = {
        name: item,
        duration: 3,
        fill_mode: 'both'
      };
      return (
        <ScrollAnimation key={index} animation={animation}>
          <img src='https://drukka.hu/assets/img/drukka_logo.png' />
        </ScrollAnimation>
      );
    });
    const name = 'flip';
    return (
      <div>
        <div className='box'>
          <Animation
            animation={{
              name: name,
              duration: 1,
              fill_mode: 'both',
              opacityFrom: 0.2,
              opacityTo: 0.8,
              transformFrom: 2
            }}
          >
            <p>Rendi</p>
          </Animation>
          <Animation
            animation={{
              name: name,
              duration: 1,
              fill_mode: 'both',
              opacityFrom: 0,
              opacityTo: 1,
              transformFrom: 10
            }}
          >
            <p>Rendi</p>
          </Animation>
          <BoxHover>
            <Hover
              animation={{
                name: 'zoomIn'
              }}
            >
              <img
                src='https://drukka.hu/assets/portfoliok/web_app/rendi.jpg'
                alt='drukka'
              />
            </Hover>

            <Hovered background='yellow' opacity={0.8}>
              <Animation
                animation={{
                  name: 'fadeInDown',
                  duration: 1,
                  fill_mode: 'both'
                }}
              >
                <p>Rendi</p>
              </Animation>
              <Animation
                animation={{
                  name: 'fadeInUp',
                  duration: 1,
                  fill_mode: 'both'
                }}
              >
                <p>asdasdasdsd asd asd as dvashgd fhg</p>
              </Animation>
            </Hovered>
          </BoxHover>
        </div>
        <div className='progress'>
          <Progressbar
            value={this.state.value}
            barColor='red'
            progressColor='blue'
            withValue={true}
          />
        </div>
        <div>
          <EventAnimation
            animation={{ name: 'lightSpeedIn', duration: 3, fill_mode: 'both' }}
            anime={this.animate}
            animate={this.state.animate}
          >
            <img src='https://drukka.hu/assets/img/drukka_logo.png' />
          </EventAnimation>
          <button onClick={this.animate}>
            <img src='https://drukka.hu/assets/img/drukka_logo.png' />
          </button>
        </div>
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
