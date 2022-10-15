import React, { Component } from 'react';
import { FadeTransform, Fade } from 'react-animation-components';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import { RenderContact } from '../functionalComponents/functionalComponents'

class Home extends Component {
    render() {

         /* HOMEPAGE HEADER */
         const HomeHeader = () => {
            return (
                <Fade in>
                    <div className='home-header d-flex justify-content-center align-items-center'>
                        <div className='row text-center text-white'>
                            <div className='col-12 align-self-center'>
                                <h1 className='font home-title py-5'>Shirleys Art Studio</h1>
                                <h3 className='font-two home-header-text'>Jump right in and explore my collection of paintings.</h3>
                                <h3 className='font-two home-header-text'>Browse, shop and feel free to share my work with others!</h3>
                                <Link className='btn btn-light font-two px-4 my-4'to='/gallery'>All Works<span className='fa fa-chevron-right ml-2'></span></Link>
                            </div>
                        </div>
                    </div>
                </Fade>
            );
        }

        /* HOMEPAGE - FEATURED */

        const HomeFeatured = ({item}) => {
            return (
                <>
                    <div className='col-12 col-md-6 col-lg-4 py-4'>
                        <img src={item.image} className='featured-img' width='100%' height='300px' />
                    </div>
                </>
            );
        }

        const AvailableWorks = ({item}) => {
            return (
                <div className='col-12 col-md-12 col-lg-4'>
                    <img src={item.image} className='available-img' width='100%' height='300px' />
                </div>
            );
        }

        const SoldWorks = () => {
            return
        }

        const AboutArtist = () => {
            return (
                <div></div>
            );
        }


        return (
            <>
            <div className=''>
                <HomeHeader />
                <div className='row home-about py-5'>
                    <div className='col-12 text-center text-white py-5'>
                        <span className='fa fa-chevron-down'></span>
                        <h1 className='large-text font-two p-5'>Shirley Hackett is an irish artist lorem ipsum lorem lipsumm lorem ipsum </h1>
                        <p>________________________</p>
                    </div>
                </div>
                <div className='col-12 text-center'>
                    <h1 className='font py-5'>Featured Paintings</h1>
                </div>
                <div className='container'>
                    <div className='row'>
                        <HomeFeatured item={this.props.painting1} />
                        <HomeFeatured item={this.props.painting2} />
                        <HomeFeatured item={this.props.painting3} />
                    </div>
                    <div className='row py-4'>
                        <HomeFeatured item={this.props.painting4} />
                        <HomeFeatured item={this.props.painting5} />
                        <HomeFeatured item={this.props.painting6} />
                    </div>
                    <div className='row py-5'>
                        <div className='col-12 text-center'>
                            <Link to='/' className='btn btn-dark'>View More</Link>
                        </div>
                    </div>
                </div>
                <div className='row home-about py-5 my-4'>
                    <div className='col-12 text-white text-center'>
                        <h1 className='font py-5'>Available Works</h1>
                        <h6 className='py-2 large-text-two font-two'>Check out my range of available works</h6>
                    </div>
                    <div className='container'>
                        <div className='row py-4'>
                        <AvailableWorks item={this.props.available1} />
                        <AvailableWorks item={this.props.available2} />
                        <AvailableWorks item={this.props.available3} />
                        </div>
                        <div className='row py-5'>
                            <div className='col-12 text-center'>
                                <Link to='/' className='btn btn-light'>View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                    <RenderContact />
                </div>
            </>
        );
    }
}

export default Home;