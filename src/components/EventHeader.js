import { use } from "react";
import { ReactComponent as ArrowBack } from "../assets/arrow-back.svg";
import "../styles/event-header.css";
import "../styles/utilities.css";
import { useNavigate } from "react-router-dom";

export default function EventHeader() {
  const navigate = useNavigate();
  return (
    <div className="event-header">
      <div
        style={{ marginTop: "7px" }}
        className="highlight-on-hover"
        role="button"
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowBack />
      </div>
      <div className="event-title">
        <div>Event Name</div>
        <span>(Venue Here)</span>
      </div>
    </div>
  );
}
