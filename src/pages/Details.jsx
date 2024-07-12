import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
const Details = (props) => {
    const navigate = useNavigate();
  return (
    <div>
        <motion.button 
                  whileHover={{x:-10}}
                  initial={{y:-10}}
                  animate={{y:0}}
                  onClick={()=>{navigate(-1)}}
                  transition={{duration:0.2,type:'spring',  repeat:Infinity, repeatType:'reverse'}}
                  className=' hover:text-pink-500 w-fit m-4 hover:bg-white transition-all duration-200 text-3xl rounded-xl text-white font-semibold right-0 bottom-5 color-4 shadow-solid p-5'>
                  GO BACK
        </motion.button>
        <div className='h-screen flex'>
            <img className='-z-20 w-screen absolute top-0' src="/background-1.avif" alt="" />
            <section className=' flex gap-5 flex-col p-5 h-screen'>
                <motion.h1
                    animate={{opacity:1, y:0}}
                    initial={{opacity:0,y:50}}
                    transition={{duration:0.8, type:'spring', stiffness:200}}
                    className='text-[50px] text-shadow color-4 w-fit px-4 shadow-solid text-[#874170] -tracking-widest font-bold'>
                    Its happening here!
                </motion.h1>
                <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.677953177146!2d-73.9965256!3d40.681064299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a59afc74fe1%3A0x3dc42dbcd7f6d772!2sCourt%20St%2C%20Brooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1720768455758!5m2!1sen!2sin" width="700" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </section>
            <section className=' flex gap-5 flex-col p-5 h-screen'>
                <motion.h1
                    animate={{opacity:1, y:0}}
                    initial={{opacity:0,y:50}}
                    transition={{duration:0.8, type:'spring', stiffness:200}}
                    className='text-[80px] text-shadow color-3 w-fit px-4 shadow-solid text-[#874170] -tracking-widest font-bold'>
                    Vintage Clothing Pop-Up
                </motion.h1>
                
                <motion.h1
                    animate={{opacity:1, y:0}}
                    initial={{opacity:0,y:50}}
                    transition={{duration:0.8, type:'spring', stiffness:200}}
                    className='text-[40px] text-shadow color-1 w-fit px-4 shadow-solid text-[#874170] -tracking-widest font-bold'>
                    Vintage Clothing Pop-Up
                </motion.h1>
                
                <motion.h1
                    animate={{opacity:1, y:0}}
                    initial={{opacity:0,y:50}}
                    transition={{duration:0.8, type:'spring', stiffness:200}}
                    className='text-[40px] text-shadow color-2 w-fit px-4 shadow-solid text-[#874170] -tracking-widest font-bold'>
                    Vintage Clothing Pop-Up
                </motion.h1>
                

            </section>
        </div>
    </div>
  )
}

export default Details
