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
          content="Strona cv stworzona przeze mnie."
        />
        <meta
          name="keywords"
          content="CV" 
        />
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
