import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
const Events = () => {
    const navigate = useNavigate();
  return (
    <div className='h-screen flex flex-col'>
        <motion.button 
                  whileHover={{x:-10}}
                  initial={{y:-10}}
                  animate={{y:0}}
                  onClick={()=>{navigate('/')}}
                  transition={{duration:0.2,type:'spring',  repeat:Infinity, repeatType:'reverse'}}
                  className=' hover:text-pink-500 w-fit m-4 hover:bg-white transition-all duration-200 text-3xl rounded-xl text-white font-semibold right-0 bottom-5 color-4 shadow-solid p-5'>
                  GO BACK
                </motion.button>
        <img className='-z-20 w-screen absolute top-0' src="/background-1.avif" alt="" />
        <section className='w-1/2 flex gap-5 flex-col p-10 h-screen'>
        
            <motion.h1
            whileHover={{y:-10}}
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.8, type:'spring', stiffness:200}}
            className='text-[90px] text-shadow color-3 w-full px-4 shadow-solid text-red-500 poppins -tracking-widest font-semibold'>
              Event 1
            </motion.h1>
            <motion.h1
            whileHover={{y:-10}}
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.8, type:'spring', stiffness:200}}
            className='text-[90px] text-shadow color-3 w-full px-4 shadow-solid text-red-500 poppins -tracking-widest font-semibold'>
              Event 2
            </motion.h1>
            <motion.h1
            whileHover={{y:-10}}
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.8, type:'spring', stiffness:200}}
            className='text-[90px] text-shadow color-3 w-full px-4 shadow-solid text-red-500 poppins -tracking-widest font-semibold'>
              Event 3
            </motion.h1>

        </section>
        
    </div>
  )
}

export default Events
