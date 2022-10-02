import React from 'react';

const About = () => {
    return (
        <div className='bg-black pb-10 px-10' name='about'>
            <div className='m-auto text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b sm:border-none pb-5
            sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/6 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/6 sm:before:right-2 sm:after:left-2 sm:p-4'
            >
                <h1 className='inline'> About Me </h1>
            </div>

            <div className='p-5 justify-center m-auto max-w-[960px] mx-auto bg-black text-black rounded-lg'>
                <h1 className='inline justify-center text-white'>
                    Hello, My name is <h1 className='inline text-[#00FFB9] text-xl'>Hanzalah Patel</h1> and I am a third year software engineering student at <h1 className='inline text-[#00FFB9] text-xl'>Ontario Tech University. </h1> 
                    I have always loved <h1 className='inline text-[#00FFB9] text-xl'>computers </h1>and decided to pursue a career in software engineering to become a <h1 className='inline text-[#00FFB9] text-xl'>Full-Stack developer. </h1>
                    I enjoy designing new websites and I am great at <h1 className='inline text-[#00FFB9] text-xl'>problem solving </h1>when it comes to code bugs/errors. 
                    I am a quick learner when it comes to coding languages and computer related things. 
                    Otherwise, in my free time you can find me <h1 className='inline text-[#00FFB9] text-xl'>developing new websites </h1>(for fun), <h1 className='inline text-[#00FFB9] text-xl'>watching anime</h1>, or <h1 className='inline text-[#00FFB9] text-xl'>playing video games.</h1>
                </h1>
            </div>
        </div>
    );
};

export default About;