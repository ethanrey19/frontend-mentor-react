import "./QrCode.css";
import ProjectLayout from "../../components/ProjectLayout/ProjectLayout";
import qrCodeImage from "./assets/image-qr-code.png";
import usePageTitle from "../../hooks/usePageTitle";
import usePageBackground from "../../hooks/usePageBackground";

function QrCode() {
  usePageBackground("hsl(212, 45%, 89%)");
  usePageTitle("QR Code - Ethan Reynolds");

  return (
    <ProjectLayout>
      <div className="qr-code-page">
        <div className="qr-code-component">
          <img src={qrCodeImage} alt="QR Code" className="qr-code-image" />
          <h2 className="qr-code-title">
            Improve your front-end skills by building projects
          </h2>
          <p className="qr-code-description">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level.
          </p>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default QrCode;
