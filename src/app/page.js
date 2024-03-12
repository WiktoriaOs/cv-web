import Button from '@/components/button';
import classes from './page.module.css';


export default function Home() {
  return (
    <>
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
