import Link from "next/link";
import classes from './page.module.css';

export default function Home() {
  return (
    <>
    <header className={classes.header}>
        <Link className={classes.logo} href='/'>
            
            Wiktoria
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href='/'>Strona główna</Link>
                </li>
                <li>
                <Link href='/about'>O mnie</Link>
                </li>
            </ul>
        </nav>
    </header>
    <div className={classes.section}>
      <h1>O mnie</h1>
      <p>Pisanie strony za pomocą NEXT.js</p>
    </div>
    </>
  );
}
