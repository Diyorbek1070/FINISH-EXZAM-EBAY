import React from 'react';
import './Category.scss';
import logoEbey from '../../images/div.png'
import banner from '../../images/div (1).png'
import { useState} from 'react';
import Container from '../../utils/Container';
import { useDispatch,useSelector } from 'react-redux';
import imagereclam from '../../images/image.png';
import UseFetchData from '../../hooks/useFetchData';
import {BsArrowRightShort,BsFillHeartFill,BsBasket3,BsFillBasket3Fill} from 'react-icons/bs'
import {SlBasket} from 'react-icons/sl';
import {AiOutlineHeart} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Category = () => {
    const dispatch = useDispatch();
    const categoryFurnutureData = UseFetchData("/categories/3/products")
    const categoryShoes = UseFetchData("/categories/4/products?offset=0&limit=7")
    const categoryData = UseFetchData("/categories")
    const praductData = UseFetchData("/products")
    
    const likePraduct = useSelector(state => state.likedPraduct.likedPraduct);
    const basketPraduct = useSelector(state => state.basketedPraduct.basketedPraduct)

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
        <section className='category'> 
            <Container>
             <div className='imaga-box'>
                <img src={imagereclam} alt="" />
             </div>
               <div className='furnuture-category'>
               { categoryFurnutureData?
                categoryFurnutureData.map(categorydataItem =>
                     <div className='category-wrapper' key={categorydataItem.id}>
                        <div className='category-wrapper__imgbox'>
                        <Link  to={`/praduct/${categorydataItem.id}`}>
                         <img src={categorydataItem.images} alt="" />
                        </Link>
                        </div>
                        <div className='category-wrapper-item'>
                        <h1>{categorydataItem.title}</h1>
                         <div>
                           <strong>${categorydataItem.price}</strong>
                          {basketPraduct.find(n => n?.id === categorydataItem?.id)?<BsFillBasket3Fill onClick={()=> removeBasket(categorydataItem)} />:<BsBasket3 onClick={() => addToBasket(categorydataItem)}/>}
                          {likePraduct.find(p => p?.id === categorydataItem?.id)?<BsFillHeartFill onClick={() => removeLiked(categorydataItem)} />:<AiOutlineHeart onClick={() => addToLike(categorydataItem)}/>}
                         </div>
                        </div>
                     </div>
                    )
                    :<></>
                }
               </div>
               <div className='category-title'>
               <h2>Score these trending kicks</h2>
                <Link to="/" className='category-title__link'>
                 <span>See all</span><BsArrowRightShort/>
                </Link>
               </div>
               <div className='category-praduct'>
                  {categoryData?
                    categoryData.map(categoryDataitem =>
                        <div key={categoryDataitem.id} className="category-praduct-item">
                          <Link to={`/praductcategory/${categoryDataitem.id}`}>
                          <img src={categoryDataitem.image} alt="" /> 
                          <p>{categoryDataitem.name}</p>
                          </Link>
                        </div>  
                        )
                        :<></>
                  }
               </div>
               <div className='category-title'>
               <h2>Extra 20% off for Presidents' Day</h2>
                <Link to="/" className='category-title__link'>
                 <span>See all</span><BsArrowRightShort/>
                </Link>
               </div>
               <div className='shoes-category'>
                  {categoryShoes?
                    categoryShoes.map(categoryShoesItem =>
                      <div className='shoes-category__item' key={categoryShoesItem.id}>
                      <Link to={`/praduct/${categoryShoesItem.id}`}>
                       <img src={categoryShoesItem.images} alt="" />
                       <p>{categoryShoesItem.title}</p>
                      </Link>
                      </div>
                    ):<></>
                  }
               </div>
               <div className='category-banner'>
                    <div className='category-banner-item1'>
                      <div className='category-banner-item1__textbox'>
                        <p>Featured</p>
                        <img src={logoEbey} alt="" />
                        <h3>Deals made easy all year long.</h3>
                        <p>Free shipping. Best prices.</p>
                        <Link to="/">
                         <span>Get your thing</span><BsArrowRightShort/>
                        </Link>
                      </div>
                      <img src={banner} alt="" />
                    </div>
                    <div className='category-banner-item2'>

                    </div>
               </div>
               <div className='category-title'>
               <h2>Today's Deals – All With Free Shipping</h2>
                <Link to="/" className='category-title__link'>
                 <span>See all</span><BsArrowRightShort/>
                </Link>
               </div>
               <div className='furnuture-category'>
               { praductData?
                praductData.map(praductdataItem =>
                     <div className='category-wrapper' key={praductdataItem.id}>
                        <div className='category-wrapper__imgbox'>
                        <Link to={`/praduct/${praductdataItem.id}`}>
                         <img src={praductdataItem.images} alt="" />
                        </Link>
                        </div>
                        <div className='category-wrapper-item'>
                        <h1>{praductdataItem.title}</h1>
                        <div>
                           <strong>${praductdataItem.price}</strong>
                           {basketPraduct.find(n => n?.id === praductdataItem?.id)?<BsFillBasket3Fill onClick={()=> removeBasket(praductdataItem)} />:<BsBasket3 onClick={() => addToBasket(praductdataItem)}/>}
                           {likePraduct.find(p => p?.id === praductdataItem?.id)?<BsFillHeartFill onClick={() => removeLiked(praductdataItem)} />:<AiOutlineHeart onClick={() => addToLike(praductdataItem)}/>}
                         </div>
                        </div>
                     </div>
                    )
                    :<></>
                }
               </div>
            </Container>
        </section>
    );
}

export default Category;
