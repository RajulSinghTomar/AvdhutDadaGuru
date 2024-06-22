import React from 'react'

const Videos = () => {
    
    const videos = [
        {
            id : 1,
            src : "https://www.youtube.com/embed/7mwAHGAzqVg?si=0BhRJ1SbjjBlmtR8"
        },
        {
            id : 2,
            src :"https://www.youtube.com/embed/mdPrkOIxpQE?si=ru-yqqswAhs4w2-s"
        },
        {
            id : 3,
            src : "https://www.youtube.com/embed/kFtDh4np6uc?si=MgiM5bH9cd3YpqPx"
        },
        { 
            id : 4,
            src : "https://www.youtube.com/embed/RMtaJVWRy4A?si=c3ZhVLl9kwnPtsIG"
        },
        {
            id:5,
            src : "https://www.youtube.com/embed/FoUMedoEqto?si=xzN51e-lRzPji_Iz"
        },
        {
            id : 6,
            src : "https://www.youtube.com/embed/GHLnYFM7og8?si=O0je-uhwZ1Nkk1hn"
        },
        {
            id: 7,
            src: "https://www.youtube.com/embed/Zykx8g4-FHY?si=F-8jIrRY8iugf6T8"
        },
        {
            id : 8 ,
            src : "https://www.youtube.com/embed/G1ZLkAPtQyA?si=xUb4p9-J47NqZ-bN"
        },
        {
            id : 9,
            src: "https://www.youtube.com/embed/8Yu226vJkz8?si=t3xpqpXnyvlXScYe"
        },
        {
            id : 10 ,
            src : "https://www.youtube.com/embed/zWZUHXEnzTA?si=qp47nZVb3vHWfLDy" 
        },
        {
            id : 11,
            src : "https://www.youtube.com/embed/d_vRqYNO3Mc?si=7BQRitLo1V7ambcU"
        },
        {
            id : 12,
            src :"https://www.youtube.com/embed/lae_jUjKhWY?si=3sPXpl9WXvH8PoBj"
        },
        {
            id : 13,
            src : "https://www.youtube.com/embed/e1H6Fxl9Mvg?si=PpP0qpWQ4EJN2_mx"
        },
        {
            id : 14,
            src : "https://www.youtube.com/embed/VKR51NRlvKU?si=4u8d2Jl2bF_QQFR8"
        },
        {
            id : 15,
            src : "https://www.youtube.com/embed/ulYiT9J2R4s?si=YYCBjD6w4AtG0xXR"
        }
    ];
  return (
    <div name='achievements' 
    className='bg-gradient-to-b from-black to-gray-800
    w-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
            <div className='pb-8'>
                <p className ='text-4xl font-bold inline border-b-4 border-gray-500'>Videos</p>
                <p className='py-6'>Check out some of our videos</p>
            </div>
            <div  className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0'>
            {
                videos.map(({id,src})=>(
                    <div  key={id} >
                        <iframe 
                            className='w-full aspect-video'
                            src= {src}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"
                            >
                        </iframe>
                     </div>
                ))
            }     
            </div>
           
            
        </div>
    </div>
  )
}

export default Videos