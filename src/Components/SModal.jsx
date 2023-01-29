import { useState } from "react";
import styles from "../CSSmodules/Modal.module.css";
function Modal(props) {
  const [Name, setName] = useState("");
  const [Desc, setDesc] = useState("");
  const [Img, setImg] = useState("");
  const [Coin, setCoin] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleImgChange(event) {
    setImg(event.target.value);
  }

  function handleCoinChange(event) {
    setCoin(event.target.value);
  }

  const handleCreate = () => {
    const data = { Name, Desc, Img, Coin };
    props.handleDataFromChild(data);
  };

  return (
    <div className={styles.modal}>
      <label htmlFor="">Name</label>
      <input type="text" onChange={handleNameChange} />
      <label htmlFor="">Description</label>
      <input type="text" onChange={handleDescChange} />
      <label htmlFor="">Img Url</label>
      <input type="text" onChange={handleImgChange} />
      <label htmlFor="">Coins</label>
      <input type="number" onChange={handleCoinChange} />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default Modal;
