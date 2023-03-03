import React from 'react';
import { useParams,Link } from 'react-router-dom';
import UseFetchData from '../../hooks/useFetchData';
import MiniContainer from '../../utils/MiniContainer';
import './SearchResult.scss';
import {SlBasket} from 'react-icons/sl';
import {AiOutlineHeart} from 'react-icons/ai';
import CategoryFooter from '../../components/footer/CategoryFooter';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
const SearchResult = () => {
    const praductInfo = useParams();
    const SearchData  = UseFetchData(`/products/?title=${praductInfo.praductName}`)
    console.log(SearchData);

    function TrimDescriptsion(str){
        return str.split(" ").slice(0,7).join(" ") + "..."
      }

    return (
        <div>
          <Header/>
          <Search/>
           <section className='search-serult'>
                <MiniContainer>
                <h2>Search Result Praduct</h2>
                <div className="praduct-category">
                       {SearchData?
                        SearchData.map(SearchDataItem =>
                          <div className='praduct-category-item' key={SearchDataItem.id}>
                             <div className='praduct-category-item__imgbox'>
                              <Link to={`/praduct/${SearchDataItem.id}`}>
                              <img src={SearchDataItem.images} alt="" />
                              </Link>
                             </div>
                             <h3>{SearchDataItem.title}</h3>
                             <div className='praduct-category-item_box'>
                             <p>{TrimDescriptsion(SearchDataItem.description)}</p>
                             <div>
                             <strong>${SearchDataItem.price}</strong>
                             <div>
                             <SlBasket/>
                             <AiOutlineHeart/>
                             </div>
                             </div>
                             </div>
                          </div>
                        ):<></>
                       }
                    </div>
                </MiniContainer>
                <CategoryFooter/>
            </section>
        </div>
    );
}

export default SearchResult;
