import "./MeetStep.css";

function MeetStep(props) {
  return (
    <div className="meet-step">
      <div className="meet-line"></div>
      <div className="meet-number">{props.number}</div>
    </div>
  );
}

export default MeetStep;