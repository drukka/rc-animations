const rotateInUpLeftWebkit = `@-webkit-keyframes rotateInUpLeft-<%name%> {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
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

const rotateInUpLeft = `@keyframes rotateInUpLeft-<%name%> {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
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
export { rotateInUpLeft, rotateInUpLeftWebkit };
