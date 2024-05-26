import { BiDownArrow, BiNotepad, BiSolidDownArrow } from "react-icons/bi";
import { BsGripVertical, BsMenuDown, BsPlus } from "react-icons/bs";
import { MdMargin } from "react-icons/md";
import { FaSearch, FaPlus } from 'react-icons/fa';
import { AiFillAccountBook } from "react-icons/ai";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { LiaStickyNote } from "react-icons/lia";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { assignments } from "../../Database";
import { useParams } from "react-router";
import * as db from "../../Database";


export default function Assignments() {
  const { cid } = useParams();
  const assigments = db.assignments;
    return (
      
      <div id="wd-assignments">
        <div style={{marginBottom: "20px"}}>
        <div className="d-flex align-items-center mb-3">
          <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
      <div className="input-group" style={{ width: '300px' }}>
        <span className="input-group-text bg-white border-end-0">
          <FaSearch />
        </span>
        <input 
          type="text"
          className="form-control border-start-0"
          placeholder="Search..."
        />
      </div> 
      <div>
      <button className="btn btn-light ms-2 ">
        <FaPlus className="me-1" />
        Group
      </button>
      <button className="btn btn-danger ms-2">
        <FaPlus className="me-1" />
        Assignment
      </button>
      </div>
        </div> </div>
        
        <ul id="wd-assignment" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-silver">
        <div className="wd-title p-3 ps-2 bg-silver" 
        style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div >
        <h3 id="wd-assignments-title">
        <BsGripVertical className="me-2 fs-3" />
        <BiSolidDownArrow className="me-2 fs-6" />
          ASSIGNMENTS 
        </h3> </div>
        <div style={{ display: "flex", alignItems: "center" }}>
  <div style={{
    border: "1px solid #c7cdd158",
    borderRadius: "25px",
    padding: "5px 10px",
    marginRight: "10px"
  }}>
    40% of Total
  </div>
  <BsPlus className="fs-4 me-2" />
  <IoEllipsisVertical className="fs-4" />
</div>
        </div> 
        
        <ul className="wd-lessons list-group rounded-0">
        {assigments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (

        <li className="wd-lesson list-group-item p-3 ps-1">
          <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:"flex",alignItems:"center"}}>
        <BsGripVertical className="me-1 fs-3"/>
        <BiNotepad style={{marginRight:"20px"}} /> 
        <div>
        <a className="wd-assignment-link"
              href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} >
              {assignment.title} 
            </a> 
            <p> <span className="text-danger">
              Multiple Modules </span>| <strong>Not available until</strong> May 7 at 12:00 am&nbsp;|<br></br><strong>Due&nbsp;</strong>May 13 at 11:59pm&nbsp;|&nbsp;100 pts</p>          
            </div></div> <LessonControlButtons /></div>
            
        </li>
        ))}
        </ul>


        <ul className="wd-assignments-a2 list-group rounded-0">
        <li className="wd-assignments-list list-group-item p-3 ps-1">
          <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:"flex",alignItems:"center"}}>
        <BsGripVertical className="me-1 fs-3"/>
        <BiNotepad style={{marginRight:"20px"}} /> 
        <div>
        <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123" >
              A2
            </a> 
            <p> <span className="text-danger">
              Multiple Modules </span>| <strong>Not available until</strong> May 13 at 12:00 am&nbsp;|<br></br><strong>Due&nbsp;</strong>May 20 at 11:59pm&nbsp;|&nbsp;100 pts</p>          
            </div></div> <LessonControlButtons /></div>
            
        </li>
        </ul>

       

        </li>
        </ul>
      </div>
      </div>
      
    );
}  
