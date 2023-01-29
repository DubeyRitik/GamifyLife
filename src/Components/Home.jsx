import Hero from "../Components/Hero";
import HomeCards from "./HomeCards";

import { useState, useEffect } from "react";

function Home(handle) {
  const [coin, setCoin] = useState(
    parseInt(localStorage.getItem("coins")) || 0
  );
  const [study, setStudy] = useState(
    parseInt(localStorage.getItem("study")) || 0
  );
  const [study3, setStudy3] = useState(
    parseInt(localStorage.getItem("study3")) || 0
  );
  const [leetcode, setLeetcode] = useState(
    parseInt(localStorage.getItem("leetcode")) || 0
  );
  const [tcoin, settcoin] = useState(
    parseInt(localStorage.getItem("tcoin")) || 0
  );

  useEffect(() => {
    const storedCoin = localStorage.getItem("coins");
    if (storedCoin) {
      setCoin(Number(storedCoin));
    }
    const storedStudy = localStorage.getItem("study");
    if (storedStudy) {
      setStudy(Number(storedStudy));
    }
    const storedStudy3 = localStorage.getItem("study3");
    if (storedStudy3) {
      setStudy3(Number(storedStudy3));
    }
    const storedLeetcode = localStorage.getItem("leetcode");
    if (storedLeetcode) {
      setLeetcode(Number(storedLeetcode));
    }
    const storedtcoin = localStorage.getItem("tcoin");
    if (storedtcoin) {
      settcoin(Number(storedtcoin));
    }
  }, []);

  function handleIncrement({ c, n }) {
    console.log(c);
    handle.handleInc({ c, n });
    setCoin((prevState) => {
      localStorage.setItem("coin", Number(c) + Number(prevState));
      return Number(c) + Number(prevState);
    });
    settcoin((prevState) => {
      localStorage.setItem("tcoin", Number(c) + Number(prevState));
      return Number(c) + Number(prevState);
    });
    if (n === "Leetcode") {
      setLeetcode((prevState) => {
        localStorage.setItem("leetcode", 1 + Number(prevState));
        return 1 + Number(prevState);
      });
    }
    if (n === "Study 1Hr") {
      setStudy((prevState) => {
        localStorage.setItem("study", 1 + Number(study));
        return 1 + Number(study);
      });
    }
    if (n === "Study 3Hr") {
      setStudy3((prevState) => {
        localStorage.setItem("study3", 3 + Number(study3));
        return 3 + Number(study3);
      });
    }
  }
  return (
    <div>
      <Hero
        coins={coin}
        leetcode={leetcode}
        study={study}
        study3={study3}
        tcoin={tcoin}
      ></Hero>
      <HomeCards handleInc={handleIncrement}></HomeCards>
    </div>
  );
}
export default Home;
