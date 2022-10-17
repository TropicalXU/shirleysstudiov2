//importing main links
import React from 'react';
import { Link } from 'react-router-dom';

export const RenderContact = () => {
    return (
        <div className='row py-5'>
            <div className='col-12 col-md-8 text-center align-self-center'>
                <h1 className='large-text-two font-two'>Interested in my paintings?</h1>
                <Link to='/contact' className='btn btn-dark font-two py-2 px-4 my-4'>Get in touch<span className='fa fa-chevron-right ml-2'></span></Link>
            </div>
            <div className='col-12 col-md-4 pb-5'>
                <img src='/assets/images/mail2.png' className='img-fluid' width='100%' height='180px' />
            </div>
        </div>
    );
}

export const AvailableWorks = ({item}) => {
    return (
        
        <div className='col-12 col-md-12 col-lg-4 py-4'>
            <Link to='/gallery/available'>
                <img src={item.image} className='img-painting' width='100%' height='300px' />
            </Link>
        </div>
    );
}