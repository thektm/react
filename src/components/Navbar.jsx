import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {styles} from '../styles'
import {navLinks} from "../constants/index";
import {logo, menu, close} from '../assets'


const Navbar = () => {
    const [active, setActive] = useState('`')
    const [Toggle, setToggle] = useState(false)
    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top 0 z-20 bg-primary`}>
            <div className={'w-full flex justify-between items-center max-w-7xl mx-auto'}>
                <Link to={'/'} onClick={() => {
                    setActive("1");
                    window.scrollTo(0, 0)

                }
                } className={'flex items-center gap-2'}>
                    <img src={logo} alt="logo" className={'w-12 h-12 object-contain'}/>
                    <p className={'text-white text-[18px] font-bold cursor-pointer flex-grow'}>A L I <span
                        className={'sm:block hidden'}>| FullStack Developer</span></p>

                </Link>
                <ul className={'list-none hidden sm:flex flex-row gap-10'}>
                    {navLinks.map((navLink) => (
                        <li key={navLink.id}
                            className={`${active === navLink.title ? ('text-white') : 'text-gray-400'} hover:text-white transition-all cursor-pointer`}
                            onClick={() => {
                                setActive(navLink.title)
                            }}>
                            <a href={`#${navLink.id}`}>{navLink.title}</a>
                        </li>
                    ))}
                </ul>
                <div className={'sm:hidden flex flex-1 justify-end items-center'}>
                    <img src={!Toggle ? (menu) : (close)} alt={"menu"}
                         className={'w-[30px] h-[30px] object-contain cursor-pointer'} onClick={()=> {
                             Toggle ? (setToggle(false)) : (setToggle(true))
                    }}/>
                    <div className={`${!Toggle ? ('hidden') : (`flex`) } p-6 bg-gradient-to-r from-gray-600  absolute top-20 mx- my-2 min-w-[140px] z-10 right-0h rounded-xl`}>
                        <ul className={'list-none flex  flex-col gap-4 transition-all'}>
                            {navLinks.map((navLink) => (
                                <li key={navLink.id}
                                    className={`${active === navLink.title ? ('text-white') : 'text-gray-400'} hover:text-white transition-all cursor-pointer font-sans font-medium`}
                                    onClick={() => {
                                        setToggle(false)
                                        setActive(navLink.title);
                                    }}>
                                    <a href={`#${navLink.id}`}>{navLink.title}</a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </nav>

    )
}


export default Navbar