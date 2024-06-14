import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import { assignments, users } from "../Database";
import assignmentEditor from "./Assignments/AssignmentEditor";
import Home from "./Home";
import Grades from "./Grades";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation   } from "react-router";
import { FaBars } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa6";
import Addass from "./Assignments/Addass";
import PeopleTable from "./People/Table";
import PeopleDetails from "./People/Details";
export default function Courses({ courses }: { courses: any[]; }) {
  const { cid, aid,uid} = useParams();
  const course = courses.find((course) => course._id === cid);
  const assignment = assignments.find((assignment) => assignment._id === aid);
  const user = users.find((user) => user._id === uid);

  const { pathname } = useLocation();
  function fetchUsers(): void {
    throw new Error("Function not implemented.");
  }

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
                     element={<AssignmentEditor />} />
              <Route path="Assignments/add"
                     element={<Addass />} />
              <Route path="Grades/" element={<Grades/>} />
              <Route path="People" element={<PeopleTable />} />
              {/* <Route path="People/:uid" element={<PeopleTable />} /> */}
              <Route path="People/:uid" element={<PeopleDetails fetchUsers={fetchUsers}/>} />

              {/* <Route path="/Kanbas/Courses/:cid/People/:uid" element={<PeopleDetails />} /> */}
            </Routes>
            </div>
  </div>


    </div>
);}

