import "./TestimonialGrid.css";

function TestimonialGrid(props) {
  const isWhite = props.backgroundColor === "hsl(0, 0%, 100%)";
  return (
    <div
      className="testi-grid"
      style={{
        color: props.textColor,
        backgroundColor: props.backgroundColor,
        boxShadow: isWhite
          ? "0 25px 50px rgba(15, 23, 42, 0.25)"
          : "none",
      }}
    >
      <section className="user">
        <img
          className="user-avatar"
          src={props.user.avatar}
          alt="User Avatar"
        ></img>
        <div className="user-info">
          <h2 className="user-name">{props.user.name}</h2>
          <h2 className="user-status">Verified Graduate</h2>
        </div>
      </section>

      <p className="quote">{props.quote}</p>
      <p className="subquote">"{props.subquote}"</p>
    </div>
  );
}

export default TestimonialGrid;
