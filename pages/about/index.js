import React, { useState } from 'react';







// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'IBM Award - tnsdc',
        stage: '2023',
      },
      
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Fresher',
        stage: '2020 - 2024',
      },
    
    ],
  },
  {
    title: 'credentials',
    info: [
     
      {
        title: 'Computer Science Engineering - Jai Shriram Engineering College',
        stage: '2020-2024',
      },
      {
        title: 'Introduction To Cloud  - IBM',
        stage: '2023',
      },
      {
        title: 'Certified Python - Great Learning Academy',
        stage: '2023',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn}  from '../../variants';

// counter
import CountUp from 'react-countup' 


const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    {/* avatar img */}
    <motion.div 
    variants={fadeIn('right',0.2)} 
    initial= "hidden" 
    animate="show" 
    exit="hidden"
    className='hidden xl:flex absolute bottom-0 -left-[295px] w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32
    lg:bottom-0 lg:right-[15%]'>
      <Avatar />
    </motion.div>
  
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row 
    gap-x-6'>
      {/* text */}

      < div className='flex-1 flex flex-col justify-center'>
    
          <motion.h2  
          varients={fadeIn('right',0.2)} 
          initial= "hidden" 
          animate="show" 
          exit="hidden"
          className='h2'>About <span className='text-accent'>Me</span></motion.h2>
          <motion.p 
          variants={fadeIn('right',0.4)} 
          initial= "hidden" 
          animate="show" 
          exit="hidden"
          className='max-w-[500px] mx-auto xl:mx-0 md-6 xl:mb-12 px-2 xl:px-0'>Hai I am a Student and I'm enthusiastic about creating visually 
     		appealing websites and enhancing user experiences.
     		Currently sharpening my skills</motion.p>
        
        { /* counters */}
        <motion.div 
        variants={fadeIn('right',0.6)} 
        initial= "hidden" 
        animate="show" 
        exit="hidden"
        className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
          <div className='flex flex-1 xl:gap-x-6'>
            {/* experience */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
          <div className='text-2xl xl:4xl font-extrabold text-accent mb-2'>
             {/*<CountUp start={0} end={10} duration={5} />+*/}None
          </div>
          <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
           <div> Years of experience
            </div>
          </div>
          
          </div>
          {/*client*/}
          <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
          <div className='text-2xl xl:4xl font-extrabold text-accent mb-2'>
             <CountUp start={0} end={20} duration={5} />
          </div>
          <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
           <div> Age
            </div>
          </div>
          
          </div>
          <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
          <div className='text-2xl xl:4xl font-extrabold text-accent mb-2'>
             <CountUp start={0} end={5} duration={5} />+
          </div>
          <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
           <div> My Projects
            </div>
          </div>
          
          </div>

        </div>
      </motion.div>
      </div>
       
      
     
      
      {/* info */}
      <motion.div 
      variants={fadeIn('left',0.4)} 
      initial= "hidden" 
      animate="show" 
      exit="hidden"
      className='flex flex-col w-full xl:max-w-[48%] h-[350px]'>
       <div className='flex gap-x-4  xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex)=>{
            return (
              <div key={itemIndex} 
              className={`${index === itemIndex && 'text-accent after:w-[100] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
              >
                {item.title}
                </div>
            );
          }
          )}
        </div>
        <div className=' py-2 xl:py-6 flex flex-col gap-y-2 xlgap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex)=> {
            return (
            <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 item-center text-white/60'>
              {/* title */}
              <div className='font-light mb-2 md:mb-0'>{item.title}</div>
              <div className='hidden md:flex'></div>
              <div>{item.stage}</div>
              <div className='flex gap-x-4'>
              {/* icons */}
              {item.icons?.map((icon, itemIndex)=>{
                return<div className='text-2xl text-white'>{icon}</div>

          })}
          </div>

            </div>
            );
          })}
        </div>
      </motion.div>
  
  </div>
  </div>
  );
};

export default About;
