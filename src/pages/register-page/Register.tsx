import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../ui/form/form.module.css';
import PinkButton from '../../ui/pink-button/PinkButton';

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const password = watch('password');

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const registeredUsers = JSON.parse(localStorage.getItem('users') as string) || [];
    registeredUsers.push(data);
    localStorage.setItem('users', JSON.stringify(registeredUsers));
    navigate('/signin');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>Sign Up</h2>
      <label htmlFor="email">Email</label>
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,3}$/i,
            message: 'Email is not valid',
          },
        })}
      />
      {errors.email && <p className={styles.error}>{errors.email.message as string}</p>}

      <label htmlFor="username">Username</label>
      <input
        {...register('username', {
          required: 'Username is required',
          pattern: {
            value: /^[A-Za-z0-9_-]{2,20}$/,
            message: 'Username can only contain latin letters, numbers, dashes and underscores',
          },
        })}
      />
      {errors.username && <p className={styles.error}>{errors.username.message as string}</p>}

      <label htmlFor="password">Password</label>
      <input
        {...register('password', {
          required: 'Password is required',
          pattern: {
            value: /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
            message:
              'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character and be at least 8 characters long',
          },
        })}
      />
      {errors.password && <p className={styles.error}>{errors.password.message as string}</p>}

      <label htmlFor="repeatpassword">Repeat password</label>
      <input
        {...register('repeatpassword', {
          validate: (value) => value === password || 'The passwords do not match',
        })}
      />
      {errors.repeatpassword && (
        <p className={styles.error}>{errors.repeatpassword.message as string}</p>
      )}

      <PinkButton text="Sign up" onClick={handleSubmit(onSubmit)} />

      <p>
        Already have an account?{' '}
        <b>
          <Link to="/signin">Sign in</Link>
        </b>
      </p>
    </form>
  );
};

export default Register;
