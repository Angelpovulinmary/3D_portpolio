
import { motion } from "framer-motion"
import images from '../assets/imr.avif'// Adjust the path as necessary
const HeroSection = () => {
  return (
    <section className=" h-screen bg-gradient-to-b from-purple-800 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 overflow-hidden">
  {/*left section */}
  <div className="z-40 xl:mb-0 mb-[20%]"> 
    

<motion.h1
initial={{opacity:0,y:80}}
animate={{opacity:1,y:0}}
transition={{
type:"spring",
stiffness:40,
damping:19,
delay:1.3,
duration:1.5,


}}

 className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6" >Building Fast <br/> reliable Results</motion.h1>
 
 
 <motion.p 
 initial={{opacity:0,y:80}}
animate={{opacity:1,y:0}}
transition={{
type:"spring",
stiffness:40,
damping:19,
delay:1.8,
duration:1.5,


}}
 
 className="text-xl md:text-1xl lg:text-2xl text-purple-300 max-w-2xl ">I'm an aspiring JavaScript developer passionate about building interactive and user-friendly web applications.I enjoy solving real-world problems through code and love bringing creative ideas to life on the web</motion.p>
  </div>
{/* right section*/}
<div>
  <motion.div 
  initial={{opacity:0,y:80}}
  animate={{opacity:1,y:0}}
  transition={{
    type:"spring",
    stiffness:40,
    damping:19,
    delay:1.8,
    duration:1.5,
  }}
  className="relative md:mt-15 mb-5 md:mb-0 lg:mb-0 xl:mb-0">
   <img src={images} className="w-[250px] h-[250px] md:w-[250px] md:h-[200px] lg:w-[450px] lg:h-[450px]  "/>
  </motion.div>
</div>
</section>
)

}

export default HeroSection