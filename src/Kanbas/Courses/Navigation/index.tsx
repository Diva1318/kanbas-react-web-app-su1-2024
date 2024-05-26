import "./index.css";
import { useState } from "react";
export default function CoursesNavigation() {
  const [current, setCurrent]= useState("Home")
    return (
      <div id="wd-courses-navigation" className="list-group fs-5 rounded-0" style={{marginRight: "5rem"}}>
        <a id="wd-course-home-link" href="/Kanbas/Courses/1234/Home"
         className={`list-group-item  border border-0 ${current==="Home"?"active":"text-danger"}`} onClick={()=>setCurrent("Home")} 
         >Home</a>
        <a id="wd-course-modules-link" href="/Kanbas/Courses/1234/Modules"
         className={`list-group-item   border-0 ${current==="Modules"?"active ":"text-danger"}`}onClick={()=>setCurrent("Modules")}> Modules </a>
      <a id="wd-course-piazza-link" href="/Kanbas/Courses/1234/Piazza"
         className={`list-group-item   border-0 ${current==="Piazza"?"active ":" text-danger"}`} onClick={()=>setCurrent("Piazza")} > Piazza </a>
      <a id="wd-course-zoom-link" href="/Kanbas/Courses/1234/Zoom"
         className={`list-group-item   border-0 ${current==="Zoom"?"active":"text-danger"}`} onClick={()=>setCurrent("Zoom")}> Zoom </a>
      <a id="wd-course-quizzes-link" href="/Kanbas/Courses/RS101/Assignments"
         className={`list-group-item   border-0 ${current==="Assignments"?"active":"text-danger"}`} onClick={()=>setCurrent("Assignments")}> Assignments </a>
      <a id="wd-course-assignments-link" href="/Kanbas/Courses/1234/Quizzes"
         className={`list-group-item   border-0 ${current==="Quizzes"?"active":"text-danger"}`} onClick={()=>setCurrent("Quizzes")}> Quizzes </a>
      <a id="wd-course-grades-link" href="/Kanbas/Courses/1234/Grades"
         className={`list-group-item   border-0 ${current==="Grades"?"active":"text-danger"}`} onClick={()=>setCurrent("Grades")}> Grades </a>
    </div>

  );}
  
  