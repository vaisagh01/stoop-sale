import React from 'react'
import { motion, useDragControls } from 'framer-motion'
const Imgdrag = (props) => {
    const controls = useDragControls();
  return (
    <motion.img
        drag
        dragControls={controls}
        className='w-52 h-60' src={`/${props.name}.jpg`} alt="" />
    
  )
}

export default Imgdrag
