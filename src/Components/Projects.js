import React from 'react';
import h2z2 from '../Pictures/H2Z2.jpg'
import cbir from '../Pictures/CBIR.jpg'
import {AiOutlineGithub} from 'react-icons/ai'

const Projects = () => {
    return (
        <div className='bg-black pb-10 px-10 pt-[50px]'  name='projects'>
            <div className='m-auto text-[50px] text-center overflow-hidden before:h-[1px] after:h-[1px] text-white
            sm:after:bg-white sm:after:inline-block sm:after:align-middle sm:after:w-1/6 sm:before:bg-white sm:before:inline-block sm:before:align-middle sm:before:w-1/6 sm:before:right-2 sm:after:left-2 sm:p-4'
            >
                <h1 className='inline'>  Projects  </h1> 
            </div>

            <div className='md:max-w-[960px] m-auto mb-10'>
                <div className='inline-block md:flex bg-white rounded-lg m-5'>
                    <div className='flex md:max-w-[350px] md:max-h-[300]'>
                        <img className='flex justify-center rounded-t-lg md:rounded-tr-none md:rounded-l-lg' src={h2z2} alt="/h2z2" />
                    </div>

                    <div className='flex-col p-5'>
                        <div className='font-bold text-xl text-[#00FFB9] mb-2'>Online Grocery Store</div>

                        <div className='flex my-5'>
                            <p className='text-black text-base'>
                                Designed and developed a full stack responsive online grocery store, implemented an authentication system for users to login/signup, built Home, Product & dynamic Cart Pages using React. 
                                Also used MySQl and heroku to host and save all the information like usernames, passwords, orders and more.
                            </p>
                        </div>

                        <div className='font-bold text-sm text-[#00FFB9] mb-2'>ReactJS, Redux, ExpressJS, MySQL, React-Router, CSS3</div>
                                                
                        <div className='items-center text-sm pt-2'>
                            <a href="https://github.com/Hxnzo/Online_Grocery_Store">
                                <AiOutlineGithub size={ 35 } className='text-black' />
                            </a>
                        </div>
                    </div>
                </div> 
            </div>

            <div className='md:max-w-[960px] m-auto mb-10'>
                <div className='inline-block md:flex bg-white rounded-lg m-5'>
                    <div className='flex md:max-w-[350px] md:max-h-[300]'>
                        <img className='flex w-full justify-center rounded-t-lg md:rounded-tr-none md:rounded-l-lg' src={cbir} alt="/cbir" />
                    </div>

                    <div className='flex-col p-5'>
                        <div className='font-bold text-xl text-[#00FFB9] mb-2'>Content Based Image Retrieval</div>

                        <div className='flex my-5'>
                            <p className='text-black text-base'>
                                Designed and developed a Python program that converts a black and white image into a barcode using angled projections. 
                                The progam allows the user to search for the most similar barcode with an accuracy of greater than 80%.
                            </p>
                        </div>

                        <div className='font-bold text-sm text-[#00FFB9] mb-2'>Python, Pillow, Redux, VS-Code</div>
                                                
                        <div className='items-center text-sm pt-2'>
                            <a href="https://github.com/Hxnzo/Content-Based-Image-Retrieval">
                                <AiOutlineGithub size={ 35 } className='text-black' />
                            </a>
                        </div>
                    </div>
                </div> 
            </div>

            {/* <div className='md:max-w-[960px] m-auto mb-10'>
                <div className='inline-block md:flex bg-white rounded-lg m-5'>
                    <div className='flex md:max-w-[350px] md:max-h-[300]'>
                        <img className='flex w-full justify-center rounded-t-lg md:rounded-tr-none md:rounded-l-lg' src={cbir} alt="/cbir" />
                    </div>

                    <div className='flex-col p-5'>
                        <div className='font-bold text-xl text-[#00FFB9] mb-2'>Content Based Image Retrieval</div>

                        <div className='flex my-5'>
                            <p className='text-black text-base'>
                                Designed and developed a Python program that converts a black and white image into a barcode using angled projections. 
                                The progam allows the user to search for the most similar barcode with an accuracy of greater than 80%.
                            </p>
                        </div>

                        <div className='font-bold text-sm text-[#00FFB9] mb-2'>Python, Pillow, Redux, VS-Code</div>
                                                
                        <div className='items-center text-sm pt-2'>
                            <a href="https://github.com/Hxnzo/Content-Based-Image-Retrieval">
                                <AiOutlineGithub size={ 35 } className='text-black' />
                            </a>
                        </div>
                    </div>
                </div> 
            </div> */}
        </div>
    );
};

export default Projects;