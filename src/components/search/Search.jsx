import React, { useState } from 'react';
import Container from '../../utils/Container';
import './Search.scss';
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';
import {AiOutlineDown} from 'react-icons/ai';
import {CiSearch} from 'react-icons/ci';
import useFetchData from '../../hooks/useFetchData';
const Search = () => {
  const categoryPraduct = useFetchData("/categories");
  const [searchValue,setSearchValue] = useState("")
  
  function searchVlue(e){
    setSearchValue(e.target.value);
  }

  function giveMoreResult(e){
    e.preventDefault();
    window.location.pathname = `/searchresult/${searchValue}`;
  }
    return (
        <section className='search'>
           <Container>
              <div className='search-wrapper'>
                <Link to="/">
                <img src={logo} alt="" />
                </Link>
                <div className='search-wrapper-item'>
                <div className='search-wrapper-category'>
                  <Link to="/">Shop by category</Link>
                  <AiOutlineDown/>
                </div>
                <form onSubmit={giveMoreResult} className='search-wrapper_form'>
                    <div className='search-wrapper_form__item'>
                    <CiSearch/>
                    <input onChange={searchVlue} type="text" placeholder="Search for anything"/>
                    <select name="All Categories">
                        <option value="All Categories">All Categories</option>
                    </select>
                    </div>
                    <button type='submit'>Search</button>
                </form> 
                </div> 
              </div>
           </Container> 
        </section>
    );
}

export default Search;
