import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import About from './components/About';
import Contact from './components/Contact';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from "./components/Error";
import RestaurantLayout from "./components/RestaurantLayout";

const Grocery = lazy(()=>import('./components/Grocery'));

const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <Outlet/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <MainLayout  />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: 
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery />
                </Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantLayout />
            },

        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);