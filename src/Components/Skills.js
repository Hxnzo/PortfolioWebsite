// import React from 'react';
// import htmlPic from '../Pictures/HTML.png'
// import javaPic from '../Pictures/Java.png'
// import cssPic from '../Pictures/CSS3.png'
// import reactPic from '../Pictures/React.png'
// import pythonPic from '../Pictures/Python.png'
// import djangoPic from '../Pictures/Django.png'
// import mysqlPic from '../Pictures/MySQL.png'
// import javascriptPic from '../Pictures/Javascript.png'
// import tailwindPic from '../Pictures/Tailwind.png'
// import angularPic from '../Pictures/Angular.png'
// import scssPic from '../Pictures/SCSS.png'
// import vuePic from '../Pictures/Vue.png'

// const Skills = () => {
//     return (
//         <div className='bg-black pb-10 px-10 pt-[50px]' name='skills'>
//             <div className='m-auto text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b sm:border-none pb-5
//             sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/5 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/5 sm:before:right-2 sm:after:left-2 sm:p-4'
//             >
//                 <h1 className='inline'> Skills </h1> 
//             </div>

//             <div className='p-5 justify-center m-auto max-w-[960px] bg-black text-black rounded-lg'>
//                 <div className='m-auto p-5 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5'>
//                     <div className='inline p-3 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
//                         <img className='sm:w-[80px] w-[50px]' src={htmlPic} alt="/" />
//                         <h1 className='flex justify-center text-sm'>HTML5</h1>
//                     </div>   
//                     <div className='inline p-3 h-[95.25px] sm:h-full justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
//                         <img className='sm:w-[70px] w-[50px]' src={cssPic} alt="/" />
//                         <h1 className='flex justify-center'>CSS3</h1>
//                     </div>
//                     <div className='inline p-3 h-[95.25px] sm:h-full justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
//                         <img className='sm:w-[75px] w-[50px]' src={javaPic} alt="/" />
//                         <h1 className='flex justify-center'>Java</h1>
//                     </div>
//                     <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
//                         <img className='sm:w-[70px] w-[50px] m-auto' src={javascriptPic} alt="/" />
//                         <h1 className='flex justify-center text-[15px] sm:text-inherit'>Javascript</h1>
//                     </div>
//                     <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
//                         <img className='sm:w-[80px]' src={reactPic} alt="/" />
//                         <h1 className='flex justify-center'>React</h1>
//                     </div>
//                     <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
//                         <img className='sm:w-[70px]' src={pythonPic} alt="/" />
//                         <h1 className='flex justify-center'>Python</h1>
//                     </div>
//                 </div>
//                 <div className='m-auto p-5 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5'>
//                     <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
//                         <img className='sm:w-[70px]' src={mysqlPic} alt="/" />
//                         <h1 className='flex justify-center text-[15px] sm:text-inherit'>MySQL</h1>
//                     </div>
//                     <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] px-5 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
//                         <img className='sm:w-[55px]' src={djangoPic} alt="/" />
//                         <h1 className='flex justify-center'>Django</h1>
//                     </div>
//                     <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] py-6 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
//                         <img className='sm:w-[75px]' src={tailwindPic} alt="/" />
//                         <h1 className='flex justify-center'>Tailwind</h1>
//                     </div>
//                     <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
//                         <img className='sm:w-[70px]' src={angularPic} alt="/" />
//                         <h1 className='flex justify-center text-[15px] sm:text-inherit'>Angular</h1>
//                     </div>
//                     <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] py-4 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
//                         <img className='sm:w-[80px]' src={scssPic} alt="/" />
//                         <h1 className='flex justify-center'>SCSS</h1>
//                     </div>
//                     <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
//                         <img className='sm:w-[70px]' src={vuePic} alt="/" />
//                         <h1 className='flex justify-center'>Vue</h1>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Skills;

import React, { useEffect, useRef, useState } from 'react';
import htmlPic from '../Pictures/HTML.png'
import javaPic from '../Pictures/Java.png'
import expressPic from '../Pictures/Express.png'
import reactPic from '../Pictures/React.png'
import pythonPic from '../Pictures/Python.png'
import djangoPic from '../Pictures/Django.png'
import mysqlPic from '../Pictures/MySQL.png'
import javascriptPic from '../Pictures/Javascript.png'
import tailwindPic from '../Pictures/Tailwind.png'
import dockerPic from '../Pictures/Docker.png'
import kubernetesPic from '../Pictures/Kubernetes.png'
import azurePic from '../Pictures/Azure.png'
import cSharpPic from '../Pictures/CSharp.png'
import cPlusPlusPic from '../Pictures/C++.png'
import cPic from '../Pictures/C.png'
import aspDotNetPic from '../Pictures/ASP.png'
import kotlinPic from '../Pictures/Kotlin.png'
import gitPic from '../Pictures/Git.png'

const Skills = () => {
    const skillsRef = useRef(null); // Reference to the Skills section
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

        if (skillsRef.current) {
            observer.observe(skillsRef.current); // Observe the 'Skills' section
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);
    
    return (
        <div ref={skillsRef} className='bg-gradient-to-b from-black to-[#0d1d18] pb-10 px-10 pt-[50px]' name='skills'>
            <div className={`m-auto text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b sm:border-none pb-5
                sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/5 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/5 sm:before:right-2 sm:after:left-2 sm:p-4 
                ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            >
                <h1 className='inline'> Skills </h1> 
            </div>

            <div className={`p-5 justify-center m-auto max-w-[960px] text-black rounded-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className='m-auto p-5 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5'>
                    <div className='inline p-3 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[80px] w-[50px]' src={htmlPic} alt="/" />
                        <h1 className='flex justify-center text-sm'>HTML5</h1>
                    </div>   
                    <div className='inline p-4 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[70px]' src={expressPic} alt="/" />
                        <h1 className='flex justify-center text-[15px] sm:text-inherit'>ExpressJS</h1>
                    </div>
                    <div className='inline p-3 h-[95.25px] sm:h-full justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[75px] w-[50px]' src={javaPic} alt="/" />
                        <h1 className='flex justify-center'>Java</h1>
                    </div>
                    <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[70px] w-[50px] m-auto' src={javascriptPic} alt="/" />
                        <h1 className='flex justify-center text-[15px] sm:text-inherit'>Javascript</h1>
                    </div>
                    <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[80px]' src={reactPic} alt="/" />
                        <h1 className='flex justify-center'>React</h1>
                    </div>
                    <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[70px]' src={pythonPic} alt="/" />
                        <h1 className='flex justify-center'>Python</h1>
                    </div>
                </div>



                <div className='m-auto p-5 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5'>
                    <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[70px]' src={mysqlPic} alt="/" />
                        <h1 className='flex justify-center text-[15px] sm:text-inherit'>MySQL</h1>
                    </div>
                    <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] px-5 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[55px]' src={djangoPic} alt="/" />
                        <h1 className='flex justify-center'>Django</h1>
                    </div>
                    <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] py-6 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[75px]' src={tailwindPic} alt="/" />
                        <h1 className='flex justify-center sm:pt-3'>Tailwind</h1>
                    </div>
                    <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] py-6 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[70px]' src={dockerPic} alt="/" />
                        <h1 className='flex justify-center sm:pt-5'>Docker</h1>
                    </div>
                    <div className='inline p-4 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] py-4 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[80px]' src={kubernetesPic} alt="/" />
                        <h1 className='flex justify-center text-[12px]'>Kubernetes</h1>
                    </div>
                    <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[75px]' src={azurePic} alt="/" />
                        <h1 className='flex justify-center'>Azure</h1>
                    </div>
                </div>



                <div className='m-auto p-5 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5'>
                    <div className='inline sm:p-3 p-4 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] sm:py-4 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[100px] m-auto' src={cSharpPic} alt="/" />
                        <h1 className='flex justify-center'>C#</h1>
                    </div>
                    <div className='inline sm:p-3 p-4 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] sm:py-4 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[150px]' src={cPlusPlusPic} alt="/" />
                        <h1 className='flex justify-center'>C++</h1>
                    </div>
                    <div className='inline sm:p-3 p-4 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] sm:py-4 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[75px]' src={cPic} alt="/" />
                        <h1 className='flex justify-center'>C</h1>
                    </div>
                    <div className='inline sm:p-1 p-3 pt-5 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] sm:pt-7 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[150px]' src={aspDotNetPic} alt="/" />
                        <h1 className='flex justify-center sm:pt-7 pt-2'>ASP.NET</h1>
                    </div>
                    <div className='inline sm:p-3 p-4 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] sm:py-4 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[100px]' src={kotlinPic} alt="/" />
                        <h1 className='flex justify-center'>Kotlin</h1>
                    </div>
                    <div className='inline sm:p-3 p-4 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] sm:py-4 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[75px]' src={gitPic} alt="/" />
                        <h1 className='flex justify-center'>Git</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;