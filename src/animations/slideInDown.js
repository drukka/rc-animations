const slideInDownWebkit = ` @-webkit-keyframes slideInDown-<%name%> {
    0% {
        -webkit-transform: translateY(-<%transformFrom%>%);
        transform: translateY(-<%transformFrom%>%);
        visibility: visible;
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}`;

const slideInDown = `@keyframes slideInDown-<%name%> {
    0% {
        -webkit-transform: translateY(-<%transformFrom%>%);
        transform: translateY(-<%transformFrom%>%);
        visibility: visible;
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}`;
export { slideInDownWebkit, slideInDown };
