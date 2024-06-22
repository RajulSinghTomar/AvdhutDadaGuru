import React from 'react';
import logoDadaji from '../assets/BackgroundImages/logoDadaji.png';
import {FaYoutubeSquare ,FaWhatsappSquare ,FaFacebookSquare ,FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa'
const Footer = () => {
      return (
        <div className='bg-stone-500 text-white'>
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <p
                // href="/"
                // aria-label="Go home"
                title="Dadaji"
                className="inline-flex items-center"
              >
                 <img className='w-24' src={logoDadaji} alt='logoDadaji' />
                
                <span className="ml-2 text-4xl font-bold tracking-wide uppercase p-4">
                  नदी नहीं तो सदी नहीं
                </span>
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide">
                Contacts
              </p>
              <div className="flex">
                <p className="mr-1">Phone:</p>
                <a
                  href="tel:9630765011"
                  aria-label="Our phone"
                  title="Our phone"
                  className=""
                >
                  8989112999 , 9907115789 , 898970012
                </a>
              </div>
              <div className="flex">
                <p className="mr-1">Email:</p>
                <a
                  href="mailto:narmadamission@gmail.com"
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  narmadamission@gmail.com
                </a>
              </div>
              <div className="flex">
                <p className="mr-1">Address:</p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                Narmada Mission, Jabalpur
                </a>
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-wide">
                Social
              </span>
              <div className="flex items-center mt-1 space-x-3">
                <a
                  href="https://x.com/narmadamission?t=YU2rBeUQNzEQzIgMN84tqg&s=09"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaTwitterSquare  size={30}/>
                </a>
                <a
                  href="https://instagram.com/narmadamission?igshid=MmU2YjMzNjRlOQ=="
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaInstagramSquare size={30}/>
                </a>
                <a
                  href="https://www.facebook.com/narmadamission1?mibextid=ZbWKwL"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaFacebookSquare size={30}/>
                </a>
                <a href="https://www.youtube.com/@samarthnarmadadarshan"
                    className='transition-colors duration-300 hover:text-deep-purple-accent-400'
                     ><FaYoutubeSquare size={30}/>
                </a>
                <a href="https://wa.me/9907115789"
                    className='transition-colors duration-300 hover:text-deep-purple-accent-400'
                     ><FaWhatsappSquare size={30}/>
                </a>
              </div>
              <p className="mt-4 text-sm">
                Follow us on Social Media , join our team to save mother Narmada.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm ">
              © Copyright {new Date().getFullYear()} Narmada Mission All rights reserved.
            </p>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row font-bold">
              <li>
                <p
                  className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  नर्मदे हर
                </p>
              </li>
              <li>
                <p
                  className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  नर्मदे हर
                </p>
              </li>
              <li>
                <p
                  className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  नर्मदे हर
                </p>
              </li>
            </ul>
          </div>
        </div>
        </div>
        
      );
    };
    
export default Footer;