const fadeInWebkit = `
@-webkit-keyframes fadeIn-<%name%> {
    0% {
        opacity: <%opacityFrom%>;
    }

    100% {
        opacity: <%opacityTo%>;
    }
}
`;

const fadeIn = `
@keyframes fadeIn-<%name%> {
    0% {
        opacity: <%opacityFrom%>;
    }

    100% {
        opacity: <%opacityTo%>;
    }
}
`;

export { fadeIn, fadeInWebkit };
