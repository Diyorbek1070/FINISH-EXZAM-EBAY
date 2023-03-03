import React from 'react';
import { NavLink } from 'react-router-dom';
import {AiFillHeart} from 'react-icons/ai'
import './Navbar.scss';
const Navbar = () => {
    return (
        <section className='navbar'>
            <div className='navbar-wrapper'>
                 <ul className='navbar-wrapper__list'>
                    <li>
                        <NavLink exact to="/" activeClassName='activelink'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/like" activeClassName='activelink'><AiFillHeart/> Saved</NavLink>
                    </li> 
                    <li>
                        <NavLink  to="/motors" activeClassName='activelink'>Motors</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/electronics" activeClassName='activelink'>Electronics</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/collectibles" activeClassName='activelink'>Collectibles</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/garden" activeClassName='activelink'>Home & Garden</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/fashion" activeClassName='activelink'>Fashion</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/toys" activeClassName='activelink'>Toys</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/sporting" activeClassName='activelink'>Sporting Goods</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/industrial" activeClassName='activelink'>Business & Industrial</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/watches" activeClassName='activelink'>Jewelry & Watches</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/live" activeClassName='activelink'>eBay Live</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/refurbished" activeClassName='activelink'>Refurbished</NavLink>
                    </li>
                 </ul>
            </div>
        </section>
    );
}

export default Navbar;
