import React from 'react'
import fastCartLogo from '../../public/fastCartLogo.png'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='backdrop-blur-lg fixed top-0 left-0 right-0' >
        <div className='max-w-7xl flex m-auto p-5 justify-between items-center'>
            <img src={fastCartLogo} alt="logo" width={150} />
            <ul className='flex gap-5 items-center *:border-b-2 '>
                <NavLink className={({isActive}) => (isActive ? "border-b-[#B3B3B3]" : "border-b-[#00000000]")} to={'/'}>Home</NavLink>
                <NavLink className={({isActive}) => (isActive ? "border-b-[#B3B3B3]" : "border-b-[#00000000]")} to={'contact'}>Contact</NavLink>
                <NavLink className={({isActive}) => (isActive ? "border-b-[#B3B3B3]" : "border-b-[#00000000]")} to={'about'}>About</NavLink>
                <NavLink className={({isActive}) => (isActive ? "border-b-[#B3B3B3]" : "border-b-[#00000000]")} to={'signUp'}>Sign Up</NavLink>
            </ul>
        </div>
    </nav>
  )
}

export default Nav