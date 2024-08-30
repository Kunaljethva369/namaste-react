import React,{ Children,useEffect,useState } from 'react'
import Header from './Components/Header/Header';
import SignInForm from './Components/SignUpForm/SignUpForm';
import { createBrowserRouter,Outlet, useNavigate } from 'react-router-dom'
import Browse from './Components/Browse/Browse';

function App() {

    // const navigate = useNavigate();
    // const [showFullHeader,setShowFullHeader] = useState(false);
    // useEffect(()=>{
    //     if(localStorage.getItem('db5d6e71-c39b-454a-868a-981ff41be6e3') != null){
    //         setShowFullHeader(true);
    //         navigate("/browse");
    //     }
    //     else{
    //         navigate("/");
    //     }
    // },[]);

    return (
        <>
            <div className="relative min-h-screen">
                <Header />
                <Outlet />
                {/* <Header showFullHeader={showFullHeader} setShowFullHeader={setShowFullHeader} /> */}
                {/* <Outlet context={{ setShowFullHeader }}/> */}
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