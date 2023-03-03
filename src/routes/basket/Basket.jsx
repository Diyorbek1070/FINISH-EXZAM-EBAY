import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../utils/Container';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import { Link } from 'react-router-dom';
import CategoryFooter from '../../components/footer/CategoryFooter';
const Basket = () => {
    const basketPraduct = useSelector(state => state.basketedPraduct.basketedPraduct)
    console.log(basketPraduct);
    return (
        <section>
           <Header/>
           <Search/>
           <Container>
            <h1>Basket in Product</h1>
            <div className='likepraduct'>
               {basketPraduct?
                basketPraduct.map(basketPraductItem =>
                  <div key={basketPraductItem.id} className='likepraduct-item'>
                    <Link to="/">
                     <img src={basketPraductItem?.images} alt="" />
                    </Link>
                    <div>
                        <h2>{basketPraductItem.title}</h2>
                        <p>{basketPraductItem.description}</p>
                        <strong>${basketPraductItem.price}</strong>
                    </div>
                  </div>
                )
             :<></>}
             </div>
            </Container>
           <CategoryFooter/>
        </section>
    );
}

export default Basket;
