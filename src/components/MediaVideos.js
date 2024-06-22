import React from 'react'

const MediaVideos = () =>  {
    
    const newsVideos = [
        {
            id : 1,
            src :"https://www.youtube.com/embed/cQ6mNPLlBxE?si=s6jvXudyTlaOaY-w"
        },
        {
            id : 2,
            src :"https://www.youtube.com/embed/lfGKnXRwD2A?si=Au19PlvFUtdjFlD-"
        },
        {
            id : 3,
            src : "https://www.youtube.com/embed/-nNngEEOzH4?si=_KcH-JDT1X3PT2H_"
        },
        { 
            id : 4,
            src : "https://www.youtube.com/embed/hQx6eCiMkAU?si=RCqWOXsesKZ2BLVI"
        },
        {
            id:5,
            src : "https://www.youtube.com/embed/m6Q5QF08o6Q?si=dMldvu1cTMw_VlD-"
        },
    ];
  return (
    <div name='news videos' 
    className='bg-gradient-to-b from-black to-gray-800
    w-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
            <div className='pb-8'>
                <p className ='text-4xl font-bold inline border-b-4 border-gray-500'>News Videos</p>
            </div>
            <div  className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0'>
            {
                newsVideos.map(({id,src})=>(
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


export default MediaVideos