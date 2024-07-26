import Link from 'next/link'
import React from 'react'

// Next Hooks
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
    {path: '/', name:'home'},
    {path: '/about', name:'about'},
    {path: '/portfolio', name:'portfolio'},
    {path: '/pricing', name:'pricing'},
    {path: '/contact', name:'contact'},

]

const Nav = ({ containerStyle, linkStyle, underlineStyles }) => {

  const path = usePathname();
    
  return (
    <nav className={`${containerStyle}`}>
        {
            links.map((links, index ) => {
                return(
                    <Link
                    href={links.path}
                    key={index}
                    className={`capitalize ${linkStyle}`}
                    >
                        {links.path === path && (
                            <motion.span 
                            initial={{y : '-100%'}}
                            animate={{ y: 0}}
                            transition={{ type : 'tween'}}
                            layoutId='underline'
                            className={`${underlineStyles}`}
                            />
                        )}
                        {links.name}
                    </Link>
                )
            })
        }
    </nav>
  )
}

export default Nav