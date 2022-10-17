import React, { Component } from 'react';
import { FadeTransform, Fade } from 'react-animation-components';
import { Link } from 'react-router-dom';
import { AvailableWorks, RenderContact } from '../functionalComponents/functionalComponents';

class About extends Component {

    render() {

    const AboutHeader = () => {
        return (
            <Fade in>
                <div className='about-header d-flex justify-content-center align-items-center'>
                    <div className='row text-center text-white'>
                        <div className='col-12 align-self-center'>
                            <h1 className='font home-title py-5'>Shirleys Art Studio</h1>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }

    return (
        <div className='row-lt-grey'>
           <AboutHeader /> 
            <div className='row pt-5'>
                <div className='col-12 py-5'>
                    <h1 className='font text-center'>Shirley Hackett Artist</h1>
                </div>
            </div>
            <div className='container-fluid row-lt-grey pt-5'>
                <div className='container container-avail'>
                    <div className='row'>
                        <div className='col-12 font-two text-center p-5'>
                            <img src='/assets/images/leaf.png' className='img-fluid mb-4' width='120px' height='120px' />
                            <p className='about-text p-5'>I am an Irish artist living and working from my studio in Kildare. I have always been passionate about art in all its forms and I take my inspiration from the natural beauty of the world that surrounds us. I enjoy painting a variety of subjects, particulary landscapes, seascapes and flowers. I try to create an interesting composition and bring it to life by capturing the effects of light and shade.</p>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-12 col-md-3'>
                            <img src='/assets/images/shirley.jpg' className='img-painting' width='100%' height='290px' />
                        </div>
                        <div className='col-12 col-md-3'>
                            <img src='/assets/images/about-bg.jpg' className='img-painting' width='100%' height='290px' />
                        </div>
                        <div className='col-12 col-md-3'>
                            <img src='/assets/images/studio-bg.jpg' className='img-painting' width='100%' height='290px' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 font-two text-center p-5'>
                            <p className='about-text p-5'>My paintings are inspired by the rugged landscapes of Ireland and the vibrant colours that emanate from its natural beauty throughout the seasons. I strive to visually capture and record special moments, people and places in time and hope that the viewer will engage and connect emotionally with the images that emerge on the canvas. I work mostly in acrylics using bold bright colours to create a sense of light and atmosphere in my paintings. I have exhibited my work in a number of venues in Kildare and Dublin. If you have something of personal interest which you would like to see on canvas I am happy to accept commisions.</p>
                        </div>
                    </div>
                </div>
                <div className='row row-lt-grey pt-5'>
                    <div className='col-12 text-center'>
                        <h1 className='font py-5'>Available Works</h1>
                    </div>
                    <div className='container container-avail p-5'>
                        <div className='row py-4'>
                            <div className='col-12 text-center text-white pb-5'>
                                <h4 className='py-2 text-grey font-two'>Check out my range of available works.</h4>
                            </div>
                            <AvailableWorks item={this.props.available1} />
                            <AvailableWorks item={this.props.available2} />
                            <AvailableWorks item={this.props.available3} />
                        </div>
                        <div className='row py-5'>
                            <div className='col-12 text-center'>
                                <Link to='/gallery/available' className='btn btn-dark font-two py-2 px-4'>View More<span className='fa fa-chevron-right ml-2'></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className='container pt-5'>
                        <RenderContact />
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default About;
