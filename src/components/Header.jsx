import React from 'react'
import { useState } from 'react'

const Header = ({handleMenuClick,menuClicked}) => {
    return (
        <header className='flex justify-between font-bold text-[24px] tracking-[4px] capitalize items-center py-2'>
            <div className='text-white logo'>
                dvid-<span>arch</span>
            </div>
            <nav className='hidden md:block text-[1rem]'>
            <ul className='flex space-x-12'>
                    <li className='border-b-[.2rem] py-2 border-transparent hover:border-white active'>
                        <a href="#" className='uppercase text-white '><span className='font-bold mr-[.5em]' >00 </span>about me</a>
                    </li>
                    <li className='border-b-[.2rem] py-2 uppercase border-transparent hover:border-white'>
                        <a href="#"><span className='font-bold mr-[.5em] text-yellow' >01</span>experience</a>
                    </li>
                    <li className='border-b-[.2rem] py-2 border-transparent hover:border-white uppercase'>
                        <a href="#"><span className='font-bold mr-[.5em] text-purple'>02</span>blogs</a>
                    </li>
                    <li className='border-b-[.2rem] py-2 border-transparent hover:border-white uppercase'>
                        <a href="#"><span className='font-bold mr-[.5em] text-pink' >03</span>projects</a>
                    </li>
                </ul>
            </nav>
            <div className=" secNav text-[1rem] md:hidden">
                <div onClick={handleMenuClick} className={menuClicked && 'hidden'}>
                    <span className='block bg-white w-[50px] h-[4px] mb-1' style={{backgroundColor:'rgb(248, 29, 138)'}}></span>
                    <span className='block bg-white w-[30px] h-[4px] mb-1 ml-auto' style={{backgroundColor:'rgb(253, 181, 13)'}}></span>
                    <span className='block bg-white w-[40px] h-[4px] ml-auto' style={{backgroundColor:'rgb(103, 22, 244)'}}></span>
                </div>
                <nav className={!menuClicked && ' hidden'}>
                <ul className='flex flex-col px-2 space-y-6'>
                    <li className='border-b-[.2rem] py-2 border-transparent hover:border-white active'>
                        <a href="#" className='uppercase text-white '><span className='font-bold mr-[.5em]' >00 </span>about me</a>
                    </li>
                    <li className='border-b-[.2rem] py-2 uppercase border-transparent hover:border-white'>
                        <a href="#"><span className='font-bold mr-[.5em]' style={{color:'rgb(253, 181, 13)'}}>01</span>experience</a>
                    </li>
                    <li className='border-b-[.2rem] py-2 border-transparent hover:border-white uppercase'>
                        <a href="#"><span className='font-bold mr-[.5em]' style={{color:'rgb(103, 22, 244)'}}>02</span>blogs</a>
                    </li>
                    <li className='border-b-[.2rem] py-2 border-transparent hover:border-white uppercase'>
                        <a href="#"><span className='font-bold mr-[.5em]' style={{color:'rgb(248, 29, 138)'}}>03</span>projects</a>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
