import React from 'react';
import { Link } from 'react-router-dom';

const RenderPaintings = ({item}) => {
    return (
        <>
            <img src={item.image} className='img-painting' width='100%' height='330px' />
        </>
    );
}

const Seascape = (props) => {

    const seascapePaintings = props.paintings.map((painting) => {
        if(painting.type === 'seascape') {
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
        <div className='container tabs'>
           <div className='row d-flex justify-content-center py-5'>
                <div className='col-12 col-md-6 text-center'>
                    <div className='btn-services-tab'>
                        <Link to='/gallery/landscape' className='btn btn-services font-two active'><span className='fa fa-box mr-2'></span>Landscape <span className='fa fa-chevron-down'></span></Link>
                        <Link to='/gallery/seascape' className='btn btn-services-active font-two ml-1'>Seascape <span className='fa fa-chevron-down'></span></Link>
                        <Link to='/gallery/floral' className='btn btn-services font-two ml-1'>Floral <span className='fa fa-chevron-down'></span></Link>
                    </div>
                </div>
            </div>
            <div className='row mt-3 mb-5'>
                {seascapePaintings}
            </div>
        </div>
    );
    
}

export default Seascape;