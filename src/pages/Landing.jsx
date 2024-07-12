import React, { useState } from 'react'
import { motion } from 'framer-motion'
const Landing = () => {
  const [hover, setHover] = useState(2);
  setTimeout(() => {
    setHover(1)
  }, 800);
  return (
    <div className='h-screen flex z-10'>
        <img className='-z-20 w-screen absolute top-0' src="/img4.png" alt="" />
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
        <section className='w-1/2 p-5 gap-10 flex flex-col h-screen'>
            <motion.h1
            whileHover={{x:-100}}
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.8, type:'spring', stiffness:200}}
            className='text-[100px] text-shadow color-4 w-fit px-4 shadow-solid text-[#874170] -tracking-widest font-bold'>
              Chelsea & lil's
            </motion.h1>
            <motion.h1
            whileHover={{x:-100}}
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.8, delay:0.2, type:'spring', stiffness:200}}
            className='text-[120px] text-shadow color-1 w-fit px-4 shadow-solid text-[#58cbb8] poppins -tracking-widest font-semibold'>
              stoop sale @
            </motion.h1>

            <div className='flex flex-col self-end'>
                <h1 className='flex items-center text-[#ef0041] text-3xl font-bold'>
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
                </h1>
            </div>
        </section>
    </div>
  )
}

export default Landing
