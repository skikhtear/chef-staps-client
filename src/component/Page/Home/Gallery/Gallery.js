import React from 'react';
import img1 from '../../../../assets/img/bannar/bannar1.jpg'
import img2 from '../../../../assets/img/bannar/bannar2.jpg'
import img3 from '../../../../assets/img/bannar/bannar3.jpg'
import img4 from '../../../../assets/img/bannar/bannar4 .jpg'
import img5 from '../../../../assets/img/bannar/bannar5.jpg'
import img6 from '../../../../assets/img/bannar/bannar6.jpg'
import img7 from '../../../../assets/img/bannar/bannar7.jpg'
import img8 from '../../../../assets/img/bannar/bannar8.jpg'
import img9 from '../../../../assets/img/bannar/bannar9.jpg'

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