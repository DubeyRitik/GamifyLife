import styles from "../CSSmodules/Card.module.css";
function Card({ data, handleCoinIncrement }) {
  function handleIncrement() {
    let c = data.Coin;
    let n = data.Name;
    handleCoinIncrement({ c, n });
    console.log({ c, n });
  }

  return (
    <div className={styles.card}>
      <div>
        <img src={data.Img} alt={data.Name} className={styles.image} />
      </div>
      <div className={styles.cardName}>
        <div>
          <h1>{data.Name}</h1>
        </div>
        <div className={styles.coinDesc}>
          <h2>{data.Coin}</h2>
        </div>
      </div>
      <div className={styles.cardDesc}>
        <p>{data.Desc}</p>
      </div>
      <button className={styles.button} onClick={handleIncrement}>
        Add
      </button>
    </div>
  );
}

export default Card;
