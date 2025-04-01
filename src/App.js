import "./App.css";
import "./styles/body-container.css";
import Appbar from "./components/Appbar";
import Background from "./components/Background";
import Table from "./components/Table";
import TableHeader from "./components/TableHeader";
import EventHeader from "./components/EventHeader";
import EventDetailsNav from "./components/EventDetailsNav";
import Dropdown from "./components/Dropdown";
import "./styles/dropdown.css";
import AssignCoordinator from "./components/AssignCoordinator";
import EventDetails from "./components/EventDetails";
import AssignContractor from "./components/AssignContractor";
import PositionTable from "./components/PositionTable";
import EventTablePage from "./pages/EventTablePage";
import EventDetailsPage from "./pages/EventDetailsPage";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Appbar />
      <EventDetailsPage />
      {/* <EventTablePage /> */}
      {/* <div className="container"> */}
      {/* <EventHeader />
        <EventDetailsNav />
        <AssignCoordinator />
        <EventDetails />
        <AssignContractor />
        <PositionTable /> */}
      {/* <TableHeader />
        <Table />
        <div
          style={{
            height: "27px",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            backgroundColor: "black",
          }}
        ></div> */}
      {/* </div> */}

      <Background />
    </div>
  );
}

export default App;
