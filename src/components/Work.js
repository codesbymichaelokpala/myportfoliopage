import React from 'react';
//motio
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';
//img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/**text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work
              </h2>
              <p className='max-w-sm mb-16'>
              I'm a Freelance Front-end Developer with over 5 years of
              experience. I'm a Freelance Front-end Developer with over 5 years of
              experience.
              </p>
              <a href='https://github.com/codesbymichaelokpala?tab=repositories'>
              <button className='btn btn-sm'>View all projects</button>
              </a>
              
            </div>
            {/**images */}
            <div className='group relative overflow-hidden border-2 border-white/50 
            rounded-xl'>
              {/**overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300'></div>
              {/**img */}
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Img1} 
              alt='' />
              {/**pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
              transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
                </div>
              {/**title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-12
              transition-all duration-700 z-50' >
                <span className='text-3xl text-white'>Project Title</span>
              </div>
              </div>
        </motion.div>

        <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1 flex flex-col gap-y-10 '>
            {/**image 2 */}
            <div className='group relative overflow-hidden border-2 border-white/50 
            rounded-xl'>
              {/**overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300'></div>
              {/**img */}
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Img2} 
              alt='' />
              {/**pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
              transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
                </div>
              {/**title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-12
              transition-all duration-700 z-50' >
                <span className='text-3xl text-white'>Project Title</span>
              </div>
              </div>
              {/**image 3 */}
              <div className='group relative overflow-hidden border-2 border-white/50 
            rounded-xl'>
              {/**overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300'></div>
              {/**img */}
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Img3} 
              alt='' />
              {/**pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
              transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
                </div>
              {/**title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-12
              transition-all duration-700 z-50' >
                <span className='text-3xl text-white'>Project Title</span>
              </div>
              </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Work;
