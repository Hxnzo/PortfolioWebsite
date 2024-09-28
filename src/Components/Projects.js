// import React from 'react';
// import h2z2 from '../Pictures/H2Z2.jpg'
// import cbir from '../Pictures/CBIR.jpg'
// import {AiOutlineGithub} from 'react-icons/ai'

// const Projects = () => {
//     return (
//         <div className='bg-black pb-10 px-10 pt-[50px]'  name='projects'>
//             <div className='m-auto text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b sm:border-none pb-5
//             sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/6 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/6 sm:before:right-2 sm:after:left-2 sm:p-4'
//             >
//                 <h1 className='inline'>  Projects  </h1> 
//             </div>

//             <div className='md:max-w-[960px] m-auto mb-10'>
//                 <div className='inline-block md:flex bg-white rounded-lg m-5'>
//                     <div className='flex md:max-w-[350px] md:max-h-[300]'>
//                         <img className='flex justify-center rounded-t-lg md:rounded-tr-none md:rounded-l-lg' src={h2z2} alt="/h2z2" />
//                     </div>

//                     <div className='flex-col p-5'>
//                         <div className='font-bold text-xl text-[#00FFB9] mb-2'>Online Grocery Store</div>

//                         <div className='flex my-5'>
//                             <p className='text-black text-base'>
//                                 Designed and developed a full stack responsive online grocery store, implemented an authentication system for users to login/signup, built Home, Product & dynamic Cart Pages using React. 
//                                 Also used MySQl and heroku to host and save all the information like usernames, passwords, orders and more.
//                             </p>
//                         </div>

//                         <div className='font-bold text-sm text-[#00FFB9] mb-2'>ReactJS, Redux, ExpressJS, MySQL, React-Router, CSS3</div>
                                                
//                         <div className='items-center text-sm pt-2'>
//                             <a href="https://github.com/Hxnzo/Online_Grocery_Store" target="_blank" rel="noreferrer">
//                                 <AiOutlineGithub size={ 35 } className='text-black' />
//                             </a>
//                         </div>
//                     </div>
//                 </div> 
//             </div>

//             <div className='md:max-w-[960px] m-auto mb-10'>
//                 <div className='inline-block md:flex bg-white rounded-lg m-5'>
//                     <div className='flex md:max-w-[350px] md:max-h-[300]'>
//                         <img className='flex w-full justify-center rounded-t-lg md:rounded-tr-none md:rounded-l-lg' src={cbir} alt="/cbir" />
//                     </div>

//                     <div className='flex-col p-5'>
//                         <div className='font-bold text-xl text-[#00FFB9] mb-2'>Content Based Image Retrieval</div>

//                         <div className='flex my-5'>
//                             <p className='text-black text-base'>
//                                 Designed and developed a Python program that converts a black and white image into a barcode using angled projections. 
//                                 The progam allows the user to search for the most similar barcode with an accuracy of greater than 80%.
//                             </p>
//                         </div>

//                         <div className='font-bold text-sm text-[#00FFB9] mb-2'>Python, Pillow, Redux, VS-Code</div>
                                                
//                         <div className='items-center text-sm pt-2'>
//                             <a href="https://github.com/Hxnzo/Content-Based-Image-Retrieval" target="_blank" rel="noreferrer">
//                                 <AiOutlineGithub size={ 35 } className='text-black' />
//                             </a>
//                         </div>
//                     </div>
//                 </div> 
//             </div>
//         </div>
//     );
// };

// export default Projects;

// import React from 'react';
// import h2z2 from '../Pictures/H2Z2.jpg';
// import cbir from '../Pictures/CBIR.jpg';
// import { AiOutlineGithub } from 'react-icons/ai';

// const Projects = () => {
//     return (
//         <div className='bg-black pb-10 px-10 pt-[50px]' name='projects'>
//             <div className='text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b-2 border-white sm:border-none p-5 mb-10
//                 sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/5 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/5 sm:before:right-2 sm:after:left-2 sm:p-4'>
//                 <h1 className='inline'> Projects</h1>
//             </div>

//             <div className='max-w-[960px] m-auto mb-10 bg-[#1e1e1e] shadow-lg rounded-lg overflow-hidden'>
//                 <div className='grid md:grid-cols-2'>
//                     <div className='p-8'>
//                         <h2 className='text-2xl font-bold text-[#00FFB9] mb-4'>Online Grocery Store</h2>
//                         <p className='text-white text-lg mb-4'>
//                             Designed and developed a full stack responsive online grocery store. Implemented an authentication system for users to login/signup, built Home, Product & dynamic Cart Pages using React.
//                             Also used MySQL and Heroku to host and save information like usernames, passwords, orders, and more.
//                         </p>
//                         <p className='text-sm text-[#00FFB9]'>ReactJS, Redux, ExpressJS, MySQL, React-Router, CSS3</p>

//                         <div className='mt-5'>
//                             <a href="https://github.com/Hxnzo/Online_Grocery_Store" target="_blank" rel="noreferrer">
//                                 <AiOutlineGithub size={35} className='text-white hover:text-[#00FFB9] transition duration-300 float-right' />
//                             </a>
//                         </div>
//                     </div>

//                     <div>
//                         <img src={h2z2} alt="Online Grocery Store" className='object-cover w-full h-full' />
//                     </div>
//                 </div>
//             </div>

//             <div className='max-w-[960px] m-auto mb-10 bg-[#1e1e1e] shadow-lg rounded-lg overflow-hidden'>
//                 <div className='grid md:grid-cols-2'>
//                     <div className='p-8'>
//                         <h2 className='text-2xl font-bold text-[#00FFB9] mb-4'>Content Based Image Retrieval</h2>
//                         <p className='text-white text-lg mb-4'>
//                             Designed and developed a Python program that converts a black and white image into a barcode using angled projections.
//                             The program allows users to search for the most similar barcode with an accuracy of greater than 80%.
//                         </p>
//                         <p className='text-sm text-[#00FFB9]'>Python, Pillow, Redux, VS-Code</p>

//                         <div className='mt-5'>
//                             <a href="https://github.com/Hxnzo/Content-Based-Image-Retrieval" target="_blank" rel="noreferrer">
//                                 <AiOutlineGithub size={35} className='text-white hover:text-[#00FFB9] transition duration-300 float-right' />
//                             </a>
//                         </div>
//                     </div>

//                     <div>
//                         <img src={cbir} alt="Content Based Image Retrieval" className='object-cover w-full h-full' />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Projects;

import React, { useEffect, useRef, useState } from 'react';
import h2z2 from '../Pictures/H2Z2.jpg';
import cbir from '../Pictures/CBIR.jpg';
import { AiOutlineGithub } from 'react-icons/ai';

const Projects = () => {
    const projectsRef = useRef(null); // Reference to the Projects section
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

        if (projectsRef.current) {
            observer.observe(projectsRef.current); // Observe the 'Projects' section
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
        };
    }, []);

    return (
        <div ref={projectsRef} className='bg-gradient-to-b from-[#0d1d18] to-black pb-10 px-10 pt-[50px]' name='projects'>
            <div className={`text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b-2 border-white sm:border-none p-5 mb-10
                sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/5 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/5 sm:before:right-2 sm:after:left-2 sm:p-4
                ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <h1 className='inline'> Projects</h1>
            </div>

            <div className={`max-w-[960px] m-auto mb-10 bg-black shadow-lg rounded-lg overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className='grid md:grid-cols-2'>
                    <div className='p-8'>
                        <h2 className='text-2xl font-bold text-[#00FFB9] mb-4'>Online Grocery Store</h2>
                        <p className='text-white text-lg mb-4'>
                            Developed a full-stack website using React and JavaScript, featuring a user-friendly interface for browsing food options, managing carts, and completing purchases. 
                            The site includes robust user login and account management, along with a streamlined checkout process that integrates comprehensive form validation and error handling to enhance user experience and reduce cart abandonment.
                        </p>
                        <p className='text-sm text-[#00FFB9]'>ReactJS, Redux, ExpressJS, MySQL, React-Router, CSS3</p>

                        <div className='mt-5'>
                            <a href="https://github.com/Hxnzo/Online_Grocery_Store" target="_blank" rel="noreferrer">
                                <AiOutlineGithub size={35} className='text-white hover:text-[#00FFB9] transition duration-300 float-right' />
                            </a>
                        </div>
                    </div>

                    <div>
                        <img src={h2z2} alt="Online Grocery Store" className='object-cover w-full h-full' />
                    </div>
                </div>
            </div>

            <div className={`max-w-[960px] m-auto mb-10 bg-black shadow-lg rounded-lg overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className='grid md:grid-cols-2'>
                    <div className='p-8'>
                        <h2 className='text-2xl font-bold text-[#00FFB9] mb-4'>Content Based Image Retrieval</h2>
                        <p className='text-white text-lg mb-4'>
                            Developed a Python program that allows users to compare black-and-white images using angled projections. 
                            The user can select an image and then run the algorithm to find another image that is the most similar to it using hamming distances, achieving a 70% success rate.
                            By optimizing key parameters and refining preprocessing techniques, I improved the image comparison algorithm, resulting in faster retrieval times and enhanced accuracy.
                        </p>
                        <p className='text-sm text-[#00FFB9]'>Python, Pillow, VS-Code</p>

                        <div className='mt-5'>
                            <a href="https://github.com/Hxnzo/Content-Based-Image-Retrieval" target="_blank" rel="noreferrer">
                                <AiOutlineGithub size={35} className='text-white hover:text-[#00FFB9] transition duration-300 float-right' />
                            </a>
                        </div>
                    </div>

                    <div>
                        <img src={cbir} alt="Content Based Image Retrieval" className='object-cover w-full h-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;