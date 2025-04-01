import { ReactComponent as ArrowBack } from "../assets/arrow-back.svg";
import "../styles/event-header.css";

export default function EventHeader() {
  return (
    <div className="event-header">
      <div style={{ marginTop: "7px" }}>
        <ArrowBack />
      </div>
      <div className="event-title">
        <div>Event Name</div>
        <span>(Venue Here)</span>
      </div>
    </div>
  );
}
