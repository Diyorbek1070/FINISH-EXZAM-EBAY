import React, { useRef } from 'react';
import './Carusel.scss';
import { Link } from 'react-router-dom';
import callaway from '../../images/callaway.png'
import merrel from '../../images/merrel.png'
import specized from '../../images/specized.png'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';
const Carusel = () => {
    const carusel = useRef();
    function civepeLeft(){
          carusel.current.scrollBy({
            left:-1312,
            behavior:'smooth'
          })
    }

    function civepeRight(){
        carusel.current.scrollBy({
            left:1312,
            behavior:'smooth'
          })
    }
    return (
        <section className='carusel'>
                <button className='carusel-wrapper__left' onClick={civepeLeft}><AiOutlineLeft/></button>
            <div className='carusel-wrapper' ref={carusel}>
               <div className='carusel-wrapper__card1'>
               <div className='carusel-wrapper__item1'>
                 <h1>Super savings at the Brand Outlet</h1>
                 <p>Up to 60% off the brands you love.</p>
                 <Link to="/">Shop now</Link>
              </div>
              <div className='carusel-wrapper__img1'>
                <img src={callaway} alt=""/>
                <img src={merrel} alt=""/>
                <img src={specized} alt="" />
              </div>
               </div>
               <div className='carusel-wrapper__card2'>
                 <div className='carusel-wrapper__card2__item2'>
                   <h1>Gear up for winter sports!</h1>
                   <p>From slopes to après ski, we’ve got you covered.</p>
                   <Link to="/">Shop now</Link>
                 </div>
                 <div className='carusel-wrapper__card2__img2'>
                  <img src="https://i.ebayimg.com/images/g/3zsAAOSwGcVj900r/s-l400.webp" alt="" />
                  <img src="https://i.ebayimg.com/images/g/9C4AAOSwKwFj9005/s-l400.webp" alt="" />
                  <img src="https://i.ebayimg.com/images/g/NywAAOSwuUBj901D/s-l400.webp" alt="" />
                 </div>
               </div>
               <div className='carusel-wrapper__card1'>
               <div className='carusel-wrapper__item1'>
                 <h1>Super savings at the Brand Outlet</h1>
                 <p>Up to 60% off the brands you love.</p>
                 <Link to="/">Shop now</Link>
              </div>
              <div className='carusel-wrapper__img1'>
                <img src={callaway} alt=""/>
                <img src={merrel} alt=""/>
                <img src={specized} alt="" />
              </div>
               </div>
               <div className='carusel-wrapper__card2'>
                 <div className='carusel-wrapper__card2__item2'>
                   <h1>Gear up for winter sports!</h1>
                   <p>From slopes to après ski, we’ve got you covered.</p>
                   <Link to="/">Shop now</Link>
                 </div>
                 <div className='carusel-wrapper__card2__img2'>
                  <img src="https://i.ebayimg.com/images/g/3zsAAOSwGcVj900r/s-l400.webp" alt="" />
                  <img src="https://i.ebayimg.com/images/g/9C4AAOSwKwFj9005/s-l400.webp" alt="" />
                  <img src="https://i.ebayimg.com/images/g/NywAAOSwuUBj901D/s-l400.webp" alt="" />
                 </div>
               </div>
            </div>
            <button onClick={civepeRight} className='carusel-wrapper__right'><AiOutlineRight/></button>
        </section>
    );
}

export default Carusel;
