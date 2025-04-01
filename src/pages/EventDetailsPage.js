import AssignContractor from "../components/AssignContractor";
import EventDetailsNav from "../components/EventDetailsNav";
import EventHeader from "../components/EventHeader";
import EventDetails from "../components/EventDetails";
import PositionTable from "../components/PositionTable";
import Button from "../components/Button";
import "../styles/event-details-page.css";
import AssignCoordinator from "../components/AssignCoordinator";

export default function EventDetailsPage() {
  return (
    <div className="event-details-page-container">
      <div>
        <EventHeader />
      </div>
      <div>
        <EventDetailsNav />
      </div>
      <div className="assign-coordinator-and-event-details">
        <div>
          <AssignCoordinator />
        </div>
        <EventDetails />
      </div>
      <div className="assign-contractor-and-position-table">
        <div>
          <AssignContractor />
        </div>
        <div className="positions-header-container">
          <div className="positions-header">Positions</div>
          <div className="positions-table">
            <PositionTable />
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "center" }}>
        <Button>Save Edits</Button>
      </div>
    </div>
  );
}
