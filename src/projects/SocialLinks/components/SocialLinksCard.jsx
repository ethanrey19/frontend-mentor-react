import "./SocialLinksCard.css";
import avatarImage from "../assets/images/avatar-jessica.jpeg"

function SocialLinksCard() {
    return (
        <div className="social-links-card">
            <img src={avatarImage} alt="Avatar image" className="social-avatar"/>
            <h2 className="social-name">Jessica Randall</h2>
            <p className="social-location">London, United Kingdom</p>
            <p className="social-description">"Front-end developer and avid reader"</p>

            <button className="social-button">GitHub</button>
            <button className="social-button">Frontend Mentor</button>
            <button className="social-button">LinkedIn</button>
            <button className="social-button">Twitter</button>
            <button className="social-button">Instagram</button>
        </div>
    );
}

export default SocialLinksCard;