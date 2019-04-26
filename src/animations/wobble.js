const wobbleWebkit = `@-webkit-keyframes wobble-<%name%> {
    0% {
      -webkit-transform: none;
      transform: none;
    }
  
    15% {
      -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }
  
    30% {
      -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }
  
    45% {
      -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }
  
    60% {
      -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }
  
    75% {
      -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }
  
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }`;

const wobble = ` @keyframes wobble-<%name%> {
    0% {
      -webkit-transform: none;
      transform: none;
    }
  
    15% {
      -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }
  
    30% {
      -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }
  
    45% {
      -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }
  
    60% {
      -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }
  
    75% {
      -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }
  
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }`;
export { wobble, wobbleWebkit };
