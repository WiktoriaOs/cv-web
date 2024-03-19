'use client'
import classes from "./main-header.module.css";
import NavLink from "./NavLink";
import Link from "next/link";
import { useState } from "react";

export default function MainHeader (){
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    return(<>
    <header className={classes.header}>
        <nav className={classes.navbar}>
        <Link className={classes.logo} href='/'> 
            Wiktoria
        </Link>
    
    <ul className={isOpen === false ? classes.navmenu : classes.navmenu + ' ' + classes.active}>
        <li className={classes.navitem}>
            <NavLink href='/' className={isOpen === false ? classes.navlink : classes.navlink + ' ' + classes.active} onClick={openMenu}>
                Strona główna</NavLink>
        </li>
        <li className={classes.navitem}>
        <NavLink href='/about' className={isOpen === false ? classes.navlink : classes.navlink + ' ' + classes.active} onClick={openMenu}>
            O mnie</NavLink>
        </li>
    </ul>
        <button className={isOpen === false ? classes.hamburger : classes.hamburger + ' ' + classes.active} onClick={openMenu}>
                    <span className={classes.bar}></span>
                    <span className={classes.bar}></span>
                    <span className={classes.bar}></span>
                </button>
    </nav>
</header>
</>
);
}