import React from "react";
import ReactDOM from "react-dom/client";
import { List } from "./List";

type TitleProps = {
    name?: string;
    text: string;
    year: number;
};

function Title({ name= 'Jack', text, year }: TitleProps) {
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
            <Title
                text="Lorem ipsum dolor"
                year={1970} />
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
