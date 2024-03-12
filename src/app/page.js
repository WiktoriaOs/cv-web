
import MainHeader from '@/components/main-header';
import classes from './page.module.css';


export default function Home() {
  return (
    <>
    <header className={classes.header}/>
    
    
    <main>
    <div className={classes.section}>
      <h1>Moja strona</h1>
      <h4>Jestem frontend developerem.</h4>
    </div>
    </main>
    </>
  );
}
