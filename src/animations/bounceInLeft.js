const bounceInLeftWebkit = `@-webkit-keyframes bounceInLeft-<%name%> {
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
      -webkit-transform: translate3d(<%transformFrom%>%, 0, 0);
      transform: translate3d(<%transformFrom%>%, 0, 0);
    }
  
    60% {
      opacity: <%opacityTo%>;
      -webkit-transform: translate3d(25px, 0, 0);
      transform: translate3d(25px, 0, 0);
    }
  
    75% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }
  
    90% {
      -webkit-transform: translate3d(5px, 0, 0);
      transform: translate3d(5px, 0, 0);
    }
  
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }`;

const bounceInLeft = `@keyframes bounceInLeft-<%name%> {
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
      -webkit-transform: translate3d(<%transformFrom%>%, 0, 0);
      transform: translate3d(<%transformFrom%>%, 0, 0);
    }
  
    60% {
      opacity: <%opacityTo%>;
      -webkit-transform: translate3d(25px, 0, 0);
      transform: translate3d(25px, 0, 0);
    }
  
    75% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }
  
    90% {
      -webkit-transform: translate3d(5px, 0, 0);
      transform: translate3d(5px, 0, 0);
    }
  
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }`;

export { bounceInLeft, bounceInLeftWebkit };
