import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";

const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <MainLayout />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);