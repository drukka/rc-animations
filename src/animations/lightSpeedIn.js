const lightSpeedInWebkit = `@-webkit-keyframes lightSpeedIn-<%name%> {
    0% {
      -webkit-transform: translate3d(<%transformFrom%>%, 0, 0) skewX(-30deg);
      transform: translate3d(<%transformFrom%>%, 0, 0) skewX(-30deg);
      opacity: <%opacityFrom%>;
    }
  
    60% {
      -webkit-transform: skewX(20deg);
      transform: skewX(20deg);
      opacity: <%opacityTo%>;
    }
  
    80% {
      -webkit-transform: skewX(-5deg);
      transform: skewX(-5deg);
      opacity: <%opacityFrom%>;
    }
  
    100% {
      -webkit-transform: none;
      transform: none;
      opacity: <%opacityTo%>;
    }
  }`;

const lightSpeedIn = `@keyframes lightSpeedIn-<%name%> {
    0% {
      -webkit-transform: translate3d(<%transformFrom%>%, 0, 0) skewX(-30deg);
      transform: translate3d(<%transformFrom%>%, 0, 0) skewX(-30deg);
      opacity: 0;
    }
  
    60% {
      -webkit-transform: skewX(20deg);
      transform: skewX(20deg);
      opacity: 1;
    }
  
    80% {
      -webkit-transform: skewX(-5deg);
      transform: skewX(-5deg);
      opacity: 1;
    }
  
    100% {
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }`;
export { lightSpeedIn, lightSpeedInWebkit };
