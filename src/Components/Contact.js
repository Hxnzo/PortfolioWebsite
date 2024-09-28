import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Contact = () => {
    const contactRef = useRef(null); // Reference to the Contact section
    const [isVisible, setIsVisible] = useState(false); // Track visibility

    // Use IntersectionObserver to trigger fade-in animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Trigger animation when section is visible
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

        if (contactRef.current) {
            observer.observe(contactRef.current); // Observe the 'Contact' section
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    return (
        <div ref={contactRef} className='bg-black pb-10 px-10 h-screen sm:pt-[350px] pt-[250px]' name='contacts'>
            <div className={`m-auto text-[50px] justify-center text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b sm:border-none pb-5
            sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/6 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/6 sm:before:right-2 sm:after:left-2 sm:p-4 
            ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <h1 className='inline'> Contact </h1>
            </div>

            <div className={`m-auto max-w-[750px] bg-black ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className='m-auto p-10 grid smd:grid-cols-4 grid-cols-2'>
                    <div className='inline-block p-5 mb-5 m-auto rounded-full border-solid border-4 border-[#00FFB9]'>
                        <a href="mailto:hanzalah.patel@ontariotechu.net" className='mx-auto'>
                            <AiOutlineMail size={60} className='text-white' />
                        </a>
                    </div>
                    <div className='inline-block p-5 mb-5 m-auto rounded-full border-solid border-4 border-[#00FFB9]'>
                        <a href="https://github.com/Hxnzo" className='mx-auto' target="_blank" rel="noreferrer">
                            <AiOutlineGithub size={60} className='text-white' />
                        </a>
                    </div>
                    <div className='inline-block p-5 mb-5 m-auto rounded-full border-solid border-4 border-[#00FFB9]'>
                        <a href="https://www.linkedin.com/in/hanzalah-patel/" className='mx-auto' target="_blank" rel="noreferrer">
                            <AiOutlineLinkedin size={60} className='text-white' />
                        </a>
                    </div>
                    <div className='inline-block p-5 mb-5 m-auto rounded-full border-solid border-4 border-[#00FFB9]'>
                        <a href="tel:+16476759946" className='mx-auto'>
                            <AiOutlinePhone size={60} className='text-white' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;