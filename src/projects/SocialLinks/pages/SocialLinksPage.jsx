import "./SocialLinksPage.css";
import ProjectLayout from "../../../components/ProjectLayout/ProjectLayout";
import usePageBackground from "../../../hooks/usePageBackground";
import usePageTitle from "../../../hooks/usePageTitle";
import SocialLinksCard from "../components/SocialLinksCard";

function SocialLinksPage() {
  usePageTitle("Social Links - Ethan Reynolds");
  usePageBackground("hsl(0, 0%, 8%)");

  return (
    <ProjectLayout>
      <div className="social-links-page">
        <SocialLinksCard />
      </div>
    </ProjectLayout>
  );
}

export default SocialLinksPage;
