import React from 'react';
import { useParams , Link } from 'react-router-dom';
import Container from '../../utils/Container';
import {AiOutlineLeft} from 'react-icons/ai'
import useFetchData from '../../hooks/useFetchData';
import { useSelector, useDispatch} from 'react-redux';
import {AiOutlineHeart} from 'react-icons/ai'
import {BsFillHeartFill} from 'react-icons/bs'
import CategoryFooter from '../../components/footer/CategoryFooter';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import './Praduct.scss';
const Praduct = () => {
    const dispatch = useDispatch();
    const praductInfo = useParams();
    const praductData = useFetchData(`/products/${praductInfo.praductId}`)
    const categoryId = (praductData?.category?.id);
    const praductCategoryData = useFetchData(`/categories/${categoryId}/products`)   

    const basketPraduct = useSelector(state => state.basketedPraduct.basketedPraduct)
    const likePraduct = useSelector(state => state.likedPraduct.likedPraduct);

    function addToBasket(categorydataItem){
      dispatch({categorydataItem,type:"BASKET_PRADUCT"})
    }

    function removeBasket(categorydataItem){
       dispatch({id:categorydataItem.id,type:"REMOVE_BASKET"})
    }

    function addToLike(categorydataItem){
      dispatch({categorydataItem,type:"LIKE_FURNUTURE"})
    }

    function removeLiked(categorydataItem){
      dispatch({id:categorydataItem.id , type:"REMOVE_LIKED"})
    }

    return (
        <section className='praduct'>
           <Header/>
           <Search/>
           <Container>
             <div className='praduct-navbar'>
              <div className='praduct-navbar-item1'>
               <Link to="/" className='praduct-navbar-item1_left'><AiOutlineLeft/> </Link>
               <Link to="/" className='praduct-navbar-item1_link'> Back to home page</Link>
               <Link to="/" className='praduct-navbar-item1_link2'> | Listed in category: </Link>
               <Link to="/"  className='praduct-navbar-item1_link2 item1_link2-coclor'>Electronics</Link>
               <span> /</span> <Link  className='praduct-navbar-item1_link2 item1_link2-coclor'>Cell Phones & Accessories</Link> 
                <span> /</span> <Link  className='praduct-navbar-item1_link2 item1_link2-coclor'>Cell Phones & Smartphones</Link>
              </div>
              <div className='praduct-navbar-item2'>
               <Link to="/">Share</Link>
                <span> | </span>
                <Link to="/">Add to Watchlist</Link>
              </div>
             </div>
             <div className="praduct-item">
               <div className='praduct-item__img'>
                <span>EXTRA <span>$10</span> OFF 3+ ITEMS WITH CODE <span>10OFF2023TECH</span></span>
                <img src={praductData?.images} alt="" />
               </div>
               <div className='praduct-item__text'>
                  <h2>{praductData?.title}</h2>
                  <div className='praduct-item__text-item'>
                    <p>Condition: {praductData?.description}</p>
                    <p>Model: {praductData?.category.name}</p>
                    <p>Carrier: {praductData?.creationAt}</p>
                  </div>
                  <div className='praduct-item__text__box'>
                     <div>
                     <span>Price:</span><strong> US ${praductData?.price} </strong>
                     {likePraduct.find(p => p?.id === praductData?.id)?<BsFillHeartFill onClick={() => removeLiked(praductData)} />:<AiOutlineHeart onClick={() => addToLike(praductData)}/>}
                     </div>
                     <div className='praduct-item__text__box__btn'>
                      <button>Buy it Now</button>
                      {basketPraduct.find(n => n?.id === praductData?.id)?<button className='btn3color' onClick={()=> removeBasket(praductData)}>Added to card</button> : <button className='btn2color' onClick={() => addToBasket(praductData)}>Add to cart</button>}
                     </div>
                  </div>
               </div>
             </div>
           </Container>
           <CategoryFooter/>
        </section>
    );
}

export default Praduct;
