const rotateInUpRightWebkit = `@-webkit-keyframes rotateInUpRight-<%name%> {
    0% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, -90deg);
      transform: rotate3d(0, 0, 1, -90deg);
      opacity: <%opacityFrom%>;
    }
  
    100% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: none;
      transform: none;
      opacity: <%opacityTo%>;
    }
  }`;
const rotateInUpRight = `
  @keyframes rotateInUpRight-<%name%> {
    0% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, -90deg);
      transform: rotate3d(0, 0, 1, -90deg);
      opacity: <%opacityFrom%>;
    }
  
    100% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: none;
      transform: none;
      opacity: <%opacityTo%>;
    }
  }`;
export { rotateInUpRight, rotateInUpRightWebkit };
