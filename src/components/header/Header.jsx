import React from 'react';
import logo from '../../assets/images/Standzone.svg';
import search from '../../assets/images/search.svg';
import styles from './header.module.css';
import PinkButton from '../../ui/pink-button/PinkButton';
import { Link } from 'react-router-dom';
import FavoritesIcon from './favorites-icon/FavoritesIcon';

const Header = ({ isLoggedIn, user, onSignOut }) => {
  return (
    <div className={styles.header}>
      <Link to={'/'} className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.right}>
        <Link to={'/search'} className={styles.search}>
          <img src={search} alt="search" />
        </Link>
        {isLoggedIn ? (
          <>
            <Link to={'/favorites'}>
              <FavoritesIcon />
            </Link>
            <p className={styles.username}>{user?.username}</p>
            <Link to={'/'}>
              <PinkButton text={'Sign out'} onClick={onSignOut} />
            </Link>
          </>
        ) : (
          <Link to={'/signin'}>
            <PinkButton text={'Sign in'} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
