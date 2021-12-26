import React from "react";
import s from "./NavBar.module.css";

const NavBar = ({ renderMovies }) => {
  return (
    <>
      <nav className={s.navbar}>
        <ul className={s.navbarList}>
          <li className={s.navbarItem} onClick={renderMovies}>
            Home
          </li>
          <li className={s.navbarItem}>Movies</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
