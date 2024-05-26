// pages/index.js

import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container} style={{ backgroundImage: "url('/styles/Photos/solentphoto.jpg')", backgroundSize: "cover" }}>
      <Navbar />
      <h1 className={styles.title}>Welcome to My Solent E-Shop</h1>
      <p className={styles.description}>Browse our collection of products...</p>
      <div className={styles.centerButton}>
        <Link href="/products" legacyBehavior>
          <a className={styles.shopButton}>Shop Now</a>
        </Link>
      </div>
    </div>
  );
}
