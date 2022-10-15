//importing main links
import React from 'react';
import { Link } from 'react-router-dom';

export const RenderContact = () => {
    return (
        <div className='row py-5'>
            <div className='col-12 col-md-8 text-center align-self-center'>
                <h1 className='large-text-two font-two'>Interested in my paintings?</h1>
                <Link to='/' className='btn btn-dark my-4'>Get in touch</Link>
            </div>
            <div className='col-12 col-md-4'>
                <img src='/assets/images/message.png' className='img-fluid' width='100%' height='280px' />
            </div>
        </div>
    );
}