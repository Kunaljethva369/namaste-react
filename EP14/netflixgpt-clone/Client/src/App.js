import React,{ Children,useEffect,useState } from 'react'
import Header from './Components/Header/Header';
import SignInForm from './Components/SignUpForm/SignUpForm';
import { createBrowserRouter,Outlet,useNavigate } from 'react-router-dom'
import Browse from './Components/Browse/Browse';

function App() {
    return (
        <>
            <div className="relative min-h-screen">
                <Header />
                <Outlet />
            </div>
        </>
    )
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <SignInForm />
            },
            {
                path: "/browse",
                element: <Browse />
            }
        ]
    }
]);

export default App;