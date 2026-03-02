import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <h1>HSTU Research Society</h1>
        <p>Fostering a vibrant research culture among students at HSTU.</p>
      </section>
      <section className={styles.latestNews}>
        <div className={styles.container}>
          <h2>Latest News</h2>
          <div className={styles.newsGrid}>
            <div className={styles.newsCard}>
              <h3>News Title 1</h3>
              <p>A brief description of the news article.</p>
            </div>
            <div className={styles.newsCard}>
              <h3>News Title 2</h3>
              <p>A brief description of the news article.</p>
            </div>
            <div className={styles.newsCard}>
              <h3>News Title 3</h3>
              <p>A brief description of the news article.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
