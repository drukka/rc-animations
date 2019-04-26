const slideInUp = `@-webkit-keyframes slideInUp-<%name%> {
    0% {
        -webkit-transform: translateY(<%transformFrom%>%);
        transform: translateY(<%transformFrom%>%);
        visibility: visible;
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}`;

const slideInUpWebkit = `@keyframes slideInUp-<%name%> {
    0% {
        -webkit-transform: translateY(<%transformFrom%>%);
        transform: translateY(<%transformFrom%>%);
        visibility: visible;
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}`;
export { slideInUp, slideInUpWebkit };
