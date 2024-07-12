import { motion, useDragControls } from 'framer-motion'
import React from 'react'
import Imgdrag from '../components/Imgdrag';


const Page3 = () => {
    const controls = useDragControls();
    function startDrag(){
        controls.start({x: 0, y: 0, scale: 1.4})
    }
  return (
    <div className='h-screen bg-white flex flex-col z-20'>
        <div className=''>
            <h1 className='text-8xl drop-shadow-md shadow-inner p-5 text-center text-[#58cbb8] font-bold'>Play Around !</h1>
        </div>
        <section onPointerDown={startDrag} className='flex flex-wrap gap-5 overflow-hidden p-10 h-screen'>                
            <Imgdrag name={'shirt'} />
            <Imgdrag name={'pants'} />
            <Imgdrag name={'shirt'} />
            <Imgdrag name={'shirt'} />
            <Imgdrag name={'shirt'} />
            <Imgdrag name={'pants'} />
            <Imgdrag name={'shirt'} />
            <Imgdrag name={'pants'} />
            <Imgdrag name={'shirt'} />
            <Imgdrag name={'pants'} />
        </section>
    </div>
  )
}

export default Page3
