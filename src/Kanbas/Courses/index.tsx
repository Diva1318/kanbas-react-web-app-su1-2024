import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import { Navigate, Route, Routes } from "react-router";
export default function Courses() {
  return (
    <div id="wd-courses">
      ...
      <Routes>
        <Route path="/"
               element={<Navigate to="Home" />} />
        <Route path="Home" element={<h3>Home</h3>} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Assignments"
               element={<h3>Assignments</h3>} />
        <Route path="Assignments/:id"
               element={<h3>Assignment Editor</h3>} />
      </Routes>
      ...
    </div>
);}

