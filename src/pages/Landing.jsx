import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
const Landing = () => {
  const [hover, setHover] = useState(2);
  setTimeout(() => {
    setHover(1)
  }, 800);
  const navigate = useNavigate();
  return (
    <div className='flex z-50'>
        {/* <img className='-z-20 w-screen absolute top-0' src="/background-1.avif" alt="" /> */}
        <div className='w-1/2 flex h-screen'>
          <motion.img
          className='w-80'
          onHoverStart={()=>{setHover(1)}}
          onHoverEnd={()=>{setHover(3)}}
          initial={{y:200, opacity:0}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.8, type:'spring', stiffness:200}}
          src={`/peeps${hover}.png`} alt="" />

          <motion.img
          className='w-80'
          onHoverStart={()=>{setHover(4)}}
          onHoverEnd={()=>{setHover(2)}}
          initial={{y:200, opacity:0}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.8, delay:0.5, type:'spring', stiffness:200}}
          src={`/peeps${hover}.png`} alt="" />
        </div>
        <section className='w-1/2 p-5 gap-5 flex justify-center flex-col h-screen'>
            <motion.h1
            whileHover={{backgroundColor: '#874170', color: '#58cbb8'}}
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.3}}
            className='text-[130px] relative flex rounded-xl shadow-text color-4 px-4 shadow-solid text-[#874170] -tracking-widest font-bold'>
              Stoop scoop
              
            </motion.h1>
            <motion.h1
              whileHover={{backgroundColor: '#58cbb8', color: '#d1ff91'}}
              animate={{opacity:1, y:0}}
              initial={{opacity:0,y:50}}
              transition={{duration:0.8, type:'spring', stiffness:200}}
              className='text-[120px] rounded-xl text-shadow color-1 px-4 shadow-solid text-[#58cbb8] poppins -tracking-widest font-semibold'>
                Brooklyn, NY
            </motion.h1>

            <div className='flex flex-col relative'>
                <motion.button 
                  whileHover={{x:-30}}
                  initial={{y:-10}}
                  animate={{y:0}}
                  onClick={()=>{navigate('/events')}}
                  transition={{duration:0.2,type:'spring', delay:0.4,  repeat:Infinity, repeatType:'reverse'}}
                  className=' hover:text-pink-500 hover:bg-white transition-all duration-200 text-3xl rounded-xl text-white font-semibold right-0 bottom-5 color-2 shadow-solid p-5'>
                  Upcoming Events
                </motion.button>
            </div>
        </section>
    </div>
  )
}

export default Landing
