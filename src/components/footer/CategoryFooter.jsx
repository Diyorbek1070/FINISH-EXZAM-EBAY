import React from 'react';
import './CategoryFooter.scss';
import Container from '../../utils/Container';
import { Link } from 'react-router-dom';
const CategoryFooter = () => {
    return (
        <footer className='category-footer'>
            <Container>
                <ul className='category-footer-list'>
                    <li>
                        <Link to="/">About eBay</Link>
                    </li>
                    <li>
                        <Link to="/">Announcements</Link>
                    </li>
                    <li>
                        <Link to="/">Community</Link>
                    </li>
                    <li>
                        <Link to="/">Security Center</Link>
                    </li>
                    <li>
                        <Link to="/">Seller Center</Link>
                    </li>
                    <li>
                        <Link to="/">Policies</Link>
                    </li>
                    <li>
                        <Link to="/">Affiliates</Link>
                    </li>
                    <li>
                        <Link to="/">Help & Contact</Link>
                    </li>
                    <li>
                        <Link to="/">Site Map</Link>
                    </li>
                </ul>
                <div className='category-footer-link'>
                <Link to="/">Copyright © 1995-2023 eBay Inc. All Rights Reserved.Accessibility ,User AgreementPrivacy Payments Terms of Use Cookies Your Privacy Choices and AdChoice</Link>
                </div>
            </Container>
        </footer>
    );
}

export default CategoryFooter;
