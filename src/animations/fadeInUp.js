const fadeInUpWebkit = `@-webkit-keyframes fadeInUp-<%name%> {
    0% {
        opacity: <%opacityFrom%>;
        -webkit-transform: translate3d(0, <%transformFrom%>%, 0);
        transform: translate3d(0, <%transformFrom%>%, 0);
    }

    100% {
        opacity: <%opacityTo%>;
        -webkit-transform: none;
        transform: none;
    }
}`;
const fadeInUp = `
@keyframes fadeInUp-<%name%> {
    0% {
        opacity: <%opacityFrom%>;
        -webkit-transform: translate3d(0, <%transformFrom%>%, 0);
        transform: translate3d(0, <%transformFrom%>%, 0);
    }

    100% {
        opacity: <%opacityTo%>;
        -webkit-transform: none;
        transform: none;
    }
}`;
export { fadeInUp, fadeInUpWebkit };
