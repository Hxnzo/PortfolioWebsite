import React from 'react';
import htmlPic from '../Pictures/HTML.png'
import javaPic from '../Pictures/Java.png'
import cssPic from '../Pictures/CSS3.png'
import reactPic from '../Pictures/React.png'
import pythonPic from '../Pictures/Python.png'
import djangoPic from '../Pictures/Django.png'
import mysqlPic from '../Pictures/MySQL.png'
import javascriptPic from '../Pictures/Javascript.png'
import tailwindPic from '../Pictures/Tailwind.png'
import angularPic from '../Pictures/Angular.png'
import scssPic from '../Pictures/SCSS.png'
import vuePic from '../Pictures/Vue.png'

const Skills = () => {
    return (
        <div className='bg-black pb-10 px-10 pt-[50px]' name='skills'>
            <div className='m-auto text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white border-b sm:border-none pb-5
            sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/5 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/5 sm:before:right-2 sm:after:left-2 sm:p-4'
            >
                <h1 className='inline'> Skills </h1> 
            </div>

            <div className='p-5 justify-center m-auto max-w-[960px] bg-black text-black rounded-lg'>
                <div className='m-auto p-5 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5'>
                    <div className='inline p-3 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[80px] w-[50px]' src={htmlPic} alt="/" />
                        <h1 className='flex justify-center text-sm'>HTML5</h1>
                    </div>   
                    <div className='inline p-3 h-[95.25px] sm:h-full justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[70px] w-[50px]' src={cssPic} alt="/" />
                        <h1 className='flex justify-center'>CSS3</h1>
                    </div>
                    <div className='inline p-3 h-[95.25px] sm:h-full justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[75px] w-[50px]' src={javaPic} alt="/" />
                        <h1 className='flex justify-center'>Java</h1>
                    </div>
                    <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[70px] w-[50px] m-auto' src={javascriptPic} alt="/" />
                        <h1 className='flex justify-center text-[15px] sm:text-inherit'>Javascrip</h1>
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
                        <h1 className='flex justify-center'>Tailwind</h1>
                    </div>
                    <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[70px]' src={angularPic} alt="/" />
                        <h1 className='flex justify-center text-[15px] sm:text-inherit'>Angular</h1>
                    </div>
                    <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] py-4 justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[80px]' src={scssPic} alt="/" />
                        <h1 className='flex justify-center'>SCSS</h1>
                    </div>
                    <div className='inline p-3 h-[95.25px] sm:h-full w-[82px] sm:w-[108px] justify-center m-auto bg-white text-black rounded-3xl border-solid border-4 border-[#00FFB9]'>
                        <img className='sm:w-[70px]' src={vuePic} alt="/" />
                        <h1 className='flex justify-center'>Vue</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;