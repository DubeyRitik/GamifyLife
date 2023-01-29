import React from "react";
import styles from "../CSSmodules/Navbar.module.css"; //change the name of the css file
function Navbar(props) {
  function changeTabHome() {
    props.displayHome();
    console.log("home");
  }
  function changeTabStore() {
    props.displayStore();
    console.log("store");
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.navleft}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/2991/2991606.png"
          alt="Gamify Life logo"
        />
        <span className={styles.navleftspan}>Gamify Life</span>
      </div>
      <div className={styles.navright}>
        <div className={styles.navlinks}>
          <a href="#" onClick={changeTabHome}>
            Home
          </a>
          <a href="#">Tasks</a>
          <a href="#" onClick={changeTabStore}>
            Store
          </a>
        </div>

        <div>
          <span>Coins: </span>
          <span>{props.coins} </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
