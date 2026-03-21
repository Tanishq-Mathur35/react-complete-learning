import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    );
}

// const ReactElement = {
//     type: "a",
//     props: {
//         href: "https://google.com",
//         target: "_blank",
//     },
//     childern: "Click me to visit google",
// };

const anotherElement = (
    <a href="https://google.com" target="_blank">
        Visit Google
    </a>
);

const anotherUser = "learning React";

const ReactElement = React.createElement(
    "a",
    { href: "https://google.com", target: "_blank" },
    "Click me to visit google",
    anotherUser,
);

createRoot(document.getElementById("root")).render(anotherElement);
