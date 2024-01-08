import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import PinkButton from '../../ui/pink-button/PinkButton.jsx';
import styles from '../../ui/form/form.module.css';

const Login = ({ onSignIn }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    for (const user of users) {
      if (!user || data.email !== user.email) {
        setErrorMessage('User with this email does not exist');
      } else if (!user || data.password !== user.password) {
        setErrorMessage('Incorrect password');
      } else if (user && data.email === user.email && data.password === user.password) {
        onSignIn(user);
        setErrorMessage('');
        navigate('/');
        return;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>Sign In</h2>
      <label htmlFor="email">Email</label>
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
            message: 'Email is not valid',
          },
        })}
      />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}

      <label htmlFor="password">Password</label>
      <input
        {...register('password', {
          required: 'Password is required',
        })}
      />
      {errors.password && <p className={styles.error}>{errors.password.message}</p>}

      {errorMessage && <p className={styles.error}>{errorMessage}</p>}

      <PinkButton text="Sign in" />

      <p>
        No account yet?{' '}
        <b>
          <Link to="/signup">Sign up</Link>
        </b>
      </p>
    </form>
  );
};

export default Login;
