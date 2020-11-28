const destroy = () => {
    let content = document.querySelector(".content");

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
};

export { destroy };
