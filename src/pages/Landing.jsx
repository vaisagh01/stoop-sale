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
    <div className='h-screen flex z-10'>
        <img className='-z-20 w-screen absolute top-0' src="/background-1.avif" alt="" />
        <div className='w-1/2 flex  h-screen'>
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
        <section className='w-1/2 p-5 gap-5 flex flex-col h-screen'>
            <motion.h1
            whileHover={{backgroundColor: '#874170', color: '#58cbb8'}}
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.3}}
            className='text-[124px] relative flex rounded-xl text-shadow color-4 px-4 shadow-solid text-[#874170] -tracking-widest font-bold'>
              Chelsea & lil's
              <motion.img 
              initial={{y:-10}}
              animate={{y:0}}
              transition={{type:'spring', delay:0.2, }}
              className='absolute h-24 bottom-0 right-16'
              src="/peeps5.png" alt="" />
              <motion.img 
              initial={{y:-10}}
              animate={{y:0}}
              transition={{type:'spring', delay:0.2, }}
              className='absolute bottom-0 right-10 -scale-150 h-24'
              src="/peeps6.png" alt="" />
            </motion.h1>
            <motion.h1
            whileHover={{backgroundColor: '#58cbb8', color: '#d1ff91'}}
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.8, type:'spring', stiffness:200}}
            className='text-[120px] rounded-xl text-shadow color-1 px-4 shadow-solid text-[#58cbb8] poppins -tracking-widest font-semibold'>
              stoop sale @
            </motion.h1>

            <div className='flex flex-col relative'>
                {/* <h1 className='flex items-center text-[#ef0041] text-3xl font-bold'>
                  <motion.img
                  initial={{y:-10}}
                  animate={{y:0}}
                  transition={{type:'spring', repeat:Infinity, repeatType:'reverse'}}
                  className='w-20' src="/location.png" alt="" />
                  Carroll Gardens, Court Street & 2nd Ave
                </h1>
                <h1 className=' flex items-center text-3xl text-[#ef0041] font-bold'>
                  <motion.img
                  initial={{y:-10}}
                  animate={{y:0}}
                  transition={{type:'spring', delay:0.2, repeat:Infinity, repeatType:'reverse'}} 
                  className='w-20' src="/calendar.png" alt="" />
                  29th June
                </h1>
                <h1 className=' flex items-center text-[#ef0041] text-3xl font-bold'>
                  <motion.img 
                  initial={{y:-10}}
                  animate={{y:0}}
                  transition={{type:'spring', delay:0.4,  repeat:Infinity, repeatType:'reverse'}}
                  className='w-20' src="/clock.png" alt="" />
                  10am onwards
                </h1> */}
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
