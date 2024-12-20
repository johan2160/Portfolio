import React from 'react'

const Button = ({text}) => {
  return (
    <>
      <button type='submit' className='bg-primary  text-background w-full max-w-max px-[25px] py-3 rounded-md text-xl font-medium hover:bg-background hover:text-primary border-2 border-transparent hover:border-primary active:border-primary transition-colors active:bg-btnactive active:text-primary'>{text}</button>
    </>
  )
}

export default Button 