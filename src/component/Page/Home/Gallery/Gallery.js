import React from 'react';
import img1 from '../../../../assets/img/banner/banner1.jpg'
import img2 from '../../../../assets/img/banner/banner2.jpg'
import img3 from '../../../../assets/img/banner/banner3.jpg'
import img4 from '../../../../assets/img/banner/banner4.jpg'
import img5 from '../../../../assets/img/banner/banner5.jpg'
import img6 from '../../../../assets/img/banner/banner6.jpg'
import img7 from '../../../../assets/img/banner/banner7.jpg'
import img8 from '../../../../assets/img/banner/banner8.jpg'
import img9 from '../../../../assets/img/banner/banner9.jpg'

const Gallery = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-20'>Gallery</h1>
            <div class="grid grid-cols-3 gap-4 my-11">
                <div>
                    <img src={img1} alt=""  className='rounded'/>
                </div>
                <div>
                    <img src={img2} alt="" className='rounded' />
                </div>
                <div>
                    <img src={img3} alt="" className='rounded' />
                </div>
                <div>
                    <img src={img4} alt="" className='rounded' />
                </div>
                <div>
                    <img src={img5} alt="" className='rounded' />
                </div>
                <div>
                    <img src={img6} alt="" className='rounded' />
                </div>
                <div>
                    <img src={img7} alt="" className='rounded' />
                </div>
                <div>
                    <img src={img8} alt="" className='rounded' />
                </div>
                <div>
                    <img src={img9} alt="" className='rounded' />
                </div>
            </div>
        </div>
        
    );
};

export default Gallery;