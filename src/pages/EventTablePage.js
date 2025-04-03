import TableHeader from "../components/TableHeader";
import Table from "../components/Table";
import "../styles/event-table-page.css";
import "../styles/event-table-pagination.css";

import EventTablePagination from "../components/EventTablePagination";

export default function EventTablePage() {
  return (
    <div className="event-table-page-container">
      <TableHeader />
      <Table />
      <EventTablePagination />
    </div>
  );
}
