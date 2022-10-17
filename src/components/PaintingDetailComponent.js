import React from 'react';
import { BreadcrumbItem, Card , CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

const RenderPainting = ({item}) => {
    if(item.price === 0 ) {
        return (
            <> 
                <div className='col-12 col-md-6'>
                    <FadeTransform in
                    transformProps={{
                    exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <img src={item.image} className='img-painting-detail' width='100%' height='420px' />
                        <p className='font artist-text pt-4'><i>{item.artist}</i></p>
                    </FadeTransform>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='container-avail text-center'>
                        <CardBody className='font-two py-5'>
                            <h2 className='font'>{item.title}</h2>
                            <h1 className='py-4'>Sold</h1>
                            <h6>{item.description}</h6>
                        </CardBody>
                    </div>
                </div>
            </>
        );
    }
    else {
        return (
            <> 
                <div className='col-12 col-md-6'>
                    <FadeTransform in
                    transformProps={{
                    exitTransform: 'scale(0.3) translateY(-20%)'
                    }}>
                        <img src={item.image} className='img-painting' width='100%' height='420px' />
                        <p className='font artist-text pt-4'><i>{item.artist}</i></p>
                    </FadeTransform>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='container-avail text-center'>
                        <CardBody className='font-two py-5'>
                            <h2 className='font'>{item.title}</h2>
                            <h1 className='py-4'>€{item.price}</h1>
                            <h6>{item.description}</h6>
                            <a href={item.stripe_link} className='btn btn-primary font-two my-4'>Purchase</a>
                        </CardBody>
                    </div>
                </div>
            </>
        );
    }
}


const PaintingDetail = (props) => {
   
    return (
        <div className='row-lt-grey pb-5'>
            <div className='container'>
                <div className='row pt-3'>
                    <div className='breadcrumb mt-5'>
                        <BreadcrumbItem>
                            <Link className='breadcrumb-link text-white' to='/gallery'>
                                <span className='fa fa-chevron-left b-link mr-2'></span> <span className='b-link font-two'>Back to Gallery</span>
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active className='text-white font-two'>{props.painting.title}
                        </BreadcrumbItem>
                    </div>
                </div>
                <div className='row mt-3 pb-5 py-5'>
                    <RenderPainting item={props.painting} />
                </div>
            </div>
        </div>
    );
    
}

export default PaintingDetail;