import "./CardComponent.css";

function CardComponent({ icon, title, description, borderColor }) {
  return (
    <div
      className="card-component"
      style={{
        borderTop: `5px solid ${borderColor}`,
      }}
    >
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <img src={icon} alt={`${title} icon`} className="card-icon" />
    </div>
  );
}

export default CardComponent;
