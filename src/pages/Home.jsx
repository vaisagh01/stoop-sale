import React, { useRef } from 'react'
import Landing from './Landing'
import Page2 from './Page2'
import Page3 from './Page3'
import { motion, useScroll, useTransform } from 'framer-motion'
import Banner from '../components/Banner'
import Page4 from './Page4'

const Home = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target:container,
      offset: ['start end','end start']
    });
    const section1 = useTransform(scrollYProgress, [0,1],[200,-500])
    const section2 = useTransform(scrollYProgress, [0,1],[200,-200])
    const section3 = useTransform(scrollYProgress, [0,1],[100,-500])
    const banner = useTransform(scrollYProgress, [0,1],[100,-1000])
  return (
    <div ref={container} className='relative overflow-hidden'>
        <img className='-z-20 w-screen fixed top-0' src="/background-1.avif" alt="" />

        <div>
          <Landing />
        </div>
        <motion.div 
          style={{x:banner}}
          className='flex z-50'>
            <Banner text={"SALE!"}/><Banner text={"SALE!"}/><Banner text={"SALE!"}/>
            <Banner text={"SALE!"}/><Banner text={"SALE!"}/><Banner text={"SALE!"}/>
        </motion.div>

        <motion.div style={{y:section1}}>
          <Page2 />
        </motion.div>

        <motion.div 
          style={{x:banner}}
          className='flex z-50'>
            <Banner text={"whats happening now?"} /><Banner text={"whats happening now?"} /><Banner text={"whats happening now?"} /><Banner text={"whats happening now?"} />
            <Banner text={"whats happening now?"} /><Banner text={"whats happening now?"} /><Banner text={"whats happening now?"} /><Banner text={"whats happening now?"} />
        </motion.div>

        <motion.div style={{y:section2}}>
          <Page4 />
        </motion.div>

        <motion.div style={{y:section3}}>
          <Page3 />
        </motion.div>

    </div>
  )
}

export default Home
