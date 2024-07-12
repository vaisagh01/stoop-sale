import React from 'react'
import { motion } from 'framer-motion'
const Page2 = () => {
  return (
    <div className=' flex' >
        <section className='w-1/2 flex gap-5 flex-col p-10 h-screen'>
        <motion.h1
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.8, type:'spring', stiffness:200}}
            className='text-[80px] text-shadow color-4 w-fit px-4 shadow-solid text-[#874170] -tracking-widest font-bold'>
              What even is a stoop sale??
            </motion.h1>
            <motion.h1
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.8, delay:0.2, type:'spring', stiffness:200}}
            className='text-[90px] text-shadow color-3 w-fit px-4 shadow-solid text-red-500 poppins -tracking-widest font-semibold'>
              Basically a garage sale but better!!!
            </motion.h1>

        </section>
        <div className='w-1/2 p-10 overflow-hidden'>
            <img src="/44153.jpg" alt="" />
        </div>
    </div>
  )
}

export default Page2
