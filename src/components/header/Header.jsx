import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Container from '../../utils/Container';
import {AiOutlineDown} from 'react-icons/ai';
import {CiBellOn} from 'react-icons/ci';
import {SlBasket} from 'react-icons/sl';
import './Header.scss'
const Header = () => {
  const basketPraduct = useSelector(state => state.basketedPraduct.basketedPraduct)
  const createUserData = useSelector(state => state.nameReducer.name)
  const locetsion = useLocation(); 
  return locetsion.pathname.includes("/create")?<></>:(
   <header className='header'>
          <Container>
            <div className='header-wrapper'>
            <nav className='header-nav'>
                <div className='navlink'>
                   Hi! {createUserData?createUserData:<><Link to="/login">Sing in</Link> or  <Link to="/create">register</Link></>}
                </div>
                <div className='header-nav__link'>
                    <Link to="/">Daily Deals</Link>
                    <Link to="/">Brand Outlet</Link>
                    <Link to="/">Help & Contact</Link>
                </div>
            </nav>
            <div className='header__components'>
               <Link to="/">Sell</Link>  
               <Link to="/">Watchlist <AiOutlineDown/></Link>
               <Link to="/">My eBay <AiOutlineDown/></Link>
               <Link className='header__components__call' to="/"><CiBellOn/></Link>
               <Link to="/basket" className='header__components__bascet'>{basketPraduct.length} <SlBasket/></Link>
            </div>
            </div>
          </Container>  
    </header>
  )
}

export default Header;
