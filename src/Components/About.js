// import React from 'react';

// const About = () => {
//     return (
//         <div className='bg-black pb-10 px-10' name='about'>
//             <div className='m-auto text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b sm:border-none pb-5
//             sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/6 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/6 sm:before:right-2 sm:after:left-2 sm:p-4'
//             >
//                 <h1 className='inline'> About Me </h1>
//             </div>

//             <div className='p-5 justify-center m-auto max-w-[960px] mx-auto bg-black text-black rounded-lg'>
//                 <h1 className='inline justify-center text-white'>
//                     Hello, My name is <h1 className='inline text-[#00FFB9] text-xl'>Hanzalah Patel</h1> and I am a third year software engineering student at <h1 className='inline text-[#00FFB9] text-xl'>Ontario Tech University. </h1> 
//                     I have always loved <h1 className='inline text-[#00FFB9] text-xl'>computers </h1>and decided to pursue a career in software engineering to become a <h1 className='inline text-[#00FFB9] text-xl'>Full-Stack developer. </h1>
//                     I enjoy designing new websites and I am great at <h1 className='inline text-[#00FFB9] text-xl'>problem solving </h1>when it comes to code bugs/errors. 
//                     I am a quick learner when it comes to coding languages and computer related things. 
//                     Otherwise, in my free time you can find me <h1 className='inline text-[#00FFB9] text-xl'>developing new websites </h1>(for fun), <h1 className='inline text-[#00FFB9] text-xl'>watching anime</h1>, or <h1 className='inline text-[#00FFB9] text-xl'>playing video games.</h1>
//                 </h1>
//             </div>
//         </div>
//     );
// };

// export default About;

import React, { useEffect, useRef, useState } from 'react';

const About = () => {
    const aboutRef = useRef(null); // Reference to the about section
    const [isVisible, setIsVisible] = useState(false); // Track visibility

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); 
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }); 

        if (aboutRef.current) {
            observer.observe(aboutRef.current); 
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <div className='bg-gradient-to-b from-black to-[#0d1d18] pb-10 px-10' name='about' ref={aboutRef}>
            <div className={`m-auto text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b sm:border-none pb-5
            sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/6 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/6 sm:before:right-2 sm:after:left-2 sm:p-4 
            ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}> {/* Add fade-in when visible */}
                <h1 className='inline'> About Me </h1>
            </div>

            <div className={`p-5 justify-center m-auto max-w-[960px] mx-auto text-black rounded-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                {/* <h1 className='inline justify-center text-white'>
                    Hello, My name is <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Hanzalah Patel</span> and I am in my final year of software engineering at 
                    <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'> Ontario Tech University. </span> 
                    As a <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Software Developer</span> I have been programming since I was in <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>high school </span>
                    and have built up my skillset over the years. I have a passion in <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Artificial Intelligence</span> and <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Web Development</span>, 
                    with great <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Problem Solving skills</span> I am able to quickly learn and adapt to any situation.
                    During my 4-month co-op at <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Canada Nuclear Laboratories</span>, 12-month internship at <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Ontario Power Generation</span>, and 4-month co-op at <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'> OntarioTech University</span> I have developed a diverse and comprehensive set of technical skills. 
                    I am currently seeking a New Grad Software Engineering/Developer position as a <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Full Stack Developer</span>, <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Mobile Developer</span>, 
                    <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'> Web Developer</span>, <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'> Front-End/Back-End Developer</span>, or <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'> Data Scientist</span>.
                </h1> */}
                <h1 className='inline justify-center text-white'>
                    Hello, My name is <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Hanzalah Patel</span> and I am in my final year of software engineering at 
                    <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'> Ontario Tech University. </span> 
                    As a <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Software Developer</span> I have been programming since I was in <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>high school </span>
                    and have built up my skillset over the years. I’m particularly passionate about <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Artificial Intelligence</span> and <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Web Development</span>, 
                    and my <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>problem-solving skills</span> enable me to quickly learn and adapt to new challenges.
                    During my 4-month co-op at <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Canada Nuclear Laboratories</span>, 12-month internship at <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Ontario Power Generation</span>, and 4-month co-op at <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Ontario Tech University</span>, I’ve gained a diverse and comprehensive technical skill set.
                    I am currently seeking a New Grad Software Engineering/Developer position as a <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Full Stack Developer</span>, <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Mobile Developer</span>, 
                    <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Web Developer</span>, <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Front-End/Back-End Developer</span>, or <span className='inline text-[#00FFB9] text-xl hover:text-white transition-all duration-300'>Data Scientist</span>.
                </h1>

            </div>
        </div>
    );
};

export default About;
