import React from 'react';

const Experience = () => {
    return (
        <div className='bg-black pb-10 px-10 pt-[50px]' name='experience'>
            <div className='m-auto text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b sm:border-none pb-5
            sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/6 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/6 sm:before:right-2 sm:after:left-2 sm:p-4'
            >
                <h1 className='inline'> Experience </h1>
            </div>

            <div className='container px-5 py-5 mx-auto flex flex-col'>
                <div className='lg:w-4/6 mx-auto'>
                    <div className='flex flex-col md:flex-row md:mt-10'>
                        <div className='md:w-1/3 text-center md:pr-8 md:py-8 my-auto'>
                            <div className='flex flex-col items-center text-center justify-center'>
                                <div className='w-12 h-1 bg-[#00FFB9] rounded md:mt-2 mb-4'></div>
                                <h1 className='font-medium title-font text-white text-3xl'>Undergraduate Reasearch Assistant</h1>
                                <div className='w-12 h-1 bg-[#00FFB9] rounded mt-4 mb-2'></div>
                            </div>
                        </div>
                        <div className='md:w-2/3 md:pl-8 md:py-8 md:border-l border-white mt-4 pt-4 md:mt-0 text-center md:text-left'>
                            <p className='leading-relaxed text-lg text-white mb-4'>
                                <h1 className='inline text-[#00FFB9] text-3xl'>-</h1>	Developed a program for students and professors as admin to easily learn and teach mathematical concepts. <br /><br />
                                <h1 className='inline text-[#00FFB9] text-3xl'>-</h1>	Used Python and Django to construct a full stack application that displays a wide variety of math questions along with solution videos and transcripts. Also, there are quizzes that saves all information related to student.<br /><br />
                                <h1 className='inline text-[#00FFB9] text-3xl'>-</h1>	The goal of this program was to help student learn math more efficiently by allowing them to make notes, do quizzes and save all the information for the professor to use in the future. This results in higher grades for students.<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='w-[75%] m-auto h-1 bg-white rounded mt-10'></div> */}

            <div className='container px-5 py-5 mx-auto flex flex-col'>
                <div className='lg:w-4/6 mx-auto'>
                    <div className='flex flex-col md:flex-row md:mt-10'>
                        <div className='md:w-1/3 text-center md:pr-8 md:py-8 my-auto'>
                            <div className='flex flex-col items-center text-center justify-center'>
                                <div className='w-12 h-1 bg-[#00FFB9] rounded mt-2 mb-4'></div>
                                <h1 className='font-medium title-font text-white text-3xl'>Manager At Carraway</h1>
                                <div className='w-12 h-1 bg-[#00FFB9] rounded mt-4 mb-2'></div>
                            </div>
                        </div>
                        <div className='md:w-2/3 md:pl-8 md:py-8 md:border-l border-white mt-4 pt-4 md:mt-0 text-center md:text-left'>
                            <p className='leading-relaxed text-lg text-white mb-4'>
                                <h1 className='inline text-[#00FFB9] text-3xl'>-</h1>	Managed staff by assigning them roles that best suit them and lets them be as efficient as possible.<br /><br />
                                <h1 className='inline text-[#00FFB9] text-3xl'>-</h1>	Spoke to customers regarding their needs to accommodate them as best as possible.<br /><br />
                                <h1 className='inline text-[#00FFB9] text-3xl'>-</h1>	Worded as an employee and guided traffic when needed.<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Experience;