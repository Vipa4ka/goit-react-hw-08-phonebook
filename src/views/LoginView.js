import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from '../redux/auth';
import styles from './views.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.viewContainer}>
      <form
        onSubmit={handleSubmit}
        className={styles.viewForm}
        autoComplete="off"
      >
        <label className={styles.viewLabel}>
          Email
          <input
            className={styles.viewInput}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.viewLabel}>
          Password
          <input
            className={styles.viewInput}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}
