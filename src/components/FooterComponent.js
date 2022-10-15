import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
          //FOOTER COMPONENT--------------//
            <div className='footer font-two'>
                <div className='container-fluid mx-4 py-5'>
                    <div className='row py-5'>
                        <div className='col-12 col-lg-4 py-5'>
                            <div className='row'>
                                <img src='/assets/images/logo2.png' alt='Logo' height='60' width='61' />
                                <h4 className='navbrand px-3 pt-3'>Shirleys Art Studio</h4>
                            </div>
                        </div>
                        <div className='col-6 col-lg-2 pt-5'>
                            <h5 className='font-two'>Shirleys Art Studio</h5>
                            <ul className='list-unstyled'>
                                <li><Link className='link' to='/'>Home</Link></li>
                                <li><Link className='link' to='/about'>About</Link></li>
                                <li><Link className='link' to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                        <div className='col-6 col-lg-2 pt-5'>
                            <h5 className='font-two'>Gallery</h5>
                            <ul className='list-unstyled'>
                                <li><Link className='link' to='/services'>Services</Link></li>
                                <li><Link className='link' to='/discover'>Discover</Link></li>
                                <li><Link className='link' to='/services/custom-package'>Custom Package</Link></li>
                                <li><Link className='link' to='/services/custom-plus-package'>Custom + Package</Link></li>
                                <li><Link className='link' to='/services/business-plus-package'>Busines + Package</Link></li>
                            </ul>
                        </div>
                        <div className='col-6 col-lg-2 pt-5'>
                            <h5 className='font-two'>Work</h5>
                            <ul className='list-unstyled'>
                                <li><Link className='link' to='/about'>Projects</Link></li>
                                <li><Link className='link' to='/projects/0'>Shirleys Studio</Link></li>
                                <li><Link className='link' to='/projects/1'>Vacay</Link></li>
                                <li><Link className='link' to='/projects/2'>Viewpoint Ireland</Link></li>
                            </ul>
                        </div>
                        <div className='col-6 col-lg-2 align-items-center pt-5'>
                            <h5 className='font-two py-2'>Socials</h5>
                            <a  href="https://medium.com/@layerlabs.io"><i className="fa-brands fa-medium fa-lg"></i></a>
                            <a  href="https://www.instagram.com/layerlabs.io"><i className="fa-brands fa-instagram fa-lg mx-2"></i></a>
                            <a  href="https://github.com/TropicalXU"><i className="fa-brands fa-github fa-lg"></i></a>
                            <a  href="https://www.linkedin.com/in/seanhackett2022/"><i className="fa-brands fa-linkedin fa-lg mx-2"></i></a>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='row py-4  footer-bottom'>
                        <div className='col-12 col-lg-8'>
                            <p>© 2022 Shirleys Art Studio. All rights reserved.</p>
                        </div>
                        <div className='col-6 col-md-2 col-lg-2'>
                            <Link className='link' to='/termsAndConditions'>Terms & Conditions</Link>
                        </div>
                        <div className='col-6 col-md-2 col-lg-2'>
                            <Link className='link' to='/privacyPolicy'>Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Footer;