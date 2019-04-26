const fadeInRightWebkit = `@-webkit-keyframes fadeInRight-<%name%> {
    0% {
        opacity: <%opacityFrom%>;
        -webkit-transform: translate3d(<%transformFrom%>%, 0, 0);
        transform: translate3d(<%transformFrom%>%, 0, 0);
    }

    100% {
        opacity: <%opacityTo%>;
        -webkit-transform: none;
        transform: none;
    }
}`;

const fadeInRight = `@keyframes fadeInRight-<%name%> {
    0% {
        opacity: <%opacityFrom%>;
        -webkit-transform: translate3d(<%transformFrom%>%, 0, 0);
        transform: translate3d(<%transformFrom%>%, 0, 0);
    }

    100% {
        opacity: <%opacityTo%>;
        -webkit-transform: none;
        transform: none;
    }
}`;

export { fadeInRight, fadeInRightWebkit };
