import "./MeetLandingPage.css";
import HomeButton from "../../../components/HomeButton/HomeButton"
import meetLogo from "../assets/logo.svg";
import meetHero from "../assets/tablet/image-hero.png";
import usePageTitle from "../../../hooks/usePageTitle";
import usePageBackground from "../../../hooks/usePageBackground";
import MeetStep from "../components/MeetStep";
import gridImg1 from "../assets/desktop/image-woman-in-videocall.jpg";
import gridImg2 from "../assets/desktop/image-women-videochatting.jpg";
import gridImg3 from "../assets/desktop/image-men-in-meeting.jpg";
import gridImg4 from "../assets/desktop/image-man-texting.jpg";

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
          <button className="meet-btn-download">
            Download <span className="meet-download-version">v1.3</span>
          </button>
          <button className="btn-meet-about">What is it?</button>
        </div>
        <MeetStep number="01" />
      </section>

      <section className="meet-main">
        <div className="meet-main-grid">
          <img className="meet-grid-img" src={gridImg1} alt="Meet Grid Image"></img>
          <img className="meet-grid-img" src={gridImg2} alt="Meet Grid Image"></img>
          <img className="meet-grid-img" src={gridImg3} alt="Meet Grid Image"></img>
          <img className="meet-grid-img" src={gridImg4} alt="Meet Grid Image"></img>
        </div>

        <h2 className="meet-main-header">Built for modern use</h2>
        <h3 className="meet-main-subheader">Smarter meetings, all in one place</h3>
        <p className="meet-main-text">
          Send messages, share files, show your screen, and record your meetings
          - all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
        <MeetStep number="02" />
      </section>

      <section className="meet-footer">
        <h2 className="meet-footer-header">Experience more together</h2>
        <h3 className="meet-footer-subheader">Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</h3>
        <button className="meet-footer-btn-download">
            Download <span className="meet-footer-download-version">v1.3</span>
          </button>
      </section>

      <HomeButton />
    </div>
  );
}

export default MeetLandingPage;
