import Dashboard from "./Dashboard";
import "./Styles.css";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
export default function Kanbas() {
  return (
    <div id="wd-kanbas" className="h-100">
      <div className="d-flex h-100">
      <div className="d-none d-md-block bg-black">
            <KanbasNavigation />
            </div>
            <div className="flex-fill p-4">

          <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/:id/*" element={<Courses />} />
              <Route path="Courses" element={<Dashboard />} />
            </Routes>
            </div>
  </div>


    </div>
);}

