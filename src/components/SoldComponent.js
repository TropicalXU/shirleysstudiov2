import React from 'react';
import { BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';
import { Button } from 'reactstrap';

const RenderPaintings = ({item}) => {
    return (
        <>  
            <FadeTransform in
                transformProps={{
                exitTransform: 'scale(0.3) translateY(-20%)'
            }}>
                <Link to={`/gallery/${item.id}`}>
                    <div className='img-container'>
                    <img src={item.image} className='img-painting' width='100%' height='330px' />
                    <Button type='submit' className='btn-light font-two px-4 py-2'>View</Button>
                    </div>
                </Link>
            </FadeTransform>
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
        <div className='row-lt-grey pb-5'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className='breadcrumb'>
                        <BreadcrumbItem>
                            <Link className='breadcrumb-link text-white' to='/gallery'>
                                <span className='fa fa-chevron-left b-link mr-2'></span> <span className='b-link font-two'>Back to Gallery</span>
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active className='text-white font-two'>Sold works
                        </BreadcrumbItem>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                <div className='row container-avail mt-3 p-5'>
                    <div className='col-12 pb-5'>
                        <h1 className='font'>Sold Works</h1>
                    </div>
                    {soldPaintings}
                </div>
                </div>
            </div>
        </div>
    );
    
}

export default Sold;