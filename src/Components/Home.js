import React from 'react';
import bitmoji from '../Pictures/bitmoji2.jpg'
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai'

const Home = () => {
    return (
        <div className='pt-20' name='home'>
            <div className='justify-center my-[-10px] mx-auto md:w-screen h-screen text-center flex-col bg-black grid md:grid-cols-2 md:grid-rows-3 p-10'>
                {/* <div className='justify-center m-[15px] max-w-[1240px] mx-auto bg-black text-white rounded-lg  grid md:grid-cols-2 md:grid-rows-2 p-10'> */}
                
                    <div className='md:row-span-2 flex flex-col justify-center 2xl:ml-[40%] xl:ml-[30%] lg:ml-0'>
                        <img className='w-[250px] mx-auto my-4 rounded-full' src={bitmoji} alt="/Me" /> {/* shadow-xl shadow-[#00FFB9] */}
                    </div>

                    <div className='md:row-span-2 m-auto p-10 text-white 2xl:mr-[40%] xl:mr-[30%] lg:ml-0'>
                        <h1 className='inline text-xl'>Hello, my name is </h1>
                        <h1 className='inline-block text-4xl text-[#00FFB9]'>Hanzalah Patel</h1>
                        <h1 className='text-xl'>and I am a <h1 className='inline-block text-4xl text-[#00FFB9]'>Software developer</h1></h1>
                        
                    </div>

                    <div className='md:row-span-2 md:col-span-2 p-10'>
                        <ul>
                            <li className='inline-block py-2 px-5 text-black rounded-lg'>
                                <a href="mailto:hanzalah.patel@ontariotechu.net">
                                    <AiOutlineMail size={ 50 } className='text-white' />
                                </a>
                            </li>
                            <li className='inline-block py-2 px-5 text-black rounded-lg'>
                                <a href="https://github.com/Hxnzo">
                                    <AiOutlineGithub size={ 50 } className='text-white' />
                                </a>
                            </li>
                            <li className='inline-block py-2 px-5 text-black '>
                                <a href="https://www.linkedin.com/in/hanzalah-patel/">
                                    <AiOutlineLinkedin size={ 50 } className='text-white' />
                                </a>
                            </li>
                        </ul>
                    </div>

                {/* </div> */}
            </div>
        </div>
    );
};

export default Home;