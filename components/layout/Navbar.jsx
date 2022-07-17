import React from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
// import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link";


const Navbar = ({ darkMode, setDarkMode }) => {

    return (
        <div className='container flex flex-row items-center justify-between w-full sticky top-0 z-30  backdrop-filter backdrop-blur-xl bg-opacity-1 md:px-[54px] px-2 py-4 '>
            <div className=''>
                <h2 className='font-bold md:text-2xl text-lg bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:animate-pulse hover:shadow-md rounded-md shadow-sm px-4 py-1 text-white'><Link href="/"><a>IT Department Of UIT RGPV</a></Link></h2>
            </div>
            <div className='flex flex-row justify-between items-center md:gap-6 gap-4'>
                <div className='font-bold text-xl cursor-pointer flex flex-row items-center justify-start gap-4'>
                    <p className={`md:text-[16px] text-[15px] font-medium hover:text-blue-500 hover:border-b-[3px] hover:border-blue-500 }`} ><Link href="/research"><a>Research</a></Link></p>
                    <p className={`md:text-[16px] text-[15px] font-medium hover:text-blue-500 hover:border-b-[3px] hover:border-blue-500 `} ><Link href="/department"><a>Faculty</a></Link></p>
                </div>
                <div className='flex flex-row justify-start items-center'>
                    <div onClick={() => { setDarkMode(!darkMode) }}>
                        {darkMode ?
                            <div className='flex flex-row bg-[#213135] p-2 rounded-full justify-between items-center md:w-[70px] cursor-pointer w-[60px] '>
                                <MdDarkMode size={20} className="fill-[#808191]  " />
                                <BsFillCircleFill className="fill-blue-500 " />
                            </div>
                            : <div className='flex flex-row bg-[#293b3f] p-2 rounded-full justify-between items-center md:w-[70px] cursor-pointer w-[60px] '>
                                <BsFillCircleFill className="fill-blue-500" />
                                <MdLightMode size={20} className="fill-[#808191]" />
                            </div>}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar