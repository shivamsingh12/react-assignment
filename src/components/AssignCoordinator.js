import Dropdown from "./Dropdown";
import "../styles/dropdown.css";
import "../styles/coordinator.css";

export default function AssignCoordinator() {
  return (
    <div>
      <div className="coordinator-title">Assign Coordinator</div>
      <div className="dropdown-assign-coordinator">
        <Dropdown
          name={"Search Coordinator"}
          options={["Search Coordinator", "coordinator1", "coordinator2"]}
        />
      </div>
      <div className="coordinator-footer">Add New Coordinator</div>
    </div>
  );
}
