import React from "react";
import ReactDOM from "react-dom/client";

function List() {
    return (
        <React.Fragment>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                ipsum voluptas quasi hic minima iusto ex, vero dignissimos
                beatae suscipit tempora dicta, id facere officia ipsam eligendi.
                Culpa, sapiente excepturi.
            </p>
        </React.Fragment>
    );
}

function Title() {
    return <h1>Hello TS</h1>;
}

const App = () => {
    return (
        <div className="app">
            <Title />
            <List />
        </div>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
