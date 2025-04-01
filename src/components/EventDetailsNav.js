import "../styles/event-header.css";

export default function EventDetailsNav() {
  return (
    <div style={{ overflowX: "auto" }}>
      <div className="event-nav">
        <div>Event Details</div>
        <div className="active">Assign Coordinator/Coordinator</div>
        <div style={{ borderRight: "2px solid #D175B6" }}>
          Session Management
        </div>
        <div>Generate SOW</div>
      </div>
    </div>
  );
}
