import Head from 'next/head';
import classes from '@/app/resume/page.module.css';
export default function Resume()  {
    return (
      <>
      <Head>
          <title>
            Strona cv
          </title>
          <meta
            name="description"
            content="Strona cv o front-end developerze. Informacje kontaktowe."
          />
          <meta
            name="keywords"
            content="Wiktoria Osóbka-cv" 
          />
          <meta property="og:title" content="CV-WEB" />
          <meta property="og:url" content="https://cv-web-alpha-woad.vercel.app/" />
          <meta property="og:image" content="https://cv-web-alpha-woad.vercel.app/1.jpg/"/>
          <meta property="og:description" content="Strona cv o front-end developerze. Informacje kontaktowe." />
        </Head>
      <div className={classes.cta}>
        Resume
      </div>
      <div className={classes.section}>
        <h1>Resume</h1>
        <p>Doświadczenie zawodowe</p>
    </div>
    <header className={classes.header}>
      <div className={classes.section}>
        <h2>Edukacja </h2> 
        <div className={classes.blok}>
            <div className={classes.ct}>
                2021-teraz
            </div>
            <h3>Technikum Elektroniczne</h3>
            <hr/>
            <p>Zdobywanie wiedzy praktycznej wykorzystywanej w przyszłości.</p>
            <br/>
        </div> 
      </div>
      
        <div className={classes.section}>
        <h2>Doświadczenie </h2> 
        <div className={classes.blok}>
            <div className={classes.ct}>
                26.02 - 26.03
            </div>
            <h3>Paktyki zawodowe</h3>
            <hr/>
            <p>Zdobywanie wiedzy praktycznej wykorzystywanej w przyszłości.</p>
            <br/>
        </div> 
        <br/>
    </div>
    
    </header>
    <div className={classes.section}>
        <h3>Moje umiejętności</h3>
        <ul>
            <li>HTML5<br/>
            <progress max="100" value="90"></progress>
            </li>
            <li>CSS<br/>
            <progress max="100" value="85"></progress>
            </li>
            <li>PHP<br/>
            <progress max="100" value="75"></progress>
            </li>
            <li>JAVASCRIPT<br/>
            <progress max="100" value="80"></progress>
            </li>
            <li>NEXT.JS<br/>
            <progress max="100" value="60"></progress>
            </li>
        </ul>
        <br/>
    </div>

        </>
        )
    }