import React from "react";
import ReactDOM from 'react-dom/client';

const Title = () =>{
    return <h2>I am Title</h2>
}

const Heading = () => {
    return (
        <>
            {Title()}
            <h1>Hello From Functional Compo</h1>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);