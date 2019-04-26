const zoomInDownWebkit = `@-webkit-keyframes zoomInDown-<%name%>{
    0% {
        opacity: <%opacityFrom%>;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60% {
        opacity: <%opacityTo%>;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
}`;

const zoomInDown = `@keyframes zoomInDown-<%name%> {
    0% {
        opacity: <%opacityFrom%>;
        -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60% {
        opacity: <%opacityTo%>;
        -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
}`;

export { zoomInDown, zoomInDownWebkit };
