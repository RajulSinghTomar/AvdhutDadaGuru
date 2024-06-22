import React from 'react'
import Imagenews1 from '../assets/Images/Image1.jpeg';
// import Imagenews2 from '../assets/Images/Image2.jpeg';
import Imagenews3 from '../assets/Images/Imagenews1 (3).jpg';
import Imagenews4 from '../assets/Images/Imagenews1 (4).jpg';
import Imagenews5 from '../assets/Images/Imagenews1 (5).jpg';
import Imagenews6 from '../assets/Images/Imagenews1 (6).jpg';
import Imagenews7 from '../assets/Images/Imagenews1 (7).jpg';
import Imagenews8 from '../assets/Images/Imagenews1 (8).jpg';
import Imagenews9 from '../assets/Images/Imagenews1 (9).jpg';
import Imagenews10 from '../assets/Images/Imagenews1 (10).jpg';
import Imagenews11 from '../assets/Images/Imagenews1 (11).jpg';
import Imagenews12 from '../assets/Images/Imagenews1 (12).jpg';
import Imagenews13 from '../assets/Images/Imagenews1 (13).jpg';
import Imagenews14 from '../assets/Images/Imagenews1 (14).jpg';
import Imagenews15 from '../assets/Images/Imagenews1 (15).jpg';
import Imagenews16 from '../assets/Images/Imagenews1 (16).jpg';
import Imagenews17 from '../assets/Images/Imagenews1 (17).jpg';
import Imagenews18 from '../assets/Images/Imagenews1 (18).jpg';
import Imagenews19 from '../assets/Images/Imagenews1 (19).jpg';
import Imagenews20 from '../assets/Images/Imagenews1 (20).jpg';
import Imagenews21 from '../assets/Images/Imagenews1 (21).jpg';
import Imagenews22 from '../assets/Images/Imagenews1 (22).jpg';
import Imagenews23 from '../assets/Images/Imagenews1 (23).jpg';
import Imagenews24 from '../assets/Images/Imagenews1 (24).jpg';
import Imagenews25 from '../assets/Images/Imagenews1 (25).jpg';
import Imagenews26 from '../assets/Images/Imagenews1 (26).jpg';
import Imagenews27 from '../assets/Images/Imagenews1 (27).jpg';
import Imagenews28 from '../assets/Images/Imagenews1 (28).jpg';
const Images = () =>{
    const Imagenewss = [
        {
            id : 1,
            src : Imagenews1
        },
        {
            id : 2,
            src : Imagenews20
        },
        {
            id : 3,
            src : Imagenews3
        },
        {
            id : 4,
            src : Imagenews4
        },
        {
            id : 5,
            src : Imagenews5
        },
        {
            id : 6,
            src : Imagenews6
        },
        {
            id : 7,
            src : Imagenews7
        },
        {
            id : 8,
            src : Imagenews8
        },
        {
            id : 9,
            src : Imagenews1
        },
        {
            id : 10,
            src : Imagenews10
        },
        {
            id : 11,
            src : Imagenews11
        },
        {
            id : 12,
            src : Imagenews12
        },
        {
            id : 13,
            src : Imagenews13
        },
        {
            id : 14,
            src : Imagenews14
        },
        {
            id : 15,
            src : Imagenews15
        },
        {
            id : 16,
            src : Imagenews16
        },
        {
            id : 17,
            src : Imagenews17
        },
        {
            id : 18,
            src : Imagenews18
        },
        {
            id : 19,
            src : Imagenews19
        },
        {
            id : 20,
            src : Imagenews20
        },
        {
            id : 21,
            src : Imagenews21
        },
        {
            id : 22,
            src : Imagenews22
        },
        {
            id : 23,
            src : Imagenews23
        },
        {
            id : 24,
            src : Imagenews24
        },
        {
            id : 25,
            src : Imagenews25
        },
        {
            id : 26,
            src : Imagenews26
        },
        {
            id : 27,
            src : Imagenews27
        },
        {
            id : 28,
            src : Imagenews28
        },
    ];
  return (
    <div name='Imagenewss' 
    className='bg-gradient-to-b from-black via-gray-800 to-black
    w-full text-white py-32'>
        <div name="aboutUs1" className='w-full  bg-gradient-to-b from-black to-gray-800 text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center'>
             <img src={Imagenews9} alt='AbImage' />
        </div>
    </div>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className ='text-4xl font-bold inline border-b-4 border-gray-500'>News Gallery</p>
                {/* <p className='py-6'>Check out some of our Imagenewss</p> */}
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                Imagenewss.map(({id,src})=>(
                    <div  key={id}  className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                    </div>
                ))
            }     
            </div>
           
            
        </div>
    </div>
  )
}

export default Images