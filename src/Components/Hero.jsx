import styles from "../CSSmodules/Hero.module.css";

function Hero(props) {
  console.log(props.coins);
  return (
    <div className={styles.banner}>
      <div className={styles.bannerLeft}>
        <h1>Let's Improve</h1>
        <h1>Each Day</h1>
        <h2>Let's Gamify Life</h2>
      </div>
      <div className={styles.bannerRight}>
        <div className={styles.data}>
          <div className={styles.coinData}>
            <h1>{props.coins}</h1>
            <h2>Coins</h2>
          </div>
          <div className={styles.bottomData}>
            <div className={styles.fourDiv}>
              <h2>{props.tcoin}</h2>
              <h6>Coins Earned</h6>
            </div>
            <div className={styles.fourDiv}>
              <h2>{props.study}</h2>
              <h6>Hr of Study</h6>
            </div>
            <div className={styles.fourDiv}>
              <h2> {props.leetcode}</h2>
              <h6>Leetcode Ques</h6>
            </div>
            <div className={styles.fourDiv}>
              <h2>{props.study3}</h2>
              <h6>3hr daily streak</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
