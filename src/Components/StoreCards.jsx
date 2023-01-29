import { useState, useEffect } from "react";
import styles from "../CSSmodules/StoreCards.module.css";
import SCard from "./SCard";
import SModal from "./SModal";

function StoreCards(handleDec) {
  const [ShowModal, setShowModal] = useState(false);
  const [cardsData, setCardsData] = useState(() => {
    const storedData = localStorage.getItem("cardsData");
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return [
        {
          Name: "Watch Movie",
          Img: "https://leetcode.com/static/images/LeetCode_Sharing.png",
          Desc: "Solve LeetCode Questions",
          Coin: "100",
        },
        {
          Name: "Study 1Hr",
          Img: "",
          Desc: "Study anthing for 1 hour",
          Coin: "150",
        },
        {
          Name: "Study 3Hr",
          Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7TmO2rU1nzztX-6yEi3oV0P6Q7vC1lbCgg&usqp=CAU",
          Desc: "Study for 3 hr in a day",
          Coin: "500",
        },
      ];
    }
  });

  useEffect(() => {
    const storedData = localStorage.getItem("cardsData");
    if (storedData) {
      setCardsData(JSON.parse(storedData));
    } else {
      setCardsData([
        {
          Name: "Leetcode",
          Img: "https://leetcode.com/static/images/LeetCode_Sharing.png",
          Desc: "Solve LeetCode Questions",
          Coin: "100",
        },
        {
          Name: "Study 1Hr",
          Img: "",
          Desc: "Study anthing for 1 hour",
          Coin: "150",
        },
        {
          Name: "Study 3Hr",
          Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7TmO2rU1nzztX-6yEi3oV0P6Q7vC1lbCgg&usqp=CAU",
          Desc: "Study for 3 hr in a day",
          Coin: "500",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cardsData", JSON.stringify(cardsData));
  }, [cardsData]);

  function createCard() {
    setShowModal(true);
  }

  function handleDataOfChild(data) {
    setCardsData([...cardsData, data]);
    setShowModal(false);
  }

  function handleCoinDecrement(c) {
    handleDec.handleDec(c);
  }

  return (
    <div className={styles.homecard}>
      <h1>Reedem the rewards for your hardwork</h1>
      <div className={styles.cardsParent}>
        {cardsData.map((cardData) => (
          <SCard
            key={cardData.Name}
            data={cardData}
            handleCoinDecrement={handleCoinDecrement}
          />
        ))}
        {ShowModal && <SModal handleDataFromChild={handleDataOfChild}></SModal>}
        <button onClick={createCard}>+</button>
      </div>
    </div>
  );
}

export default StoreCards;
