import React from 'react'
import {FaYoutube ,FaFacebook ,FaInstagram ,FaTwitter} from 'react-icons/fa'
// import {BsFillPersonLinesFill} from 'react-icons/bs'
const SocialLinks = () => {
    const links =[
        {
            id : 1,
            child :(
                <>
                Facebook <FaFacebook />
                </>
            ),
            href : 'https://www.facebook.com/narmadamission1?mibextid=ZbWKwL',
            style :'rounded-tr-md'
        },
        {
            id : 2,
            child :(
                <>
                Youtube <FaYoutube />
                </>
            ),
            href : 'https://www.youtube.com/@samarthnarmadadarshan',
        },
        {
            id : 3,
            child :(
                <>
                Instagram <FaInstagram />
                </>
            ),
            href : 'https://instagram.com/narmadamission?igshid=MmU2YjMzNjRlOQ==',
        },
        {
            id : 4,
            child :(
                <>
                Twitter <FaTwitter />
                </>
            ),
            href : 'https://x.com/narmadamission?t=YU2rBeUQNzEQzIgMN84tqg&s=09',
            style :'rounded-br-md'
        },
    ]


  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map (({id, child , href , style }) => (               <li  key={id} 
                className={'flex justify-between items-center px-4 w-40 h-14 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + ' ' + style}
                >
                    <a href={href}
                    className='flex justify-between items-center w-full
                     text-white'
                     >
                     {child}
                    </a>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks