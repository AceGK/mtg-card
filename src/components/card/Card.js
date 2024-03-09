import styles from "./Card.module.scss";
// https://mana.andrewgioia.com/icons.html

export default function Card({ card }) {
  return (
    <article className={styles.card}>
      <div className={styles.background} />
      <div className={styles.cardBody}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Mugen</h1>
            <div className={styles.mana}>mana icons</div>
          </div>
        </header>
        <div className={styles.image}>
          <img src="/images/texture.jpg" alt="card artwork" width="auto" />
        </div>
        <header className={styles.type}>
          <div>
            <h2 className={styles.typeLine}>Creature — Cat</h2>
            <div className={styles.set}>set icon</div>
          </div>
        </header>
        <div className={styles.body}>
          <p className={styles.description}>
            When Mugen enters the battlefield, each player discards all the cards in their hand.
          </p>
          <div className={styles.description}>
            Sacrafice a Food: Return Mugen to the top of its owner's library
          </div>
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
