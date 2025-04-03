import Appbar from "./components/Appbar";
import Sidebar from "./components/Sidebar";
import "./styles/layout.css";
import Background from "./components/Background";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout-container">
      <div className="appbar-layout">
        <Appbar />
      </div>
      <div className="sidebar-and-outlet">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
      <Background />
    </div>
  );
}
