import "./CardComponent.css";

function CardComponent({ icon, title, description }) {
  return (
    <div className="card-component">
      <img src={icon} alt={`${title} icon`} className="card-icon" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default CardComponent;