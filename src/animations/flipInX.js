const flipInXWebkit = `@-webkit-keyframes flipInX-<%name%> {
    0% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
      opacity: <%opacityFrom%>;
    }
  
    40% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
    }
  
    60% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: <%opacityTo%>;
    }
  
    80% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
  
    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  }`;

const flipInX = `@keyframes flipInX<%name%> {
    0% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
      opacity: <%opacityFrom%>;
    }
  
    40% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
    }
  
    60% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: <%opacityTo%>;
    }
  
    80% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
  
    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  }`;
export { flipInX, flipInXWebkit };
