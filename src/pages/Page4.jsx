import React from 'react'
import { motion } from 'framer-motion'
const Page4 = () => {
  return (
    <div className=' flex z-50' >
        <div className='w-1/2 p-10 overflow-hidden'>
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.677953177146!2d-73.9965256!3d40.681064299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a59afc74fe1%3A0x3dc42dbcd7f6d772!2sCourt%20St%2C%20Brooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1720768455758!5m2!1sen!2sin" width="700" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <section className='w-1/2 flex gap-5 flex-col p-10 h-screen'>
        <motion.h1
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.8, type:'spring', stiffness:200}}
            className='text-[50px] text-shadow color-4 w-fit px-4 shadow-solid text-[#874170] -tracking-widest font-bold'>
              👈Where is this happening??
            </motion.h1>
            <motion.h1
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.8, delay:0.2, type:'spring', stiffness:200}}
            className='text-[35px] flex items-center text-shadow color-3 w-fit px-4 shadow-solid text-red-500 poppins -tracking-widest font-semibold'>
            <img className='h-20' src="/location.png" alt="" />
              2nd Pl. and Court St, Brooklyn, NY
            </motion.h1>
            <motion.h1
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.8, delay:0.2, type:'spring', stiffness:200}}
            className='text-[35px] flex items-center text-shadow color-3 w-fit px-4 shadow-solid text-red-500 poppins -tracking-widest font-semibold'>
            <img className='h-20' src="/calendar.png" alt="" />
              27th June
            </motion.h1>
            <motion.h1
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.8, delay:0.2, type:'spring', stiffness:200}}
            className='text-[35px] flex items-center text-shadow color-3 w-fit px-4 shadow-solid text-red-500 poppins -tracking-widest font-semibold'>
            <img className='h-20' src="/clock.png" alt="" />
              10:00 AM to 5:00 PM
            </motion.h1>

        </section>
    </div>
  )
}

export default Page4
