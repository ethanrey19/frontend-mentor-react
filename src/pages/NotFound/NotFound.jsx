import "./NotFound.css";
import HomeButton from "../../components/HomeButton/HomeButton";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <HomeButton />
    </div>
  );
}

export default NotFound;
