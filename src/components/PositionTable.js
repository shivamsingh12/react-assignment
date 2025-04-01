import positionTableData from "../data/positionTableData";
import "../styles/position-table.css";
import Dropdown from "./Dropdown";
export default function PositionTable() {
  return (
    <div className="position-table">
      <div className="bordered">
        <table style={{ whiteSpace: "nowrap" }}>
          <thead>
            <tr>
              <td>Position</td>
              <td>Time</td>
              <td>Info</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            {positionTableData.map((row, index) => (
              <tr key={index}>
                <td>{row.position}</td>
                <td>{row.time}</td>
                <td>
                  <span>LP</span>
                  {row.info}
                </td>
                <td>
                  <div className="select-contractor-container">
                    <div style={{ paddingLeft: "20px" }}>{row.quantity}</div>
                    <div className="select-contractor">
                      <Dropdown
                        name={"Select Contractor"}
                        options={[
                          "Select Contractor",
                          "contractor 1",
                          "contractor 2",
                        ]}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="table-footer"></div>
      </div>
    </div>
  );
}
