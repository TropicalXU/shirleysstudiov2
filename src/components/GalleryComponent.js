import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

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

const Gallery = (props) => {
   

        const allPaintings = props.paintings.map((painting) => {
            return (
                <div className='col-12 col-md-4 py-3'>
                    <RenderPaintings item={painting} />
                </div>
            );
        });


        return (
            <>
                {/* service page tabs navigation */}
                <div className='row-lt-grey pb-5'>
                    <div className='container tabs'>
                            <div className='row d-flex justify-content-center py-5'>
                                <div className='col-12 text-center'>
                                    <h5 className='font'>Choose from...</h5>
                                </div>
                                <div className='col-12 col-md-8 text-center'>
                                    <div className='btn-services-tab'>
                                        <Link to='/gallery/landscape' className='btn btn-services font-two active'>LANDSCAPE</Link>
                                        <span className='btn-services'>|</span>
                                        <Link to='/gallery/seascape' className='btn btn-services font-two ml-1'>SEASCAPE</Link>
                                        <span className='btn-services'>|</span>
                                        <Link to='/gallery/floral' className='btn btn-services font-two ml-1'>FLORAL</Link>
                                    </div>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className='row container-avail mt-3 p-5'>
                                {allPaintings}
                            </div>
                        </div>
                    </div>
            </>
        );
    
}

export default Gallery;