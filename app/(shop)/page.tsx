import { show } from '@/lib/constants'
import { div } from 'framer-motion/client'
import React from 'react'

const page = () => {
  return (
    <div className='p-6'>
      {show.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <div className="container bg-gray-100 rounded-lg">
        <div className="left-side"></div>
        <div className="right-side">
          <img src={item.image} alt={item.name} />
          
        </div>
      </div>
      ))}
      
    </div>
  )
}

export default page
