const bounceInWebkit = `@-webkit-keyframes bounceIn-<%name%> {
    0%,
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: <%opacityFrom%>;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
  
    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
  
    60% {
      opacity: <%opacityTo%>;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }
  
    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }
  
    100% {
      opacity: <%opacityTo%>;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }`;

const bounceIn = `@keyframes bounceIn-<%name%> {
    0%,
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: <%opacityFrom%>;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
  
    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
  
    60% {
      opacity: <%opacityTo%>;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }
  
    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }
  
    100% {
      opacity: <%opacityTo%>;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }`;
export { bounceIn, bounceInWebkit };
