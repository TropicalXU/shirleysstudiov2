import React from 'react';
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

const Landscape = (props) => {

    const landscapePaintings = props.paintings.map((painting) => {
        if(painting.type === 'landscape') {
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
            <div className='container tabs'>
                <div className='row d-flex justify-content-center py-5'>
                    <div className='col-12 text-center'>
                        <h5 className='font'>Choose from...</h5>
                    </div>
                    <div className='col-12 col-md-8 text-center'>
                        <div className='btn-services-tab'>
                            <div className='btn-services-tab'>
                                <Link to='/gallery/landscape' className='btn btn-services-active font-two active'>LANDSCAPE</Link>
                                <span className='btn-services'>|</span>
                                <Link to='/gallery/seascape' className='btn btn-services font-two ml-1'>SEASCAPE</Link>
                                <span className='btn-services'>|</span>
                                <Link to='/gallery/floral' className='btn btn-services font-two ml-1'>FLORAL</Link>
                            </div>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                <div className='row container-avail mt-3 p-5'>
                    {landscapePaintings}
                </div>
            </div>
        </div>
    );
    
}

export default Landscape;