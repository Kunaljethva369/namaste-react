import React from 'react'
import Header from './Components/Header/Header';
import SignInForm from './Components/SignUpForm/SignUpForm';
import { createBrowserRouter,Outlet } from 'react-router-dom'
import Browse from './Components/Browse/Browse';
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <div className="relative min-h-screen">
                    <Header />
                    <Outlet />
                </div>
            </QueryClientProvider>
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