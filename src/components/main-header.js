import classes from "./main-header.module.css";
import NavLink from "./NavLink";
import Link from "next/link";

export default function MainHeader (){
    return(<>
    <header className={classes.header}>
        <Link className={classes.logo} href='/'> 
            Wiktoria
        </Link>
    <nav className={classes.nav}>
    <ul>
        <li>
            <NavLink href='/'>Strona główna</NavLink>
        </li>
        <li>
        <NavLink href='/about'>O mnie</NavLink>
        </li>
    </ul>
    </nav>
</header>
</>
);
}