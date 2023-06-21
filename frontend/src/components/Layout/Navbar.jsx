import React from 'react'
import styles from '../../styles/style'
import { navItems } from '../../static/data'
import { Link } from 'react-router-dom'

const Navbar = ({active}) => {
  return (
    <div className={`${styles.noramlFlex}`}>
        {
            navItems && navItems.map((nav,index)=>(
                <div className='flex'>
                    {/* active used for showing that current nav page so make red for notice */}
                    <Link to={nav.url} className = {`${active === index+1 ? "text-[#dd1717]" :" text-[#fff]"} font-[500] px-6 cursor-pointer`}>{nav.title}</Link>
                </div>
            ))
        }

    </div>
  )
}

export default Navbar