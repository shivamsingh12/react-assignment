import "../styles/tableHeader.css";
import { ReactComponent as AddIcon } from "../assets/add-icon.svg";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";

export default function TableHeader() {
  return (
    <div className="header-container">
      <div className="heading">Event Requests</div>
      <div className="action-container">
        <div className="search-container">
          <SearchIcon
            className="margin-10"
            style={{ height: "24px", width: "24px" }}
          />
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search here"
            className="margin-10"
          />
        </div>
        <div className="add-action">
          <AddIcon style={{ height: "24px", width: "24px" }} />
        </div>
      </div>
    </div>
  );
}
