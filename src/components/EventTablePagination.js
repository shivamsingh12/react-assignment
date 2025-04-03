import "../styles/event-table-pagination.css";

export default function EventTablePagination() {
  return (
    <div className="event-table-pagination">
      <div className="arrow-paginate highlight-on-hover-paginate" style={{}}>
        &larr;
      </div>
      <div className="highlight-on-hover-paginate">1</div>
      <div className="highlight-on-hover-paginate">2</div>
      <div className="highlight-on-hover-paginate">3</div>
      <div className="highlight-on-hover-paginate">4</div>
      <div
        className="arrow-paginate highlight-on-hover-paginate"
        style={{
          direction: "rtl",
        }}
      >
        &rarr;
      </div>
    </div>
  );
}
