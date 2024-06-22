import React, { useState } from 'react'
import {FaBars , FaTimes} from 'react-icons/fa';
// import {Link} from 'react-scroll'
const NavBar = () => {
    const [nav,setNav] = useState(false);
  return (
    <div>
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-stone-500	 relative'>
        <div>
            <h1 className='text-3xl  font-font2 ml-2 drop-shadow-l'>अवधूत Dada Guru</h1>
        </div>
        <div>
            <h1 className='text-xl  font-font2 ml-2 drop-shadow-l'>Narmada Mission</h1>
        </div>
        <ul className='hidden md:flex'>
            <li className='px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-orange-600 duration-200'>
                <a href='/'>Home</a>
            </li>
            <li className='px-4 cursor-pointer capitalize font-medium  hover:scale-105  hover:text-orange-600 duration-200'>
                <a href='/about'>About Us</a>
            </li>
            <li className='px-4 cursor-pointer capitalize font-medium hover:scale-105  hover:text-orange-600  duration-200'>
                <a href='/mission'>Narmada Mission</a>
            </li>
            <li className='px-4 cursor-pointer capitalize font-medium   hover:text-orange-600  hover:scale-105 duration-200'>
                <a href='/achievement'>Achievements</a>
            </li>
            <li className='px-4 cursor-pointer capitalize font-medium   hover:text-orange-600  hover:scale-105 duration-200 group'>
                <p>News Gallery</p>
                <div>
                    <div className='absolute hidden group-hover:block hover:block'>
                        <div className="py-3">
                            <div
                            className="w-4 h-4 left-3 absolute 
                            mt-1 bg-white rotate-45"
                            ></div>
                        </div>
                        <div className=' bg-white p-3.5'>
                            <a href='/videos'>Videos</a>
                        </div>
                        <div  className=' bg-white p-3.5'>
                            <a href='/images'>Images</a>
                        </div>
                        <div  className=' bg-white p-3.5'>
                            <a href='/newsVideos'>Media Recognition</a>
                        </div>
                    </div>
                </div>
            </li>
            <li className='px-4 cursor-pointer capitalize font-medium  hover:text-orange-600  hover:scale-105 duration-200'>
                <a href='/contact'>Contact Us</a>
            </li>
            
        </ul>
        <div 
            onClick={()=>setNav(!nav)}
            className='cursor-pointer pr-4 z-10 text-white md:hidden'>
            {nav ? <FaTimes size={30} /> :<FaBars size={30}/>
            }
        </div>
        { nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0
             left-0 w-full h-screen  bg-stone-500 text-white'> 
                <li className='py-6 px-4 cursor-pointer capitalize text-4xl hover:scale-105 hover:text-orange-600 duration-200'>
                    <a href='/'>Home</a>
                </li>
                <li className='py-6 px-4 cursor-pointer capitalize text-4xl hover:scale-105 hover:text-orange-600 duration-200'>
                    <a href='/about'>About Us</a>
                </li>
                <li className='py-6 px-4 cursor-pointer capitalize text-4xl hover:scale-105 hover:text-orange-600 duration-200'>
                    <a href='/mission'>Narmada Mission</a>
                </li>
                <li className='py-6 px-4 cursor-pointer capitalize text-4xl hover:scale-105 hover:text-orange-600 duration-200'>
                    <a href='/achievement'>Achievements</a>
                </li>
                <li className='py-6 px-4 cursor-pointer capitalize text-4xl hover:scale-105 hover:text-orange-600 duration-200'>
                    <a href='/news'>News Gallery</a>
                </li>
                <li className='py-6 px-4 cursor-pointer capitalize text-4xl hover:scale-105 hover:text-orange-600 duration-200'>
                    <a href='/contact'>Contact Us</a>
                </li>
            </ul>
        )}
    </div>
    </div>
    
  )
}

export default NavBar