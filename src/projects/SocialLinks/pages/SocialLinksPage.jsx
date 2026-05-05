import "./SocialLinksPage.css";
import usePageBackground from "../../../hooks/usePageBackground";
import usePageTitle from "../../../hooks/usePageTitle";
import HomeButton from "../../../components/HomeButton/HomeButton";
import SocialLinksCard from "../components/SocialLinksCard";

function SocialLinksPage() {
    usePageTitle("Social Links - Ethan Reynolds");
    usePageBackground("hsl(0, 0%, 8%)");

    return (
        <div className="social-links-page">
            <SocialLinksCard />
            <HomeButton />
        </div>
    );
}

export default SocialLinksPage;