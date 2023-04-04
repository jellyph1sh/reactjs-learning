let n = 0;

const render = () => {
    const title = React.createElement("h1", {}, "Hey everyone!", React.createElement("span", {}, n));
    ReactDOM.render(title, document.querySelector("#app"));
}

window.setInterval(() => {
    render();
    n++;
}, 1000)