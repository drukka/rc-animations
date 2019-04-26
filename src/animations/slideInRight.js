const slideInRight = `@-webkit-keyframes slideInRight-<%name%> {
    0% {
        -webkit-transform: translateX(<%transformFrom%>%);
        transform: translateX(<%transformFrom%>%);
        visibility: visible;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}`;

const slideInRightWebkit = `@keyframes slideInRight-<%name%> {
    0% {
        -webkit-transform: translateX(<%transformFrom%>%);
        transform: translateX(<%transformFrom%>%);
        visibility: visible;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}`;
export { slideInRight, slideInRightWebkit };
