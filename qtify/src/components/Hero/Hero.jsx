import React from "react";
import styles from "../Hero/Hero.module.css"
import Hearphones from '../../assets/headphones.png'


const Hero=()=>{
    return(
        <section className={styles.heroSection}>
            <div className={styles.textSection}>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <img src={Hearphones} alt="" className={styles.heroImg} />
        </section>
    )
}

export default Hero