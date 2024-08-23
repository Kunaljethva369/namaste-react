import React from "react";
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="w-[100px]">
                <img src={logo} alt="logo" className="w-100"/>
            </div>
            <nav>
                <ul className="flex gap-10">
                    <li><Link className="font-medium text-lg text-[#3d4152]" to='/'>Home</Link></li>
                    <li><Link className="font-medium text-lg text-[#3d4152]" to="/about">About</Link></li>
                    <li><Link className="font-medium text-lg text-[#3d4152]" to="/grocery">Grocery</Link></li>
                    <li><Link className="font-medium text-lg text-[#3d4152]" to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;