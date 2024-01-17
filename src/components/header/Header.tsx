import React, { useState } from 'react';
import logo from '../../assets/images/Standzone.svg';
import search from '../../assets/images/search.svg';
import styles from './header.module.css';
import PinkButton from '../../ui/pink-button/PinkButton';
import { Link } from 'react-router-dom';
import FavoritesIcon from './components/favorites-icon/FavoritesIcon';
import Dropdown from './components/dropdown/Dropdown';
import { UserType } from '../../types/user.interface';

interface HeaderProps {
  isLoggedIn: boolean;
  user: UserType | null;
  onSignOut: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, user, onSignOut }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
            {isLoggedIn && (
              <div className={styles.username} onClick={handleDropdown}>
                {user?.username}
                {showDropdown && <Dropdown />}
              </div>
            )}
            <Link to={'/'}>
              <PinkButton text={'Sign out'} onClick={onSignOut} />
            </Link>
          </>
        ) : (
          <Link to={'/signin'}>
            <PinkButton text={'Sign in'} onClick={() => {}} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
