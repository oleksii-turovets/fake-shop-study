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

type TitleProps = {
    name: string;
    text?: string;
    year?: number;
};

function Title({ name, text, year }: TitleProps) {
    return (
        <>
            <h1>Hello {name}</h1>
            <p>{text}</p>
            <div>Year: {year}</div>
        </>
    );
}

const App = () => {
    return (
        <div className="app">
            <Title name="App" text="Lorem ipsum dolor" year={1970} />
            <Title
                name="React"
                text="sit amet consectetur adipisicing"
                year={1990}
            />
            <Title
                name="TS"
                text="id facere officia ipsam eligendi"
                year={2015}
            />
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
