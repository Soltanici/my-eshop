// components/Navbar.js

import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="/">Home</Link></li>
        <li className={styles.navItem}><Link href="/login">Login</Link></li>
        <li className={styles.navItem}><Link href="/register">Register</Link></li>
        <li className={styles.navItem}><Link href="/products">Products</Link></li>
        <li className={styles.navItem}><Link href="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
