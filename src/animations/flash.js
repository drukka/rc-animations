const flashWebkit = `@-webkit-keyframes flash-<%name%> {

    0%,
    50%,
    100% {
        opacity: <%opacityTo%>;
    }

    25%,
    75% {
        opacity: <%opacityFrom%>;
    }
}`;

const flash = `@keyframes flash-<%name%> {

    0%,
    50%,
    100% {
        opacity: <%opacityTo%>;
    }

    25%,
    75% {
        opacity: <%opacityFrom%>;
    }
}`;
export { flash, flashWebkit };
