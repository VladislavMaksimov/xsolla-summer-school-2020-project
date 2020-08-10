const routesMap = {
    "/foo": "FOO",
    "/bar": "BAR",
    "/baz": "BAZ"
}

const root = document.querySelector("main");

const router = () => {
    const path = location.pathname;
    root.innerHTML = routesMap[path];
}

let list = document.getElementsByTagName("A");
for (let link of list) {
    link.addEventListener("click", event => {
        event.preventDefault();
        history.pushState({}, "", event.target.href);
        router();
    });
}