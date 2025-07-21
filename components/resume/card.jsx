import "./card.css";
// eslint-disable-next-line react/prop-types
const Card = ({ icon, year, title, desc }) => {
  return (
    <div className="card glassmorphism">
      <div className="card__content">
        <div className="card__header">
          {icon}
          <h4>{year}</h4>
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
