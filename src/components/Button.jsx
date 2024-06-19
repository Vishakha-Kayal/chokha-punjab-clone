import React from 'react'

const Button = ({name}) => {
  return (
    <div className='bg-[#B32C28] text-white rounded-lg min-w-24 h-16 text-[1.7rem] flex justify-center items-center px-4'>
        {name}
    </div>
  )
}

export default Button