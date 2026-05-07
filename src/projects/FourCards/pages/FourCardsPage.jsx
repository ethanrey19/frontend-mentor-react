import "./FourCardsPage.css";
import HomeButton from "../../../components/HomeButton/HomeButton";
import usePageTitle from "../../../hooks/usePageTitle";
import usePageBackground from "../../../hooks/usePageTitle";
import CardComponent from "../components/CardComponent";
import iconSupervisor from "../images/icon-supervisor.svg";

function FourCardsPage() {
  usePageBackground("hsl(0, 0%, 100%)");
  usePageTitle("Four Cards - Ethan Reynolds");

  return (
    <div className="four-cards-page">
      <header>
        <h1 className="four-cards-title">Reliable, efficient delivery</h1>
        <h1 className="four-cards-subtitle">Powered by Technology</h1>
      </header>

      <p className="four-cards-description">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>

      <CardComponent icon={iconSupervisor} title="Supervisor" description="Monitors activity to project roadblocks" />

      <HomeButton />
    </div>
  );
}

export default FourCardsPage;
