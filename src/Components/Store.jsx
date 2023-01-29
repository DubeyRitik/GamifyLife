import StoreCards from "./StoreCards";

function Store(handleDec) {
  function handleDece(c) {
    handleDec.handleDec(c);
  }
  return (
    <div>
      <StoreCards handleDec={handleDece}></StoreCards>
    </div>
  );
}

export default Store;
