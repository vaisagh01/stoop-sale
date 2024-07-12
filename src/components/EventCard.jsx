import React, { useState } from 'react'
import { motion } from 'framer-motion'
const EventCard = (props) => {
    const [showCard, setShowCard] = useState(false)
  return (
    <motion.div
            animate={{opacity:1, y:0}}
            initial={{opacity:0,y:50}}
            transition={{duration:0.8, type:'spring', stiffness:200}}
            className='text-[50px] tracking-normal shadow-solid shadow-text text-shadow color-3 p-5 flex justify-between px-4 text-blue-500 poppins font-semibold'
            >
              <p className='w-full px-5'>{props.title}</p>
              <p className='text-xl w-full tracking-normal text-fuchsia-600'>Explore a curated selection of vintage clothing from the 60s, 70s, and 80s. Perfect for fashion enthusiasts and collectors! Don't miss out on unique pieces and great deals.</p>
              <motion.button
                whileHover={{y:-10}}
                animate={{opacity:1, y:0}}
                initial={{opacity:0,y:50}}
                onClick={()=>{setShowCard(true)}}
                transition={{duration:0.8, type:'spring', stiffness:200}}
                className='text-[20px] shadow-text text-end w-full px-4 text-red-500 poppins -tracking-widest font-semibold'>
              See Details
            </motion.button>

        {
            showCard && 
            <motion.div 
            initial={{y:-10}}
            animate={{y:0}}
            transition={{duration:0.2,type:'spring'}}
            className='fixed flex p-5 shadow-solid gap-5 z-50 top-2 left-2 w-[96vw] color-1'>
                <motion.button 
                  whileHover={{x:-10}}
                  initial={{y:-10}}
                  animate={{y:0}}
                  onClick={()=>{setShowCard(false)}}
                  transition={{duration:0.2,type:'spring'}}
                  className=' hover:text-pink-500 absolute top-0 w-fit m-4 hover:bg-white transition-all duration-200 text-3xl rounded-xl text-white font-semibold right-0 color-4 shadow-solid p-5'>
                  CLOSE
                </motion.button>
                <section className='flex flex-col gap-5'>
                    <motion.h1
                        animate={{opacity:1, y:0}}
                        initial={{opacity:0,y:50}}
                        transition={{duration:0.8, type:'spring', stiffness:200}}
                        className='text-[40px] text-shadow color-3 w-fit px-4 shadow-solid text-[#874170] -tracking-widest font-bold'>
                        {props.title}
                    </motion.h1>
                    <div id="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.677953177146!2d-73.9965256!3d40.681064299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a59afc74fe1%3A0x3dc42dbcd7f6d772!2sCourt%20St%2C%20Brooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1720768455758!5m2!1sen!2sin" width="700" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>
                <section className='mt-16  flex flex-col gap-5'>
                    <motion.h1
                        animate={{opacity:1, y:0}}
                        initial={{opacity:0,y:50}}
                        transition={{duration:0.8, type:'spring', stiffness:200}}
                        className='text-[40px] text-shadow color-1 w-fit px-4 shadow-solid text-[#874170] -tracking-widest font-bold'>
                        {props.location}
                    </motion.h1>
                    
                    <motion.h1
                        animate={{opacity:1, y:0}}
                        initial={{opacity:0,y:50}}
                        transition={{duration:0.8, type:'spring', stiffness:200}}
                        className='text-[40px] text-shadow color-1 w-fit px-4 shadow-solid text-[#874170] -tracking-widest font-bold'>
                        {props.date}
                    </motion.h1>

                    <motion.h1
                        animate={{opacity:1, y:0}}
                        initial={{opacity:0,y:50}}
                        transition={{duration:0.8, type:'spring', stiffness:200}}
                        className='text-[40px] text-shadow color-1 w-fit px-4 shadow-solid text-[#874170] -tracking-widest font-bold'>
                        {props.time}
                    </motion.h1>
                </section>
            </motion.div>
        }
    </motion.div>
  )
}

export default EventCard
