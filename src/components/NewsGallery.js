import React from 'react'
import newsBg from '../assets/BackgroundImages/bg_2.jpg'
const NewsGallery = () => {
  return (
      <div name='contactUs' className='w-full
     bg-gradient-to-b from-black via-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center'>
             <img src={newsBg} alt='newsbgImage' />
        </div> 
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Explore</p>
            </div>


            
            
                  <button className='text-white bg-gradient-to-b
                    from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex 
                    item-center rounded-md hover:scale-110 duration-300'
                    ><a href='/videos'>Videos</a></button>
                 
                     <button className='text-white bg-gradient-to-b
                    from-pink-600 to-orange-600 px-6 py-3 my-8 mx-auto flex 
                    item-center rounded-md hover:scale-110 duration-300'
                    ><a href='/images'>Images</a></button>

            <button className='text-white bg-gradient-to-b
                    from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex 
                    item-center rounded-md hover:scale-110 duration-300'
                    ><a href='/newsVideos'>Media Recognition</a></button>
        </div>
    </div>
  )
}

export default NewsGallery