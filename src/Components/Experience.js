// import React from 'react';

// const Experience = () => {
//     return (
//         <div className='bg-black pb-10 px-10 pt-[50px]' name='experience'>
//             <div className='m-auto text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b sm:border-none pb-5
//             sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/6 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/6 sm:before:right-2 sm:after:left-2 sm:p-4'
//             >
//                 <h1 className='inline'> Experience </h1>
//             </div>

//             <div className='container px-5 py-5 mx-auto flex flex-col'>
//                 <div className='lg:w-4/6 mx-auto'>
//                     <div className='flex flex-col md:flex-row md:mt-10'>
//                         <div className='md:w-1/3 text-center md:pr-8 md:py-8 my-auto'>
//                             <div className='flex flex-col items-center text-center justify-center'>
//                                 <div className='w-12 h-1 bg-[#00FFB9] rounded md:mt-2 mb-4'></div>
//                                 <h1 className='font-medium title-font text-white text-3xl'>Undergraduate Reasearch Assistant</h1>
//                                 <div className='w-12 h-1 bg-[#00FFB9] rounded mt-4 mb-2'></div>
//                             </div>
//                         </div>
//                         <div className='md:w-2/3 md:pl-8 md:py-8 md:border-l border-white mt-4 pt-4 md:mt-0 text-center md:text-left'>
//                             <p className='leading-relaxed text-lg text-white mb-4'>
//                                 <h1 className='inline text-[#00FFB9] text-3xl'>-</h1>	Developed a program for students and professors as admin to easily learn and teach mathematical concepts. <br /><br />
//                                 <h1 className='inline text-[#00FFB9] text-3xl'>-</h1>	Used Python and Django to construct a full stack application that displays a wide variety of math questions along with solution videos and transcripts. Also, there are quizzes that saves all information related to student.<br /><br />
//                                 <h1 className='inline text-[#00FFB9] text-3xl'>-</h1>	The goal of this program was to help student learn math more efficiently by allowing them to make notes, do quizzes and save all the information for the professor to use in the future. This results in higher grades for students.<br />
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* <div className='w-[75%] m-auto h-1 bg-white rounded mt-10'></div> */}

//             <div className='container px-5 py-5 mx-auto flex flex-col'>
//                 <div className='lg:w-4/6 mx-auto'>
//                     <div className='flex flex-col md:flex-row md:mt-10'>
//                         <div className='md:w-1/3 text-center md:pr-8 md:py-8 my-auto'>
//                             <div className='flex flex-col items-center text-center justify-center'>
//                                 <div className='w-12 h-1 bg-[#00FFB9] rounded mt-2 mb-4'></div>
//                                 <h1 className='font-medium title-font text-white text-3xl'>Manager At Carraway</h1>
//                                 <div className='w-12 h-1 bg-[#00FFB9] rounded mt-4 mb-2'></div>
//                             </div>
//                         </div>
//                         <div className='md:w-2/3 md:pl-8 md:py-8 md:border-l border-white mt-4 pt-4 md:mt-0 text-center md:text-left'>
//                             <p className='leading-relaxed text-lg text-white mb-4'>
//                                 <h1 className='inline text-[#00FFB9] text-3xl'>-</h1>	Managed staff by assigning them roles that best suit them and lets them be as efficient as possible.<br /><br />
//                                 <h1 className='inline text-[#00FFB9] text-3xl'>-</h1>	Spoke to customers regarding their needs to accommodate them as best as possible.<br /><br />
//                                 <h1 className='inline text-[#00FFB9] text-3xl'>-</h1>	Worded as an employee and guided traffic when needed.<br />
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Experience;

// import React, { useState } from 'react';
// import opg from '../Pictures/OPG.png';
// import otu from '../Pictures/OTU.png';
// import cnl from '../Pictures/CNL.png';

// const Experience = () => {
//     // State to manage which experience is selected
//     const [selectedExperience, setSelectedExperience] = useState('researchAssistant');

//     // Data for each experience
//     const experiences = {
//         cnl: {
//             company: "Canada Nuclear Laboratories",
//             title: "Computer Science Student",
//             details: [
//                 "Developed a program for students and professors as admin to easily learn and teach mathematical concepts.",
//                 "Used Python and Django to construct a full stack application that displays a wide variety of math questions along with solution videos and transcripts. Also, there are quizzes that save all information related to the student.",
//                 "The goal of this program was to help students learn math more efficiently by allowing them to make notes, do quizzes and save all the information for the professor to use in the future. This results in higher grades for students."
//             ]
//         },
//         opg: {
//             company: "Ontario Power Generation",
//             title: "Software Engineering Intern",
//             details: [
//                 "Developed a program for students and professors as admin to easily learn and teach mathematical concepts.",
//                 "Used Python and Django to construct a full stack application that displays a wide variety of math questions along with solution videos and transcripts. Also, there are quizzes that save all information related to the student.",
//                 "The goal of this program was to help students learn math more efficiently by allowing them to make notes, do quizzes and save all the information for the professor to use in the future. This results in higher grades for students."
//             ]
//         },
//         researchAssistant: {
//             company: "Ontario Tech University",
//             title: "Undergraduate Research Assistant",
//             details: [
//                 "Developed a program for students and professors as admin to easily learn and teach mathematical concepts.",
//                 "Developed a program for students and professors as admin to easily learn and teach mathematical concepts.",
//                 "Used Python and Django to construct a full stack application that displays a wide variety of math questions along with solution videos and transcripts. Also, there are quizzes that save all information related to the student.",
//                 "The goal of this program was to help students learn math more efficiently by allowing them to make notes, do quizzes and save all the information for the professor to use in the future. This results in higher grades for students."
//             ]
//         }
//     };

//     // Function to change the selected experience
//     const showExperience = (experienceKey) => {
//         setSelectedExperience(experienceKey);
//     };

//     return (
//         <div className='bg-black pb-10 px-10 pt-[50px]' name='experience'>
//             <div className='m-auto text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b sm:border-none pb-5
//                 sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/6 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/6 sm:before:right-2 sm:after:left-2 sm:p-4'>
//                 <h1 className='inline'>Experience</h1>
//             </div>

//             <div className='container px-5 py-5 mx-auto flex flex-col items-center'>
//                 <div className='flex space-x-5'>
//                     <button
//                         onClick={() => showExperience('cnl')}
//                         className={`p-3 rounded-lg ${selectedExperience === 'cnl' ? 'bg-[#00FFB9]' : 'bg-white'} text-black`}
//                     >
//                         <img className='w-[50px] h-[50px] object-contain' src={cnl} alt="Manager At Carraway" />
//                     </button>
//                     <button
//                         onClick={() => showExperience('opg')}
//                         className={`p-3 rounded-lg ${selectedExperience === 'opg' ? 'bg-[#00FFB9]' : 'bg-white'} text-black`}
//                     >
//                         <img className='w-[50px] h-[50px] object-contain' src={opg} alt="Manager At Carraway" />
//                     </button>
//                     <button
//                         onClick={() => showExperience('researchAssistant')}
//                         className={`p-3 rounded-lg ${selectedExperience === 'researchAssistant' ? 'bg-[#00FFB9]' : 'bg-white'} text-black`}
//                     >
//                         <img className='w-[50px] h-[50px] object-contain' src={otu} alt="Undergraduate Research Assistant" />
//                     </button>
//                 </div>
//             </div>

//             <div className='container px-5 mx-auto flex flex-col'>
//                 <div className='lg:w-4/6 mx-auto'>
//                     <div className='flex flex-col md:flex-row md:mt-10'>
//                         <div className='md:w-1/3 text-center md:pr-8 md:py-8 my-auto'>
//                             <div className='flex flex-col items-center text-center justify-center'>
//                                 <div className='hidden md:block w-12 h-1 bg-white rounded md:mt-2 mb-4'></div>
//                                 <h1 className='font-medium title-font text-[#00FFB9] text-3xl'>{experiences[selectedExperience].company}</h1>
//                                 <div className='hidden md:block w-12 h-1 bg-white rounded md:mt-4 mb-2'></div>
//                             </div>
//                         </div> 
//                         <div className='md:w-2/3 md:pl-8 md:py-8 md:border-l border-white mt-4 pt-4 md:mt-0 text-center md:text-left'>
//                             <h1 className='font-medium title-font text-white text-3xl'>{experiences[selectedExperience].title}</h1>
//                             <div className='w-3/3 h-1 bg-[#00FFB9] rounded mt-4 mb-2'></div>

//                             <p className='leading-relaxed text-lg text-white mb-4'>
//                                 {experiences[selectedExperience].details.map((detail, index) => (
//                                     <span key={index}>
//                                         <h1 className='inline text-[#00FFB9] text-3xl'>-</h1> {detail}<br /><br />
//                                     </span>
//                                 ))}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Experience;

// import React, { useState } from 'react';
// import opg from '../Pictures/OPG.png';
// import otu from '../Pictures/OTU.png';
// import cnl from '../Pictures/CNL.png';

// const Experience = () => {
//     // State to manage which experience is selected
//     const [selectedExperience, setSelectedExperience] = useState('researchAssistant');

//     // Data for each experience
//     const experiences = {
//         cnl: {
//             company: "Canada Nuclear Laboratories",
//             title: "Computer Science Student",
//             details: [
//                 "Developed a program for students and professors as admin to easily learn and teach mathematical concepts.",
//                 "Used Python and Django to construct a full stack application that displays a wide variety of math questions along with solution videos and transcripts. Also, there are quizzes that save all information related to the student.",
//                 "The goal of this program was to help students learn math more efficiently by allowing them to make notes, do quizzes and save all the information for the professor to use in the future. This results in higher grades for students."
//             ]
//         },
//         opg: {
//             company: "Ontario Power Generation",
//             title: "Software Engineering Intern",
//             details: [
//                 "Developed a program for students and professors as admin to easily learn and teach mathematical concepts.",
//                 "Used Python and Django to construct a full stack application that displays a wide variety of math questions along with solution videos and transcripts. Also, there are quizzes that save all information related to the student.",
//                 "The goal of this program was to help students learn math more efficiently by allowing them to make notes, do quizzes and save all the information for the professor to use in the future. This results in higher grades for students."
//             ]
//         },
//         researchAssistant: {
//             company: "Ontario Tech University",
//             title: "Undergraduate Research Assistant",
//             details: [
//                 "Developed a program for students and professors as admin to easily learn and teach mathematical concepts.",
//                 "Developed a program for students and professors as admin to easily learn and teach mathematical concepts.",
//                 "Used Python and Django to construct a full stack application that displays a wide variety of math questions along with solution videos and transcripts. Also, there are quizzes that save all information related to the student.",
//                 "The goal of this program was to help students learn math more efficiently by allowing them to make notes, do quizzes and save all the information for the professor to use in the future. This results in higher grades for students."
//             ]
//         }
//     };

//     // Function to change the selected experience
//     const showExperience = (experienceKey) => {
//         setSelectedExperience(experienceKey);
//     };

//     return (
//         <div className='bg-black pb-10 px-5 pt-[50px]' name='experience'>
//             <div className='m-auto text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b sm:border-none pb-5
//             sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/6 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/6 sm:before:right-2 sm:after:left-2 sm:p-4'
//             >
//                 <h1 className='inline'> Experience </h1>
//             </div>

//             <div className='container px-5 py-5 mx-auto flex flex-col items-center'>
//                 <div className='flex space-x-5'>
//                     <button
//                         onClick={() => showExperience('cnl')}
//                         className={`p-3 rounded-lg ${selectedExperience === 'cnl' ? 'bg-[#00FFB9]' : 'bg-white'} text-black`}
//                     >
//                         <img className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain' src={cnl} alt="Canada Nuclear Laboratories" />
//                     </button>
//                     <button
//                         onClick={() => showExperience('opg')}
//                         className={`p-3 rounded-lg ${selectedExperience === 'opg' ? 'bg-[#00FFB9]' : 'bg-white'} text-black`}
//                     >
//                         <img className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain' src={opg} alt="Ontario Power Generation" />
//                     </button>
//                     <button
//                         onClick={() => showExperience('researchAssistant')}
//                         className={`p-3 rounded-lg ${selectedExperience === 'researchAssistant' ? 'bg-[#00FFB9]' : 'bg-white'} text-black`}
//                     >
//                         <img className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain' src={otu} alt="Ontario Tech University" />
//                     </button>
//                 </div>
//             </div>

//             <div className='container px-5 mx-auto flex flex-col'>
//                 <div className='lg:w-4/6 mx-auto'>
//                     <div className='flex flex-col md:flex-row md:mt-10'>
//                         <div className='md:w-1/3 text-center md:pr-8 md:py-8 my-auto'>
//                             <div className='flex flex-col items-center text-center justify-center'>
//                                 <div className='hidden md:block w-12 h-1 bg-white rounded md:mt-2 mb-4'></div>
//                                 <h1 className='font-medium title-font text-[#00FFB9] text-3xl py-2 md:py-0'>{experiences[selectedExperience].company}</h1>
//                                 <div className='hidden md:block w-12 h-1 bg-white rounded mt-4 mb-2'></div>
//                             </div>
//                         </div> 
//                         <div className='md:w-2/3 md:pl-8 md:py-8 md:border-l border-white mt-4 pt-4 md:mt-0 text-center md:text-left'>
//                             <h1 className='font-medium text-center title-font text-white text-xl md:text-3xl'>{experiences[selectedExperience].title}</h1>
//                             <div className='w-full h-0.5 bg-[#00FFB9] rounded mt-4 mb-2'></div>

//                             <p className='leading-relaxed text-md md:text-lg text-white mb-4'>
//                                 {experiences[selectedExperience].details.map((detail, index) => (
//                                     <span key={index}>
//                                         <h1 className='inline text-[#00FFB9] text-xl md:text-2xl'>-</h1> {detail}<br /><br />
//                                     </span>
//                                 ))}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Experience;

import React, { useState, useEffect, useRef } from 'react';
import opg from '../Pictures/OPG.png';
import otu from '../Pictures/OTU.png';
import cnl from '../Pictures/CNL.png';

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState('cnl');
    const experienceRef = useRef(null); 
    const [isVisible, setIsVisible] = useState(false); 

    const experiences = {
        cnl: {
            company: "Canadian Nuclear Laboratories",
            title: "Computer Science Student",
            details: [
                "Collaborated on the development of an internal machine learning model using Python and SQL to predict work package statuses, partnering with a Senior Data Engineer to create a test model that forecasted timelines.",
                "Designed and implemented logic checks in ASP.NET and SQL Server to enforce correct task sequencing for work packages, enhancing project scheduling accuracy and improving task dependency reliability for managers.",
                "Created a dynamic webpage for the S&T department using ASP.NET and SQL Server, enabling managers to efficiently track employee assignments and total hours worked by extracting and displaying work package data."
            ]
        },
        opg: {
            company: "Ontario Power Generation",
            title: "Software Engineering Intern",
            details: [
                "Developed a Python script to automate the extraction, transformation, and transfer of data between SQL databases, visualizing the processed data in a Power BI dashboard. This enabled system responsible engineers to monitor system performance and identify potential issues proactively.",
                "Built a software solution for managing outsourced work assignments, utilizing SQL and Express.JS for backend operations, and creating a responsive, intuitive front-end interface with Electron JS.",
                "Designed a Power BI dashboard for project management, integrating real-time SQL data to provide stakeholders with instant access to work order details, expenses, work plans, scopes, and associated projects.",
                "Created an Excel macro using VBA to extract data from SQL Server and present it in a user-friendly format, tailored to the needs of system responsible engineers."
            ]
        },
        researchAssistant: {
            company: "Ontario Tech University",
            title: "Undergraduate Research Assistant",
            details: [
                "Developed a full-stack application using Python and Django to facilitate seamless learning of mathematical concepts for students and professors, featuring a diverse range of math questions, solution videos, transcripts, and quizzes that securely store student-related information.",
                "Boosted math learning efficiency by 50% through the application enabling students to take notes, complete quizzes, and securely store all student data for faculty review, resulting in enhanced academic outcomes."
            ]
        }
    };

    // Function to change the selected experience
    const showExperience = (experienceKey) => {
        setSelectedExperience(experienceKey);
    };

    // IntersectionObserver to trigger fade-in animations when the component is visible
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing once it's visible
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

        if (experienceRef.current) {
            observer.observe(experienceRef.current); // Observe the 'Experience' section
        }

        return () => {
            if (experienceRef.current) {
                observer.unobserve(experienceRef.current);
            }
        };
    }, []);

    return (
        <div ref={experienceRef} className='bg-gradient-to-b from-[#0d1d18] to-black pb-10 px-5 pt-[50px]' name='experience'>
            <div className={`m-auto text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b sm:border-none pb-5
            sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/6 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/6 sm:before:right-2 sm:after:left-2 sm:p-4 
            ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <h1 className='inline'> Experience </h1>
            </div>

            <div className={`container px-5 py-5 mx-auto flex flex-col items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className='flex space-x-5'>
                    <button
                        onClick={() => showExperience('cnl')}
                        className={`p-3 rounded-lg ${selectedExperience === 'cnl' ? 'bg-[#00FFB9]' : 'bg-white'} text-black`}
                    >
                        <img className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain' src={cnl} alt="Canada Nuclear Laboratories" />
                    </button>
                    <button
                        onClick={() => showExperience('opg')}
                        className={`p-3 rounded-lg ${selectedExperience === 'opg' ? 'bg-[#00FFB9]' : 'bg-white'} text-black`}
                    >
                        <img className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain' src={opg} alt="Ontario Power Generation" />
                    </button>
                    <button
                        onClick={() => showExperience('researchAssistant')}
                        className={`p-3 rounded-lg ${selectedExperience === 'researchAssistant' ? 'bg-[#00FFB9]' : 'bg-white'} text-black`}
                    >
                        <img className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain' src={otu} alt="Ontario Tech University" />
                    </button>
                </div>
            </div>

            <div className={`container px-5 mx-auto flex flex-col ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className='lg:w-4/6 mx-auto'>
                    <div className='flex flex-col md:flex-row md:mt-10'>
                        <div className='md:w-1/3 text-center md:pr-8 md:py-8 my-auto'>
                            <div className='flex flex-col items-center text-center justify-center'>
                                <div className='hidden md:block w-12 h-1 bg-white rounded md:mt-2 mb-4'></div>
                                <h1 className='font-medium title-font text-[#00FFB9] text-3xl py-2 md:py-0'>{experiences[selectedExperience].company}</h1>
                                <div className='hidden md:block w-12 h-1 bg-white rounded mt-4 mb-2'></div>
                            </div>
                        </div> 
                        <div className='md:w-2/3 md:pl-8 md:py-8 md:border-l border-white mt-4 pt-4 md:mt-0 text-center md:text-left'>
                            <h1 className='font-medium text-center title-font text-white text-xl md:text-3xl'>{experiences[selectedExperience].title}</h1>
                            <div className='w-full h-0.5 bg-[#00FFB9] rounded mt-4 mb-2'></div>

                            <p className='leading-relaxed text-md md:text-lg text-white mb-4'>
                                {experiences[selectedExperience].details.map((detail, index) => (
                                    <span key={index}>
                                        <h1 className='inline text-[#00FFB9] text-xl md:text-2xl'>-</h1> {detail}<br /><br />
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
