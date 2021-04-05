import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
import style from '../AuthNav/AuthNav.module.css';

export default function NavLinks({ onClick }) {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => setIsModalOpen(state => !state);
  return (
    <ul className={style.navList}>
      <li>
        <NavLink
          to="/"
          exact
          className={style.link}
          activeClassName={style.activeLink}
          onClick={onClick}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/useful-info"
          exact
          className={style.link}
          activeClassName={style.activeLink}
          onClick={onClick}
        >
          Materials
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          exact
          className={style.link}
          activeClassName={style.activeLink}
          onClick={onClick}
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
}