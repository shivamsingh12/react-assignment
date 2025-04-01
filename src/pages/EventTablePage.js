import TableHeader from "../components/TableHeader";
import Table from "../components/Table";
import "../styles/event-table-page.css";

export default function EventTablePage() {
  return (
    <div className="event-table-page-container">
      <TableHeader />
      <Table />
      <div
        style={{
          height: "27px",
          borderBottomLeftRadius: "16px",

          backgroundColor: "black",
        }}
      ></div>
    </div>
  );
}
