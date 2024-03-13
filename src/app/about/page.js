
import Image from 'next/image';
import classes from './page.module.css';
import Button from "@/components/button";
import logoImg from "@/app/about/images/1.jpg";



export default () => {
  return (
    <>
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
        <h3>Jestem Wiktoria, Jestem Front-end Developerem</h3>
        <p>Front-end Developer jest odpowiedzialny za implementację 
          elementów wizualnych, które są widoczne dla użytkowników i 
          z którymi wchodzą oni w interakcję w aplikacji lub stronie 
          internetowej. Optymalizuje działanie projektów pod jak 
          najkrótsze czasy ładowania, czy np. responsywność.
        </p>
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
