import "../styles/event-details.css";

export default function EventDetails() {
  return (
    <div className="event-details-container">
      <div className="border-with-padding event-time">
        <div style={{ width: "50%" }}>
          Start: <span>12-12-23</span>
        </div>
        <div style={{ width: "50%" }}>
          Ends: <span>15-12-23</span>
        </div>
      </div>
      <div className="border-with-padding">
        Venue Address: <span>Some Location 12, Name here, City, State.</span>
      </div>
    </div>
  );
}
