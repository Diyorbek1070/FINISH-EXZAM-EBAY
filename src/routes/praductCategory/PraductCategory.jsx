import React from 'react';
import MiniContainer from '../../utils/MiniContainer';
import { Link, useParams } from 'react-router-dom';
import './PraductCategory.scss';
import UseFetchData from '../../hooks/useFetchData';
import {SlBasket} from 'react-icons/sl';
import { useDispatch,useSelector } from 'react-redux';
import {BsFillHeartFill,BsBasket3,BsFillBasket3Fill} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import CategoryFooter from '../../components/footer/CategoryFooter';
const PraductCategory = () => {
    const dispatch = useDispatch();
    const likePraduct = useSelector(state => state.likedPraduct.likedPraduct);
    const basketPraduct = useSelector(state => state.basketedPraduct.basketedPraduct)
    const categoryInfo = useParams();
    const categoryPraductData = UseFetchData(`/categories/${categoryInfo.categoryId}/products`)
    const categoryData = UseFetchData(`/categories/${categoryInfo.categoryId}`)
    const categoryDataRek = UseFetchData(`/categories/${categoryInfo.categoryId}/products?offset=0&limit=4`)
    
    function addToBasket(categorydataItem){
      dispatch({categorydataItem,type:"BASKET_PRADUCT"})
    }

    function removeBasket(categorydataItem){
       dispatch({id:categorydataItem.id,type:"REMOVE_BASKET"})
    }

    function TrimDescriptsion(str){
      return str.split(" ").slice(0,7).join(" ") + "..."
    }

    function addToLike(categorydataItem){
      dispatch({categorydataItem,type:"LIKE_FURNUTURE"})
    }

    function removeLiked(categorydataItem){
      dispatch({id:categorydataItem.id , type:"REMOVE_LIKED"})
    }

    return (
        <div>
            <section>
            <Header/>
             <Search/>
                <MiniContainer>
                  <div className='category-data'>
                        <h2>{categoryData?.name}</h2>
                      <div>
                        <img src={categoryData?.image} alt="" />
                      </div>
                      <p>Up to 60% off Apple tech</p>
                      <p>Save on AirPods, iPhones, and more.</p>
                    </div>
                    <div className='category-data-rek'>
                       <h3>Shop by Category</h3>
                       <div className='category-data-rek-item'>
                           {categoryDataRek?
                             categoryDataRek.map(categoryDataRekItem =>
                                <div className='category-data-rek-item_card' key={categoryDataRekItem.id}>
                                  <Link to={`/praduct/${categoryDataRekItem.id}`}>
                                  <img src={categoryDataRekItem.images} alt="" />
                                  </Link>
                                  <p>{categoryDataRekItem.title}</p>   
                                </div>
                             ):<></>
                           }
                       </div>
                    </div>
                    <div className="praduct-category">
                       {categoryPraductData?
                        categoryPraductData.map(categoryPraductItem =>
                          <div className='praduct-category-item' key={categoryPraductItem.id}>
                             <div className='praduct-category-item__imgbox'>
                              <Link to={`/praduct/${categoryPraductItem.id}`}>
                              <img src={categoryPraductItem.images} alt="" />
                              </Link>
                             </div>
                             <h3>{categoryPraductItem.title}</h3>
                             <div className='praduct-category-item_box'>
                             <p>{TrimDescriptsion(categoryPraductItem.description)}</p>
                             <div>
                             <strong>${categoryPraductItem.price}</strong>
                             <div>
                             {basketPraduct.find(n => n?.id === categoryPraductItem?.id)?<BsFillBasket3Fill onClick={()=> removeBasket(categoryPraductItem)} />:<BsBasket3 onClick={() => addToBasket(categoryPraductItem)}/>}
                             {likePraduct.find(p => p?.id === categoryPraductItem?.id)?<BsFillHeartFill onClick={() => removeLiked(categoryPraductItem)} />:<AiOutlineHeart onClick={() => addToLike(categoryPraductItem)}/>}
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

export default PraductCategory;
