import Link from "next/link";
import classes from "./button.module.css";

export default ()=>{
    return(
        <div >
        <Link href="/about" >
            <div className={classes.button}>
                Zobacz cv
            </div>
        </Link>
        </div>
    );
}