
import Button from '@/components/button';
import classes from './page.module.css';
import Head from 'next/head';
import { createClient } from 'contentful';

async function getData(){
  const client=createClient({
    space:process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const res=await client.getEntries({content_type: 'cv-web'})

  return res
}

export default async function Home({}) {
  const homePage= await getData()
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
      {homePage.map(home=> (
        <>
        <h1 key={home.sys.id}>{home.fields.main}</h1>
        <p key={home.sys.id}>{home.fields.paragraf}</p>
        </>
      ))}
      
      
      <div className={classes.button}>
        <Button/>
      </div>

    </div>
    </main>
    </>
  );
}
