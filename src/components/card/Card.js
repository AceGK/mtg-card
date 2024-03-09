import styles from "./Card.module.scss";
// https://mana.andrewgioia.com/icons.html
import localFont from 'next/font/local'
import B from "../../../public/icons/b.svg"
import M10 from "../../../public/icons/m-10-s.svg"

const plantin = localFont({ src: "../../../public/fonts/mplantin.woff" })

export default function Card({ card }) {
  return (
    <article className={`${styles.card} ${plantin.className}`}>

      <div className={styles.background} />
      <div className={styles.cardBody}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Mugen</h1>
            <div className={styles.mana}>
              <div><B /></div>
              </div>
          </div>
        </header>
        <div className={styles.image}>
          <img src="/images/texture.jpg" alt="card artwork" width="auto" />
        </div>
        <header className={styles.type}>
          <div>
            <h2 className={styles.typeLine}>Creature — Cat</h2>
            <div className={styles.set}>
              <div>
              <M10 />
              </div>
              </div>
          </div>
        </header>
        <div className={styles.body}>
          <p className={styles.description}>
            When Mugen enters the battlefield, each player discards all the cards in their hand.
          </p>
          <p className={styles.description}>
            Sacrafice a Food: Return Mugen to the top of its owner&apos;s library
          </p>
          <div className={styles.flavorText}>
            The void consumes all
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.holofoil}>
            <div className={styles.stamp}></div>
            <div className={styles.borderHide}></div>
          </div>
          <header className={styles.stats}><div>0/0</div></header>

          <div className={styles.details}>001/001 R  <br />M24 EN AceGK</div>
          <div className={styles.copywrite}>™ & © 2024 Wizards of the Toast</div>
        </footer>

      </div>
    </article>
  );
}
