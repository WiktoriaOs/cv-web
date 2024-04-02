import Image from 'next/image';
import classes from './page.module.css';
import Button from "@/components/button";
import logoImg from "@/app/about/images/1.jpg";
import Head from 'next/head';
import * as contentful from 'contentful';

async function getData(){
  const client=contentful.createClient({
    space:process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const res=await client.getEntries({content_type: 'about'})

  return res
}

export default async function About({})  {
  const aboutPage= await getData()
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
      O mnie
    </div>
    <div className={classes.section}>
      <h1>O mnie</h1>
      <p>Pisanie strony za pomocą NEXT.js</p>
    </div>
    <header className={classes.header}>
      <div className={classes.section}>

        <Image src={logoImg} className={classes.img}/>    
      </div>
      <div className={classes.main}>
        <div className={classes.center}>
        {aboutPage.map(about=> (
        <>
        <h3 key={about.sys.id}>{about.fields.title}</h3>
        <p key={about.sys.id}>{about.fields.opis}</p>
        </>
      ))}
          <hr/>
          <table>
            <tr>
              <th>Name:</th>
              <td>Wiktoria</td>
            </tr>
            <tr>
              <th>Data urodzenia: </th>
              <td>31 pażdziernik 2006</td>
            </tr>
            <tr>
              <th>Adres:</th>
              <td>Radom</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>wiktoria.osobka@wp.pl</td>
            </tr>
            <tr>
              <th>Telefon:</th>
              <td>+48 000 000 000</td>
            </tr>
          </table>
          <br/>
          <Button/>
        </div>
      </div>
    </header>
    </>
  );
}
