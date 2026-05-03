import "./NotFound.css";
import HomeButton from "../../components/HomeButton/HomeButton";
import usePageTitle from "../../hooks/UsePageTitle";

function NotFound() {
  usePageTitle("Not Found - Ethan Reynolds");

  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <HomeButton />
    </div>
  );
}

export default NotFound;
