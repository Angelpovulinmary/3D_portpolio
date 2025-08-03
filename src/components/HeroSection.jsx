
import { motion } from "framer-motion"
import images from '/src/assets/pic.gif'// Adjust the path as necessary


const HeroSection = () => {
  return (
    <section className=" h-screen bg-gradient-to-b from-purple-800 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 overflow-hidden gap-15">
  {/*left section */}
  <div className="z-40 xl:mb-0 mb-[20%] "> 
    

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

 className="text-5xl md:text-7xl  lg:text-8xl font-bold z-10 mb-6" >Building Fast <br/> reliable Results</motion.h1>
 
 
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
  </div >
{/* right section*/}

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{
type:"spring",
stiffness:40,

delay:1.3,
}}
className=" absolute  lg:top-0  right-0 w-full flex justify-center items-center mb-[20%] top-0 lg:w-[50%] lg:h-screen h-[60vh] md:right-[10%] lg:right-0 overflow-hidden "
>
   <img src={images} className="md:right-0"/>
</motion.div>
</section>
)
}

export default HeroSection