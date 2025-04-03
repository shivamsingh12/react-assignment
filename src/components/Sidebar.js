import "../styles/sidebar.css";
import DownSelected from "../assets/down-selected.png";
import Logout from "../assets/logout.png";
import Down from "../assets/down.png";
import "../styles/utilities.css";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-options">
        <div
          className="sidebar-option option-icon highlight-on-hover"
          role="button"
        >
          <div>Events</div>
          <div style={{ paddingTop: "6px" }}>
            <img src={DownSelected} height={24} width={24} />
          </div>
        </div>
        <SubOptions
          options={[
            { name: "New Requests", notification: 0 },
            { name: "Estimate", notification: 9 },
            { name: "Events", notification: 0 },
            { name: "Partial Requests", notification: 0 },
          ]}
        />
        <div
          className="sidebar-option align-center-option highlight-on-hover"
          role="button"
        >
          Positions
        </div>
        <div
          className="sidebar-option align-center-option highlight-on-hover"
          role="button"
        >
          Contractors
        </div>
        <div
          className="sidebar-option option-icon highlight-on-hover"
          role="button"
        >
          <div>Users</div>
          <div style={{ paddingTop: "8px" }}>
            <img src={Down} height={24} width={24} />
          </div>
        </div>
        <SubOptions
          options={[
            { name: "Admins", notification: 0 },
            { name: "Clients", notification: 0 },
            { name: "Coordinators", notification: 0 },
          ]}
        />
        <div
          className="sidebar-option align-center-option highlight-on-hover"
          role="button"
        >
          Profile
        </div>
      </div>
      <div className="logout-button option-icon highlight-on-hover">
        <div>
          <img src={Logout} height={22} width={22} />
        </div>
        <div style={{ paddingBottom: "5px" }}>Logout</div>
      </div>
    </div>
  );
}

function SubOptions({ options }) {
  return (
    <div className="sidebar-suboption-container">
      {options.map((option) => (
        <div className={`suboption-container `}>
          <div className={`suboption highlight-on-hover`}>
            {option.name}
            {option.notification > 0 && (
              <Notification>{option.notification}</Notification>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Notification({ children }) {
  return <div className="sidebar-notification">{children}</div>;
}
