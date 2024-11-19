import { motion } from 'framer-motion';
import logo1 from './dv.svg'; // Adjust the path to your logo image
import logo2 from './os.svg'; // Adjust the path to your logo image
import bckHero from './bck.jpg'; // Import the background image

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center items-center text-white px-4 py-8" 
      style={{
        backgroundImage: `url(${bckHero})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay with blur and dark bluish filter */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-transparent to-black opacity-70"></div>

      {/* Main Content */}
      <div 
        className="relative w-full flex flex-col justify-center items-center space-y-8 sm:space-y-10 lg:space-y-12 z-10"
      >
        {/* Logos and "X" symbol */}
        <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 lg:space-x-10">
          {/* Left Logo */}
          <motion.img 
            src={logo1} 
            alt="Logo 1" 
            className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain drop-shadow-lg"
            initial={{ opacity: 0, x: -100 }}  
            animate={{ opacity: 1, x: 0 }}     
            transition={{ duration: 1 }}       
          />
          
          {/* X Symbol */}
          <motion.span 
            className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md"
            initial={{ scale: 0 }}             
            animate={{ scale: [1.2, 0.9, 1] }}  
            transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}  
          >
            X
          </motion.span>
          
          {/* Right Logo */}
          <motion.img 
            src={logo2} 
            alt="Logo 2" 
            className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain drop-shadow-lg"
            initial={{ opacity: 0, x: 100 }}   
            animate={{ opacity: 1, x: 0 }}     
            transition={{ duration: 1 }}       
          />
        </div>

        {/* Title */}
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}  
          animate={{ opacity: 1, y: 0 }}    
          transition={{ duration: 1 }}      
        >
          DataVerse & Open Source Events
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 px-6 sm:px-8 lg:px-12 text-center max-w-3xl"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experience the synergy of innovation as Open Source Days collaborates with DataVerse. Together, we bring you an event that celebrates open-source technology and data management.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
