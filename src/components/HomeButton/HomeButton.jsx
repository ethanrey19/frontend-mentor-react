import "./HomeButton.css";
import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <>
      <Link to="/">
        <button className="home-button">Return Home</button>
      </Link>
    </>
  );
}

export default HomeButton;
