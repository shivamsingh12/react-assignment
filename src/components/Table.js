import tableData from "../data/tableData";
import { ReactComponent as ArrowUp } from "../assets/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";
import { ReactComponent as View } from "../assets/view.svg";
import { useNavigate } from "react-router-dom";
import "../styles/table.css";
import "../styles/utilities.css";

export default function Table() {
  const navigate = useNavigate();

  return (
    <div className="scroll-table">
      <table className="event-table">
        <thead>
          <tr>
            <th className="align-center">
              <div className="position-fixed-heading"></div>
              <div className="backdrop-blur border-bottom"></div>
              <div className="icon-heading table-heading-event-name">
                <div className="align-center">Event Name</div>
                <div className="align-center icon-wide">
                  <ArrowDown />
                </div>
              </div>
            </th>
            <td className="table-heading-event-start">Event Start</td>
            <td className="table-heading-event-end">
              <div className="icon-heading">
                <div className="align-center">Event End</div>
                <div className="align-center  icon-wide">
                  <ArrowUp />
                </div>
              </div>
            </td>
            <td className="table-heading-client-name">
              <div className="icon-heading">
                <div className="align-center">Client Name</div>
                <div className="align-center  icon-wide">
                  <ArrowDown />
                </div>
              </div>
            </td>
            <td className="table-heading-contact-info">Contact Info</td>
            <td className="table-heading-venue">Venue</td>
            <td className="table-heading-city">City</td>
            <td className="table-heading-state">State</td>
            <td className="table-heading-zipcode">Zip Code</td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => {
            return (
              <tr key={index}>
                <th className="align-center">
                  <div className="position-fixed-data"></div>
                  <div className="backdrop-blur"></div>

                  <div className="view-event-cell table-data-event-name">
                    <div
                      role="button"
                      onClick={() => {
                        navigate("/details");
                      }}
                      className="align-center highlight-on-hover"
                      style={{ borderRadius: "8px" }}
                    >
                      <View />
                    </div>
                    <div className="align-center">{row.eventName}</div>
                  </div>
                </th>
                <td className="table-data-event-start">{row.eventStart}</td>
                <td className="table-data-event-end">{row.eventEnd}</td>
                <td className="table-data-client-name">{row.clientName}</td>
                <td className="table-data-contact-info">{row.contactInfo}</td>
                <td className="table-data-venue">{row.venue}</td>
                <td className="table-data-city">{row.city}</td>
                <td className="table-data-state">{row.state}</td>
                <td className="table-data-zipcode">{row.zipcode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
