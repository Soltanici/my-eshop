import { useState } from 'react';
import styles from '../styles/register.module.css'; // Reusing the same styles as register.module.css
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import useRouter hook

const Login = () => {
  const router = useRouter(); // Initialize useRouter hook
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState(false); // State to track login errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', formData); // Assuming there's a login endpoint
      if (response.status === 200) {
        console.log('User authenticated successfully');
        router.push('/profile'); // Redirect to the profile page
      } else {
        console.log('Failed to authenticate user');
        setLoginError(true); // Set login error state to true
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginError(true); // Set login error state to true
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
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
        <button onClick={handleLogin} className={styles.button}>Login</button>
        {loginError && <p style={{ color: 'red' }}>Failed to login. Please register if you don't have an account.</p>}
      </div>
    </div>
  );
};

export default Login;
