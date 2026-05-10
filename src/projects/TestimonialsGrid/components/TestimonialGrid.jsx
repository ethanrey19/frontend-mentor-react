import "./TestimonialGrid.css";

function TestimonialGrid(props) {
  return (
    <div
      className="testi-grid"
      style={{
        color: props.textColor,
        backgroundColor: props.backgroundColor,
      }}
    >
      <img src={props.user.avatar} alt="User Icon"></img>
      <h2 className="user-name">{props.user.name}</h2>

      <header>
        <p className="quote">{props.quote}</p>
      </header>
      <p className="subquote">{props.subquote}</p>
    </div>
  );
}

export default TestimonialGrid;
