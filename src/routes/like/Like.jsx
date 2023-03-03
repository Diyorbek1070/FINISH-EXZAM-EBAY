import React from 'react';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import { useSelector } from 'react-redux';
import './Like.scss';
import Container from '../../utils/Container';
import { Link } from 'react-router-dom';
import CategoryFooter from '../../components/footer/CategoryFooter';
const Like = () => {
    const likePraduct = useSelector(state => state.likedPraduct.likedPraduct);
    return (
        <section>
            <Header/>
            <Search/>
            <Container>
            <h1>Like Product</h1>
            <div className='likepraduct'>
               {likePraduct?
                likePraduct.map(likePraductItem =>
                  <div key={likePraductItem.id} className='likepraduct-item'>
                    <Link to="/">
                     <img src={likePraductItem?.images} alt="" />
                    </Link>
                    <div>
                        <h2>{likePraductItem.title}</h2>
                        <p>{likePraductItem.description}</p>
                        <strong>${likePraductItem.price}</strong>
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

export default Like;
