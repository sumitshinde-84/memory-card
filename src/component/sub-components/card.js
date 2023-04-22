import "./styles/card.css";

const Card = ({ image, name, id, shuffleArray, getStatus }) => {
  return (
    <div
      id={id}
      onClick={(event) => {
        shuffleArray();
        getStatus(event);
      }}
      className="card"
    >
      <img src={image} alt="card" />
      <p>{name}</p>
    </div>
  );
};

export default Card;
