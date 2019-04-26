const rotateInWebkit = `@-webkit-keyframes rotateIn-<%name%> {
    0% {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: rotate3d(0, 0, 1, -200deg);
      transform: rotate3d(0, 0, 1, -200deg);
      opacity: <%opacityFrom%>;
    }
  
    100% {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: none;
      transform: none;
      opacity: <%opacityTo%>;
    }
  }`;

const rotateIn = `@keyframes rotateIn-<%name%> {
    0% {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: rotate3d(0, 0, 1, -200deg);
      transform: rotate3d(0, 0, 1, -200deg);
      opacity: <%opacityFrom%>;
    }
  
    100% {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: none;
      transform: none;
      opacity: <%opacityTo%>;
    }
  }`;
export { rotateIn, rotateInWebkit };
