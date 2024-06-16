import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div className='sticky top-0 w-full bg-blue-600 h-[70px] flex flex-row items-center justify-center py-10'>
      <img src={logo} alt="logo" 
      className='w-[90px] h-[150px] ' />  
      <h4 className='text-[34px] font-poppins font-semibold'>Converse</h4>
    </div>
  )
}

export default Header
