import { motion, useDragControls } from 'framer-motion'
import React from 'react'

const Page3 = () => {
    const controls = useDragControls();
    function startDrag(){
        controls.start({x: 0, y: 0, scale: 1.4})
    }
  return (
    <div className='gap-10 h-screen flex flex-col justify-center items-center z-20'>
        <div className=''>
            <h1 className='text-6xl drop-shadow-md shadow-inner text-center text-[#874170] font-bold'>
            "Your trash, someone's treasure😉"
            </h1>
        </div>
        <div className='self-center w-screen flex flex-col gap-5 items-center'>
            <h1 className='text-[#ff7591] text-4xl font-bold'>Get in touch with us!</h1>
            <input type="text" className='w-1/2 border-4 shadow-solid border-neutral-600 rounded-xl p-10 bg-white' />
        </div>
        <section className='self-center cursor-pointer w-screen flex gap-10 justify-center'>                
            <motion.img whileHover={{y:-20}} src="/facebook.png" className='h-24' alt="" />
            <motion.img whileHover={{y:-20}}  src="/twitter.png" className='h-24' alt="" />
            <motion.img whileHover={{y:-20}}  src="/instagram.png" className='h-24' alt="" />
            <motion.img whileHover={{y:-20}}  src="/linkedin.png" className='h-24' alt="" />
        </section>
    </div>
  )
}

export default Page3
