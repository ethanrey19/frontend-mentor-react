import "./FourCardsPage.css";
import ProjectLayout from "../../../components/ProjectLayout/ProjectLayout";
import usePageTitle from "../../../hooks/usePageTitle";
import usePageBackground from "../../../hooks/usePageTitle";
import CardComponent from "../components/CardComponent";
import iconSupervisor from "../images/icon-supervisor.svg";
import iconTeam from "../images/icon-team-builder.svg";
import iconKarma from "../images/icon-karma.svg";
import iconCalc from "../images/icon-supervisor.svg";

function FourCardsPage() {
  usePageBackground("hsl(0, 0%, 100%)");
  usePageTitle("Four Cards - Ethan Reynolds");

  return (
    <ProjectLayout>
      <div className="four-cards-page">
        <header>
          <h1 className="four-cards-title">Reliable, efficient delivery</h1>
          <h1 className="four-cards-subtitle">Powered by Technology</h1>
        </header>

        <section>
          <p className="four-cards-description">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </section>

        <div className="cards-container">
          <CardComponent
            icon={iconSupervisor}
            title="Supervisor"
            description="Monitors activity to project roadblocks"
            borderColor="hsl(180, 62%, 55%)"
          />

          <div className="middle">
            <CardComponent
              icon={iconTeam}
              title="Team Builder"
              description="Scans our talent network to create the optimal team for your project"
              borderColor="hsl(0, 78%, 62%)"
            />

            <CardComponent
              icon={iconKarma}
              title="Karma"
              description="Regularly evalautes our talent to ensure quality"
              borderColor="hsl(34, 97%, 64%)"
            />
          </div>

          <CardComponent
            icon={iconCalc}
            title="Calculator"
            description="Uses data from past projects to provide better estimates"
            borderColor="hsl(212, 86%, 64%)"
          />
        </div>
      </div>
    </ProjectLayout>
  );
}

export default FourCardsPage;
