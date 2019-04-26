const zoomInUpWebkit = `@-webkit-keyframes zoomInU-<%name%> {
    0% {
      opacity: <%opacityFrom%>;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  
    60% {
      opacity: <%opacityTo%>;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }`;

const zoomInUp = `@keyframes zoomInUp-<%name%> {
    0% {
      opacity: <%opacityFrom%>;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  
    60% {
      opacity: <%opacityTo%>;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }`;
export { zoomInUp, zoomInUpWebkit };
