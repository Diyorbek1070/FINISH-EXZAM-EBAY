import React from 'react';
import './HomeFooter.scss';
import Container  from '../../utils/Container';
import { Link } from 'react-router-dom';
import {ImFacebook2} from 'react-icons/im';
import {FaTwitterSquare} from 'react-icons/fa';
const HomeFooter = () => {
    return (
        <div>
             <footer className='homefooter'>
              <Container>
                 <div className='homefooter-item'>
                   <ul className='homefooter-item__buy'>
                    <li className='homefooter-item__firtchild'>
                     <Link to="/">Buy</Link>
                    </li>
                    <li className='homefooter-item__child'>
                     <Link to="/">Registration</Link>
                    </li>
                    <li className='homefooter-item__child'>
                     <Link to="/">eBay Money Back Guarantee</Link>
                    </li>
                    <li className='homefooter-item__child'>
                     <Link to="/">Bidding & buying help</Link>
                    </li>
                    <li className='homefooter-item__child'>
                     <Link to="/">Stores</Link>
                    </li>
                    <li className='homefooter-item__child'>
                     <Link to="/">eBay for Charity</Link>
                    </li>
                    <li className='homefooter-item__child'>
                     <Link to="/">Charity Shop</Link>
                    </li>
                    <li className='homefooter-item__child'>
                     <Link to="/">Seasonal Sales and events</Link>
                    </li>
                   </ul>
                   <div className='homefooter-item-ulbox'>
                     <ul className='homefooter-item-ulbox__sell'>
                      <li  className='homefooter-item__firtchild'>
                        <Link to="/">Sell</Link>
                      </li>
                      <li className='homefooter-item__child'>
                        <Link to="/">Start selling</Link>
                      </li>
                      <li className='homefooter-item__child'>
                        <Link to="/">How to sell</Link>
                      </li>
                      <li className='homefooter-item__child'>
                        <Link to="/">Business sellers</Link>
                      </li>
                      <li className='homefooter-item__child'>
                        <Link to="/">Affiliates</Link>
                      </li>
                     </ul>
                     <ul className='homefooter-item-ulbox__tools'>
                      <li>
                        <Link to="/"  className='homefooter-item__firtchild'>Tools & apps</Link>
                      </li>
                      <li className='homefooter-item__child'>
                        <Link to="/">Developers</Link>
                      </li>
                      <li className='homefooter-item__child'>
                        <Link to="/">Security center</Link>
                      </li>
                      <li className='homefooter-item__child'>
                        <Link to="/">Site map</Link>
                      </li>
                     </ul>
                   </div>
                   <ul className='homefooter-item__stay'>
                     <li>
                        <Link to="/"  className='homefooter-item__firtchild'>Stay connected</Link>
                     </li>
                     <li className='homefooter-item__child'>
                        <Link to="/"><ImFacebook2/> Facebook</Link>
                     </li>
                     <li className='homefooter-item__child'>
                        <Link to="/"><FaTwitterSquare/> Twitter</Link>
                     </li>
                   </ul>
                   <ul className='homefooter-item__about'>
                    <li>
                        <Link to="/"  className='homefooter-item__firtchild'>About eBay</Link>
                    </li>
                    <li className='homefooter-item__child'>
                        <Link to="/">Company info</Link>
                    </li>
                    <li className='homefooter-item__child'>
                        <Link to="/">News</Link>
                    </li>
                    <li className='homefooter-item__child'>
                        <Link to="/">Careers</Link>
                    </li>
                    <li className='homefooter-item__child'>
                        <Link to="/">Diversity & Inclusion</Link>
                    </li>
                    <li className='homefooter-item__child'>
                        <Link to="/">Global Impact</Link>
                    </li>
                    <li className='homefooter-item__child'>
                        <Link to="/">Government relations</Link>
                    </li>
                    <li className='homefooter-item__child'>
                        <Link to="/">Advertise with us</Link>
                    </li>
                    <li className='homefooter-item__child'>
                        <Link to="/">Policies</Link>
                    </li>
                    <li className='homefooter-item__child'>
                        <Link to="/">Verified Rights Owner (VeRO) Program</Link>
                    </li>
                    <li className='homefooter-item__child'>
                        <Link to="/">eCI Licenses</Link>
                    </li>
                   </ul>
                   <div className='homefooter-item-ulbox2'>
                     <ul className='homefooter-item-ulbox2__help'>
                      <li>
                        <Link to="/"  className='homefooter-item__firtchild'>Help & Contact</Link>
                      </li>
                      <li className='homefooter-item__child'>
                        <Link to="/">Seller Center</Link>
                      </li>
                      <li className='homefooter-item__child'>
                        <Link to="/">Contact Us</Link>
                      </li>
                      <li className='homefooter-item__child'>
                        <Link to="/">eBay Returns</Link>
                      </li>
                     </ul>
                     <ul className='homefooter-item-ulbox2__comunity'>
                       <li>
                        <Link to="/"  className='homefooter-item__firtchild'>Community</Link>
                       </li>
                       <li className='homefooter-item__child'>
                        <Link to="/">Announcements</Link>
                       </li>
                       <li className='homefooter-item__child'>
                        <Link to="/">eBay Community</Link>
                       </li>
                       <li className='homefooter-item__child'>
                        <Link to="/">eBay for Business Podcast</Link>
                       </li>
                     </ul>
                   </div>
                 </div>
              </Container>
             </footer>
        </div>
    );
}

export default HomeFooter;
