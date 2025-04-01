import Star from "../assets/star.png";
import "../styles/assign-contractor.css";
import contractorData from "../data/assignContractorData";

export default function AssignContractor() {
  return (
    <div className="contractor-content-header">
      <div className="contractor-header">Assign Contractor</div>
      <div className="contractor-container">
        {contractorData.map((contractor) => (
          <MeetingInfo {...contractor} />
        ))}
      </div>
    </div>
  );
}

function MeetingInfo({ name, positions, duration, isActive }) {
  const color = isActive ? "#000000" : "#D175B6";
  const backgroundColor = isActive && "#D175B6";
  return (
    <div className="meeting-info-card" style={{ backgroundColor }}>
      <div className="meeting-info-details" style={{ fontWeight: 500 }}>
        <div style={{ fontSize: "20px" }}>{name}</div>
        <div style={{ paddingTop: "4px" }}>
          <img src={Star} height={16} width={16} alt="star" />
        </div>
        <div style={{ fontSize: "16px", color }}>{positions}</div>
      </div>
      <div style={{ fontSize: "12px", fontWeight: 300 }}>{duration}</div>
    </div>
  );
}
