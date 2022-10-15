import React from 'react';
import { BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const RenderPaintings = ({item}) => {
    return (
        <>
            <img src={item.image} className='img-painting' width='100%' height='330px' />
        </>
    );
}

const Sold = (props) => {

    const soldPaintings = props.paintings.map((painting) => {
        if(painting.isAvailable === false) {
            return (
                <div className='col-12 col-md-4 py-3'>
                    <RenderPaintings item={painting} />
                </div>
            );
        } 
        else {
            return (
                <div></div>
            );
        }
    });

    return (
        <div className='container'>
            <div className='row pt-3'>
                <div className='breadcrumb'>
                    <BreadcrumbItem>
                        <Link className='breadcrumb-link text-white' to='/gallery'>
                            <span className='fa fa-chevron-left mr-2'></span> <span className='b-link font-two'>Back to Gallery</span>
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active className='gradient-text font-two'>Sold
                    </BreadcrumbItem>
                </div>
            </div>
            <div className='row mt-3 mb-5'>
                {soldPaintings}
            </div>
        </div>
    );
    
}

export default Sold;