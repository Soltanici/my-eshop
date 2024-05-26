import { useState } from 'react';
import styles from '../styles/register.module.css';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('/register', formData);
      if (response.status === 200) {
        console.log('User registered successfully');
      } else {
        console.log('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.title}>Register</h2>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={styles.inputField}
          />
        </div>
        <button onClick={handleRegister} className={styles.button}>Register</button>
      </div>
    </div>
  );
};

export default Register;
