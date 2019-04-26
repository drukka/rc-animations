const rotateInDownRightWebkit = `@-webkit-keyframes rotateInDownRight-<%name%> {
    0% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      transform: rotate3d(0, 0, 1, 45deg);
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

const rotateInDownRight = `@keyframes rotateInDownRight-<%name%> {
    0% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      transform: rotate3d(0, 0, 1, 45deg);
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
export { rotateInDownRight, rotateInDownRightWebkit };
