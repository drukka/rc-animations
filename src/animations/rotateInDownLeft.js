const rotateInDownLeftWebkit = `@-webkit-keyframes rotateInDownLeft-<%name%> {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: <%opacityFrom%>;
    }

    100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: none;
        transform: none;
        opacity: <%opacityTo%>;
    }
}`;

const rotateInDownLeft = `@keyframes rotateInDownLeft-<%name%> {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: <%opacityFrom%>;
    }

    100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: none;
        transform: none;
        opacity: <%opacityTo%>;
    }
}`;

export { rotateInDownLeft, rotateInDownLeftWebkit };
