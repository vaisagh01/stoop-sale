import React, { useRef } from 'react'
import Landing from './Landing'
import Page2 from './Page2'
import Page3 from './Page3'
import { motion, useScroll, useTransform } from 'framer-motion'
import Banner from '../components/Banner'

const Home = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target:container,
      offset: ['start end','end start']
    });
    const title = useTransform(scrollYProgress, [0,1],[400,-400])
    const banner = useTransform(scrollYProgress, [0,1],[100,-1000])
  return (
    <div ref={container} className='relative'>
        <div>
          <Landing />
        </div>
        <motion.div 
          style={{x:banner}}
          className='flex my-5'>
            <Banner /><Banner /><Banner /><Banner /><Banner /><Banner />
            <Banner /><Banner /><Banner /><Banner /><Banner /><Banner />
            <Banner /><Banner /><Banner /><Banner /><Banner /><Banner />
        </motion.div>
        <motion.div style={{y:title}}>
          <Page2 />
        </motion.div>
    </div>
  )
}

export default Home
