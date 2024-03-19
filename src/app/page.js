import Button from '@/components/button';
import classes from './page.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
        <title>
          Strona cv
        </title>
        <meta
          name="description"
          content="Strona cv o front-end developerze. Informacje kontaktowe. "
        />
        <meta
          name="keywords"
          content="Wiktoria Osóbka-cv" 
        />
        <meta property="og:title" content="CV-WEB" />
        <meta property="og:url" content="https://cv-web-alpha-woad.vercel.app/" />
        <meta property="og:image" content="https://cv-web-alpha-woad.vercel.app/1.jpg" />
        <meta property="og:description" content="Strona cv o front-end developerze. Informacje kontaktowe." />
      </Head>
    <header className={classes.header}/>
    <main>
    <div className={classes.section}>
      <h1>Witam na stronie cv</h1>
      <p>Jestem Front-end Developerem.</p>
      <div className={classes.button}>
        <Button/>
      </div>
      
    </div>
    </main>
    </>
  );
}
