import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import EventCard from '../components/EventCard';
const Events = () => {
    const navigate = useNavigate();
  return (
    <div>
        <motion.button 
                  whileHover={{x:-10}}
                  initial={{y:-10}}
                  animate={{y:0}}
                  onClick={()=>{navigate('/')}}
                  transition={{duration:0.2,type:'spring',  repeat:Infinity, repeatType:'reverse'}}
                  className=' hover:text-pink-500 w-fit m-4 hover:bg-white transition-all duration-200 text-3xl rounded-xl text-white font-semibold right-0 bottom-5 color-4 shadow-solid p-5'>
                  GO BACK
        </motion.button>
        <div className='h-screen w-screen cursor-pointer p-5 gap-2 flex'>
            <img className='-z-20 w-screen absolute top-0' src="/background-1.avif" alt="" />
            <section className='flex gap-5 flex-col h-screen'>
                <EventCard 
                    title={"Vintage Clothing Pop-Up"} 
                    location={"2nd Pl. and Court St, Brooklyn, NY"}
                    desc={'Explore a curated selection of vintage clothing from the 60s, 70s, and 80s. Perfect for fashion enthusiasts and collectors! Dont miss out on unique pieces and great deals'}
                    date={" August 15, 2024"} 
                    time= {"11:00 AM - 5:00 PM"}/>
                <EventCard 
                    title={"Handmade Crafts Fair"}
                    location={"2nd Pl. and Court St, Brooklyn, NY"}
                    desc={'Support local artisans and discover a variety of handmade crafts including jewelry, pottery, and home decor. Perfect for finding unique gifts and adding a touch of creativity to your home.'}
                    date={" September 10, 2024"} 
                    time= {"10:00 AM - 3:00 PM"}
                />
                <EventCard 
                    title={"Book and Music Swap"}
                    location={"2nd Pl. and Court St, Brooklyn, NY"}
                    desc={'Bring your gently used books and music (vinyl, CDs, etc.) to swap with fellow enthusiasts. A great way to refresh your collection and discover new favorites. All genres welcome!'}
                    date={" October 5, 2024"} 
                    time= {"12:00 PM - 4:00 PM"}/>
            </section>

        </div>
    </div>
  )
}

export default Events
