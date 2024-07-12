import React from 'react'

const Banner = (props) => {
  return (
    <div className='flex my-5'>
        <p className='text-5xl bg-amber-500 italic w-fit font-bold p-3'>
        {props.text}
        </p>
        <p className='text-5xl bg-black text-amber-500 italic w-fit font-bold p-3'>
        {props.text}
        </p>
    </div>
  )
}

export default Banner
