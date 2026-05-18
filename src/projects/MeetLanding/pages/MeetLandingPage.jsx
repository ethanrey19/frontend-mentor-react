import "./MeetLandingPage.css";
import meetLogo from "../assets/logo.svg";
import meetHero from "../assets/tablet/image-hero.png";
import usePageTitle from "../../../hooks/usePageTitle";
import usePageBackground from "../../../hooks/usePageBackground";
import MeetStep from "../components/MeetStep";

function MeetLandingPage() {
  usePageTitle("Meet - Ethan Reynolds");
  usePageBackground("#FAFAFA");
  return (
    <div className="meet-landing-page">
      <img className="meet-logo" src={meetLogo} alt="Meet"></img>
      <img className="meet-hero" src={meetHero} alt="Meet Hero"></img>

      <section className="meet-header">
        <h1 className="meet-title">
          Group Chat
          <br />
          for Everyone
        </h1>
        <p className="meet-description">
          Meet makes it easy to connect with others face-to-face virually and
          collaborate across any device.
        </p>
        <div className="meet-buttons">
          <button className="btn-download">
            Download <span className="download-version">v1.3</span>
          </button>
          <button className="btn-meet-about">What is it?</button>
        </div>

        <MeetStep number="01" />
      </section>
    </div>
  );
}

export default MeetLandingPage;
