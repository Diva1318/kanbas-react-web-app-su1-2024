import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import { assignments, courses, users } from "../Database";

import Home from "./Home";
import Grades from "./Grades";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation   } from "react-router";
import { FaBars } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa6";
export default function Courses() {
  const { cid, aid,uid} = useParams();
  const course = courses.find((course) => course._id === cid);
  const assignment = assignments.find((assignment) => assignment._id === aid);
  const user = users.find((user) => user._id === uid);

  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
        
        <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
        

        <hr />
        <div className="d-flex">
    <div className="d-none d-md-block">

            <CoursesNavigation />
            </div>
    <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home/>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Assignments"
                     element={<Assignments/>} />
              <Route path="Assignments/:aid"
                     element={<AssignmentEditor/>} />
              <Route path="Grades/" element={<Grades/>} />
            </Routes>
            </div>
  </div>


    </div>
);}

