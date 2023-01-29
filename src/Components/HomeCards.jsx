import { useState, useEffect } from "react";
import styles from "../CSSmodules/HomeCards.module.css";
import Card from "./Card";
import Modal from "./Modal";

function HomeCards(handleInc) {
  const [ShowModal, setShowModal] = useState(false);
  const [cardsData, setCardsData] = useState(
    JSON.parse(localStorage.getItem("cardsData")) || [
      {
        Name: "Leetcode",
        Img: "https://leetcode.com/static/images/LeetCode_Sharing.png",
        Desc: "Solve LeetCode Questions",
        Coin: "200",
      },
      {
        Name: "Study 1Hr",
        Img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8&w=1000&q=80",
        Desc: "Study anthing for 1 hour",
        Coin: "150",
      },
      {
        Name: "Study 3Hr",
        Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7TmO2rU1nzztX-6yEi3oV0P6Q7vC1lbCgg&usqp=CAU",
        Desc: "Study for 3 hr in a day",
        Coin: "500",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("cardsData", JSON.stringify(cardsData));
  }, [cardsData]);

  function createCard() {
    setShowModal(true);
  }

  function handleDataOfChild(data) {
    console.log(data.Name);
    setCardsData([...cardsData, data]);
    setShowModal(false);
  }

  function handleCoinIncrement({ c, n }) {
    console.log({ c, n });
    handleInc.handleInc({ c, n });
  }

  return (
    <div className={styles.homecard}>
      <h1>Finish the jobs and improve yourself everyday.</h1>
      <div className={styles.cardsParent}>
        {cardsData.map((cardData) => (
          <Card
            key={cardData.Name}
            data={cardData}
            handleCoinIncrement={handleCoinIncrement}
          />
        ))}
        {ShowModal && <Modal handleDataFromChild={handleDataOfChild}></Modal>}
        <button onClick={createCard} className={styles.button}>
          +
        </button>
      </div>
    </div>
  );
}

export default HomeCards;
