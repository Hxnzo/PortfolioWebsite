import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-scroll";
import pdf from "../Resume.pdf";

const NavBar = () => {
    const [nav,setNav] = useState(true)

    const navDropdown = () => {
        setNav(!nav)
    }

    return (
        //#4B4E53
        <nav className='bg-[black] sm:px-5 md:px-10 px-2 py-2.5 fixed w-full z-50'>
            <div className='flex justify-between items-center max-w-[1240px] sm:mx-auto mx-0'>
                <h1 className='order-2 md:order-1 flex md:items-center md:self-center text-3xl font-bold text-[#00FFB9] pl-[35px] md:px-[91px] md:pl-0 cursor-pointer'>
                    <Link to='home' activeClass='active' smooth={true} spy={true} offset={-50} duration={500}>HP</Link>
                </h1>

                <div className='hidden justify-between items-center w-full md:flex md:w-auto md:order-2'>
                    <ul className='flex p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
                        <li className='py-2 pr-4 pl-3 text-[#00FFB9] md:bg-transparent md:p-0 cursor-pointer hover:underline'>
                            <Link to='about' activeClass='active' smooth={true} spy={true} offset={-50} duration={500}>About</Link>
                        </li>
                        <li className='py-2 pr-4 pl-3 text-[#00FFB9] md:bg-transparent md:p-0 cursor-pointer hover:underline'>
                            <Link to='experience' activeClass='active' smooth={true} spy={true} offset={-25} duration={500}>Experience</Link>
                        </li>
                        <li className='py-2 pr-4 pl-3 text-[#00FFB9] md:bg-transparent md:p-0 cursor-pointer hover:underline'>
                            <Link to='skills' activeClass='active' smooth={true} spy={true} offset={-25} duration={500}>Skills</Link>
                        </li>
                        <li className='py-2 pr-4 pl-3 text-[#00FFB9] md:bg-transparent md:p-0 cursor-pointer hover:underline'>
                            <Link to='projects' activeClass='active' smooth={true} spy={true} offset={-25} duration={500}>Projects</Link>
                        </li>
                        <li className='py-2 pr-4 pl-3 text-[#00FFB9] md:bg-transparent md:p-0 cursor-pointer hover:underline'>
                            <Link to='contacts' activeClass='active' smooth={true} spy={true} offset={-25} duration={500}>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex order-2 p-2'>
                    <a href={pdf} target="_blank" rel="noreferrer">
                        <button type="button" className='text-black bg-[#00FFB9] hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#00FFB9] font-bold rounded-lg text-[10px] px-2.5 py-2.5 sm:text-sm sm:px-5 sm:py-2.5'>
                            Resume
                        </button>
                    </a>
                </div>

                <div onClick={navDropdown} className='text-[#00FFB9] block md:hidden cursor-pointer'>
                    {nav ? <AiOutlineMenu size={ 35 } /> : null}
                </div>

                <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full text-white bg-black ease-in-out duration-700' : 'fixed left-[-100%]'}> 
                    <ul className='uppercase p-4'>
                        <div onClick={navDropdown} className='p-5 text-[#00FFB9] cursor-pointer'>
                            {!nav ? <AiOutlineClose size={ 35 } /> : null}
                        </div>

                        <li className='p-4 border-b border-[#00FFB9] cursor-pointer hover:underline'>
                            <Link onClick={navDropdown} to='about' activeClass='active' smooth={true} spy={true} offset={-50} duration={500}>
                                About
                            </Link>
                        </li>
                        <li className='p-4 border-b border-[#00FFB9] cursor-pointer hover:underline'>
                            <Link onClick={navDropdown} to='experience' activeClass='active' smooth={true} spy={true} offset={-25} duration={500}>Experience</Link>
                        </li>
                        <li className='p-4 border-b border-[#00FFB9] cursor-pointer hover:underline'>
                            <Link onClick={navDropdown} to='skills' activeClass='active' smooth={true} spy={true} offset={-25} duration={500}>Skills</Link>
                        </li>
                        <li className='p-4 border-b border-[#00FFB9] cursor-pointer hover:underline'>
                            <Link onClick={navDropdown} to='projects' activeClass='active' smooth={true} spy={true} offset={-25} duration={500}>Projects</Link>
                        </li>
                        <li className='p-4 cursor-pointer hover:underline'>
                            <Link onClick={navDropdown} to='contacts' activeClass='active' smooth={true} spy={true} offset={-25} duration={500}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
