
// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,

}from 'react-icons/rx';

//service data
export const serviceData = [
{
  icon: <RxCrop />,
  title: 'Edite',
  description: 'Front-end development focuses on buildingthe user interface and user experience of websites and applications',
},
{
  icon: <RxDesktop />,
  title: 'Design',
  description: 'Front-end development focuses on buildingthe user interface and user experience of websites and applications',
},
{
  icon: <RxPencil2 />,
  title: 'Development',
  description: 'Front-end development focuses on buildingthe user interface and user experience of websites and applications',
},
{
  icon: <RxReader/>,
  title: 'Copywriting',
  description: 'Front-end development focuses on buildingthe user interface and user experience of websites and applications',
},
{
  icon: <RxRocket />,
  title: 'SED',
  description: 'Front-end development focuses on buildingthe user interface and user experience of websites and applications',
},

];

//components
import ServicesSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';





const Services = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        { /*text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 
          variants={fadeIn('up',0.3)} 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          className='h2 xl:mt-8'>Kno<span className='text-accent'>wn</span></motion.h2>
          <motion.p 
           variants={fadeIn('up',0.4)} 
           initial="hidden" 
           animate="show" 
           exit="hidden"
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>My skills in HTML, CSS, 
     	     JavaScript , Reactjs and TailwindCss to craft engaging web interfaces.</motion.p>
        </div>
        <motion.div 
         variants={fadeIn('up',0.6)} 
         initial="hidden" 
         animate="show" 
         exit="hidden"
        className='w-full xl:max-w-[65%]'>
        {/* slider */ }
        <ServicesSlider/>
        </motion.div>
        </div>
      </div>
      <Bulb />
      
    </div>


  );
};

export default Services;
