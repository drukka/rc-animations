const bounceInDownWebkit = `@-webkit-keyframes bounceInDown-<%name%> {

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
        -webkit-transform: translate3d(0, -<%transformFrom%>%, 0);
        transform: translate3d(0, -<%transformFrom%>%, 0);
    }

    60% {
        opacity: <%opacityTo%>;
        -webkit-transform: translate3d(0, 25px, 0);
        transform: translate3d(0, 25px, 0);
    }

    75% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
    }

    90% {
        -webkit-transform: translate3d(0, 5px, 0);
        transform: translate3d(0, 5px, 0);
    }

    100% {
        -webkit-transform: none;
        transform: none;
    }
}`;

const bounceInDown = `@keyframes bounceInDown-<%name%>{

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
        -webkit-transform: translate3d(0, -<%transformFrom%>%, 0);
        transform: translate3d(0, -<%transformFrom%>%, 0);
    }

    60% {
        opacity: <%opacityTo%>;
        -webkit-transform: translate3d(0, 25px, 0);
        transform: translate3d(0, 25px, 0);
    }

    75% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
    }

    90% {
        -webkit-transform: translate3d(0, 5px, 0);
        transform: translate3d(0, 5px, 0);
    }

    100% {
        -webkit-transform: none;
        transform: none;
    }
}`;
export { bounceInDown, bounceInDownWebkit };
