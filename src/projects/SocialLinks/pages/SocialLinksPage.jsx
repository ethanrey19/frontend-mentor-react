import "./SocialLinksPage.css";
import UsePageBackground from "../../../hooks/UsePageBackground";
import UsePageTitle from "../../../hooks/UsePageTitle";
import HomeButton from "../../../components/HomeButton/HomeButton";
import SocialLinksCard from "../components/SocialLinksCard";

function SocialLinksPage() {
    UsePageTitle("Social Links - Ethan Reynolds");
    UsePageBackground("hsl(0, 0%, 8%)");

    return (
        <div className="social-links-page">
            <SocialLinksCard />
            <HomeButton />
        </div>
    );
}

export default SocialLinksPage;