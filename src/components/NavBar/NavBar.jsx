import React from "react";
import { Link } from "react-router-dom";
import s from "./NavBar.module.css";

const NavBar = ({ renderMovies }) => {
  return (
    <>
      <nav className={s.navbar}>
        <ul className={s.navbarList}>
          <Link className={s.navbarLink} to={"/"}>
            <li className={s.navbarItem} onClick={renderMovies}>
              Home
            </li>
          </Link>
          <li className={s.navbarItem}>Movies</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
