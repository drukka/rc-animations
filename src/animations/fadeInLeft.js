const fadeInLeftWebkit = `@-webkit-keyframes fadeInLeft-<%name%> {
    0% {
        opacity: <%opacityFrom%>;
        -webkit-transform: translate3d(-<%transformFrom%>%, 0, 0);
        transform: translate3d(-<%transformFrom%>%, 0, 0);
    }

    100% {
        opacity: <%opacityTo%>;
        -webkit-transform: none;
        transform: none;
    }
}`;

const fadeInLeft = `@keyframes fadeInLeft-<%name%> {
    0% {
        opacity: <%opacityFrom%>;
        -webkit-transform: translate3d(-<%transformFrom%>%, 0, 0);
        transform: translate3d(-<%transformFrom%>%, 0, 0);
    }

    100% {
        opacity: <%opacityTo%>;
        -webkit-transform: none;
        transform: none;
    }
}`;
export { fadeInLeft, fadeInLeftWebkit };
