import React from 'react'

const Page2 = () => {
  return (
    <div className='h-screen flex'>
        <img className='-z-20 w-screen absolute top-0' src="/background-1.avif" alt="" />
        <section className='w-1/2 flex gap-5 flex-col p-10 h-screen'>
            <h1 className='text-[90px] -tracking-widest text-[#874170] font-bold'>What is a stoop sale??</h1>
            <h1 className='text-[50px] -tracking-wider text-[#008080] font-bold'>when people have a garage sale in front of their building / brownstone</h1>
            <div className='flex items-center'>
                <h1 className='text-4xl text-[#ef0041] font-bold'>Basically a garage sale but better!!!</h1>
            </div>
        </section>
        <div className='w-1/2 h-screen overflow-hidden'>
            <img src="/img2.jpg" alt="" />
        </div>
    </div>
  )
}

export default Page2
