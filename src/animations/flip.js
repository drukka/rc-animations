const flipWebkit = `@-webkit-keyframes flip-<%name%> {
    0% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  
    40% {
      -webkit-transform: perspective(400px) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -190deg);
      transform: perspective(400px) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -190deg);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  
    50% {
      -webkit-transform: perspective(400px) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -170deg);
      transform: perspective(400px) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -170deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  
    80% {
      -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
      transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  
    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  }`;

const flip = ` @keyframes flip-<%name%> {
    0% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  
    40% {
      -webkit-transform: perspective(400px) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -190deg);
      transform: perspective(400px) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -190deg);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  
    50% {
      -webkit-transform: perspective(400px) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -170deg);
      transform: perspective(400px) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -170deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  
    80% {
      -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
      transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  
    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  }`;

export { flip, flipWebkit };
