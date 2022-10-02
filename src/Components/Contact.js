import React from 'react';
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'

const Contact = () => {
    return (
        <div className='bg-black pb-10 px-10 h-screen sm:pt-[350px] pt-[250px]' name='contacts'>
            <div className='m-auto text-[50px] justify-center text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b sm:border-none pb-5
            sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/6 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/6 sm:before:right-2 sm:after:left-2 sm:p-4'
            >
                <h1 className='inline'> Contact </h1>
            </div>

            <div className='p-5 m-auto max-w-[650px] bg-black'>
                <div className='m-auto p-10 grid smd:grid-cols-4 grid-cols-2'>
                    {/* AiOutlineInstagram
                    <div className='inline-block p-2 mb-5 m-auto shadow-md shadow-[#00FFB9]'>
                        <a href="https://www.instagram.com/hanzalah20/"  className='mx-auto'>
                            <AiOutlineInstagram size={ 50 } className='text-white' />
                        </a>
                    </div> */}
                    <div className='inline-block p-2 mb-5 m-auto shadow-md shadow-[#00FFB9]'>
                        <a href="mailto:hanzalah.patel@ontariotechu.net" className='mx-auto'>
                            <AiOutlineMail size={ 60 } className='text-white' />
                        </a>
                    </div>
                    <div className='inline-block p-2 mb-5 m-auto shadow-md shadow-[#00FFB9]'>
                        <a href="https://github.com/Hxnzo" className='mx-auto' target="_blank" rel="noreferrer">
                            <AiOutlineGithub size={ 60 } className='text-white' />
                        </a>
                    </div>
                    <div className='inline-block p-2 mb-5 m-auto shadow-md shadow-[#00FFB9]'>
                        <a href="https://www.linkedin.com/in/hanzalah-patel/" className='mx-auto' target="_blank" rel="noreferrer">
                            <AiOutlineLinkedin size={ 60 } className='text-white' />
                        </a>
                    </div>
                    <div className='inline-block p-2 mb-5 m-auto shadow-md shadow-[#00FFB9]'>
                        <a href="tel:+16476759946" className='mx-auto'>
                            <AiOutlinePhone size={ 60 } className='text-white' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;