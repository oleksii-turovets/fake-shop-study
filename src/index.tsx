import React from "react";
import ReactDOM from "react-dom/client";

// const title = React.createElement("h1", { id: "title" }, "Hello React.js");
// console.log(title);

// jsx => extended
// tsx => ts ectended
const title = <h1 id="title">Hello React.js</h1>;
console.log(title);

const content = (
    <div>
        {title}
        {10 + 10}
        <ul className="list">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui
            sed adipisci facilis voluptatem deleniti illum incidunt numquam, ea,
            beatae amet quaerat aspernatur et praesentium temporibus sunt eos
            voluptate ullam.
        </p>
    </div>
);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode>{content}</React.StrictMode>);
