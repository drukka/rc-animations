const slideInLeftWebkit = `@-webkit-keyframes slideInLeft-<%name%> {
    0% {
        -webkit-transform: translateX(-<%transformFrom%>%);
        transform: translateX(-<%transformFrom%>%);
        visibility: visible;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}`;

const slideInLeft = `@keyframes slideInLeft-<%name%> {
    0% {
        -webkit-transform: translateX(-<%transformFrom%>%);
        transform: translateX(-<%transformFrom%>%);
        visibility: visible;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}`;
export { slideInLeftWebkit, slideInLeft };
