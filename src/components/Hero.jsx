import image from "/src/assets/Shruti_LinkedIn_Profile.jpeg"
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-5 text-white">

        <motion.div
          initial={{y: -50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.2}}>
          <img src={image} alt="" className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover rounded-full cursor-pointer shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600"/>
        </motion.div>

        <motion.div 
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.2}}
        
          className="flex max-w-[600px] flex-col items-center justify-center gap-2 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl font-light md:text-6xl">Shruti Rawat</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-xl md:text-3xl">Software Enthusiast</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">I'm a passionate software enthusiast who loves turning ideas into real digital experiences. With a curious mind and a constant desire to learn, I enjoy building creative and meaningful projects that make a difference.</p>

          <a
            href="/Shruti.Rawat_Resume.pdf"
            download
            className="mt-2 px-3 py-2 rounded-md bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero