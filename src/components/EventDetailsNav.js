import "../styles/event-header.css";

export default function EventDetailsNav() {
  return (
    <div className="event-nav-scroll" style={{ overflowX: "auto" }}>
      <div className="event-nav">
        <div style={{ borderRight: "2px solid #D175B6" }} role="button">
          Event Details
        </div>
        <div
          className="active"
          style={{ borderRight: "2px solid #D175B6" }}
          role="button"
        >
          Assign Coordinator/Coordinator
        </div>
        <div style={{ borderRight: "2px solid #D175B6" }} role="button">
          Session Management
        </div>
        <div role="button">Generate SOW</div>
      </div>
    </div>
  );
}
