const bounceInUpWebkit = `@-webkit-keyframes bounceInUp-<%name%> {
    0%,
    60%,
    75%,
    90%,
    100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: <%opacityFrom%>;
      -webkit-transform: translate3d(0, <%transformFrom%>%, 0);
      transform: translate3d(0, <%transformFrom%>%, 0);
    }
  
    60% {
      opacity: <%opacityTo%>;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }
  
    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }
  
    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }
  
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }`;

const bounceInUp = `@keyframes bounceInUp-<%name%> {
    0%,
    60%,
    75%,
    90%,
    100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: <%opacityFrom%>;
      -webkit-transform: translate3d(0, <%transformFrom%>%, 0);
      transform: translate3d(0, <%transformFrom%>%, 0);
    }
  
    60% {
      opacity: <%opacityTo%>;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }
  
    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }
  
    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }
  
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }`;
export { bounceInUp, bounceInUpWebkit };
