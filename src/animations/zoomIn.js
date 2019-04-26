const zoomInWebkit = `@-webkit-keyframes zoomIn-<%name%> {
    0% {
        opacity: <%opacityFrom%>;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }

    50% {
        opacity: <%opacityTo%>;
    }
}`;
const zoomIn = `
@keyframes zoomIn-<%name%> {
    0% {
        opacity: <%opacityFrom%>;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }

    50% {
        opacity: <%opacityTo%>;
    }
}`;
export { zoomIn, zoomInWebkit };
