// import {useLocation, useNavigate, useParams} from "react-router";
// import {addAssignment, updateAssignment} from "./reducer";
// import {useState, useEffect} from "react";
// import {useDispatch} from "react-redux";
// import {Link} from "react-router-dom";
// import ass from "../../Database/assignment.json";
// import * as client from "./client";

// export default function Addass() {
//     const dispatch = useDispatch();
//     const router = useNavigate();
//     const {cid,aid} = useParams();
//     console.log(useParams());
//     const {pathname} = useLocation();
    
//     // const aid = pathname.split("/").pop();
//     const [assignment, setAssignment] = useState({
//       _id: "",
//       points: "",
//       title: "",
//       course: "",
//       desc: "",
//       due: "",
//       ava: "",
//       until: ""
//     });
//         const handleChange = (e: any) => {
//         const value = e.target.value;
//         setAssignment({...assignment, [e.target.name]: value});
//     };
//     const handleAddAssignment = () => {
//         dispatch(addAssignment(assignment));
//         router(`/Kanbas/Courses/${cid}/Assignments`);
//     }
//     const createAssignment = async (assignment: any) => {
//         console.log(assignment);
//         const newAssignment = await client.createAssignment(cid as string, assignment);
//         dispatch(addAssignment(newAssignment));
//       };
    
//     useEffect(() => {
//       const foundAssignment = ass.find(a => a._id === aid);
    
//       if (foundAssignment) {
//         setAssignment(foundAssignment);
//       } else {
//         setAssignment({
//           _id: "",
//           points: "",
//           title: "",
//           course: "",
//           desc: "",
//           due: "",
//           ava: "",
//           until: ""
//         });
//         console.error("Assignment not found");
//       }
//     }, []);
    
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [points, setPoints] = useState("");
//     const [due, setDue] = useState("");
//     const [available, setAvailable] = useState("");
//     const [until, setUntil] = useState("");
//     return (
//         <div id="wd-assignments-editor">
//             <div className="container">
//                 <div className="row input-group mb-2">
//                     <label htmlFor="wd-name" className="form-label">Assignment Name</label>
//                     <input id="wd-name" className="form-control" name="title" value={assignment.title}
//                            onChange={handleChange}/>
//                 </div>
//                 <div className="row input-group mb-2">
//                       <textarea id="wd-description" className="form-control" rows={10} cols={60}
//                                 onChange={handleChange} name="description" value = {assignment.desc}>
                            
//                         </textarea>
//                 </div>
//                 <div className="row mb-2">
//                     <div className="col-3">
//                         <label htmlFor="wd-points" className="col-form-label float-end">Points</label>
//                     </div>
//                     <div className="col">
//                         <input id="wd-points" type="number" name="points" className="form-control"
//                                onChange={handleChange}
//                                value={assignment.points}/>
//                     </div>
//                 </div>
//                 <div className="row mb-2">
//                     <div className="col-3">
//                         <label htmlFor="wd-assign" className="col-form-label float-end">Assign</label>
//                     </div>
//                     <div className="col">
//                         <div className="card">
//                             <div className="card-body">
//                                 <div className="row mt-4">
//                                     <label htmlFor="wd-due-date"><b>Due</b></label>
//                                     <input id="wd-due-date" type="date" className="form-control"
//                                            value={assignment.due} name="due" onChange={handleChange}/>
//                                 </div>
//                                 <div className="row my-2">
//                                     <div className="col">
//                                         <label htmlFor="wd-available-from"><b>Available from</b></label>
//                                         <input id="wd-available-from" type="date" className="form-control"
//                                                value={assignment.ava} name="available" onChange={handleChange}/>
//                                     </div>
//                                     <div className="col">
//                                         <label htmlFor="wd-available-until"><b>Until</b></label>
//                                         <input id="wd-available-until" type="date" name="until"
//                                                className="form-control" value={assignment.until}
//                                                onChange={handleChange}/>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row mt-3">
//                     <hr/>
//                 </div>
//                 <div className="mb-2">
//                     <input type="button" className="btn btn-danger float-end ms-2" value="Save"
//                            onClick={() => createAssignment()}/>
//                     <Link key={'cancel'} to={`/Kanbas/Courses/${cid}/Assignments`}>
//                         <input type="button" className="btn btn-secondary float-end" value="Cancel"/>
//                     </Link>
//                 </div>
//                 <div className="row" style={{height: '30px', width: '100%'}}></div>
//             </div>
//         </div>
//     )
// }


import { useLocation, useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as client from "./client"; // Make sure this is the correct path to your client file
import { addAssignment } from "./reducer";
import ass from "../../Database/assignment.json";

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cid, aid } = useParams();
  const { pathname } = useLocation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState("");
  const [due, setDue] = useState("");
  const [available, setAvailable] = useState("");
  const [until, setUntil] = useState("");

  const createAssignment = async () => {
    const assignment = { title, description, points, due, available, until };
    const newAssignment = await client.createAssignment(cid as string, assignment);
    dispatch(addAssignment(newAssignment));
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  useEffect(() => {
    const foundAssignment = ass.find(a => a._id === aid);
    if (foundAssignment) {
      setTitle(foundAssignment.title);
      setDescription(foundAssignment.desc);
      setPoints(foundAssignment.points);
      setDue(foundAssignment.due);
      setAvailable(foundAssignment.ava);
      setUntil(foundAssignment.until);
    } else {
      console.error("Assignment not found");
    }
  }, [aid]);

  return (
    <div id="wd-assignments-editor">
      <div className="container">
        <div className="row input-group mb-2">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" className="form-control" name="title" value={title}
                 onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="row input-group mb-2">
          <textarea id="wd-description" className="form-control" rows={10} cols={60}
                    onChange={(e) => setDescription(e.target.value)} name="description" value={description}>
          </textarea>
        </div>
        <div className="row mb-2">
          <div className="col-3">
            <label htmlFor="wd-points" className="col-form-label float-end">Points</label>
          </div>
          <div className="col">
            <input id="wd-points" type="number" name="points" className="form-control"
                   onChange={(e) => setPoints(e.target.value)}
                   value={points} />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-3">
            <label htmlFor="wd-assign" className="col-form-label float-end">Assign</label>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row mt-4">
                  <label htmlFor="wd-due-date"><b>Due</b></label>
                  <input id="wd-due-date" type="date" className="form-control"
                         value={due} name="due" onChange={(e) => setDue(e.target.value)} />
                </div>
                <div className="row my-2">
                  <div className="col">
                    <label htmlFor="wd-available-from"><b>Available from</b></label>
                    <input id="wd-available-from" type="date" className="form-control"
                           value={available} name="available" onChange={(e) => setAvailable(e.target.value)} />
                  </div>
                  <div className="col">
                    <label htmlFor="wd-available-until"><b>Until</b></label>
                    <input id="wd-available-until" type="date" name="until"
                           className="form-control" value={until}
                           onChange={(e) => setUntil(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <hr />
        </div>
        <div className="mb-2">
          <input type="button" className="btn btn-danger float-end ms-2" value="Save"
                 onClick={createAssignment} />
          <Link key={'cancel'} to={`/Kanbas/Courses/${cid}/Assignments`}>
            <input type="button" className="btn btn-secondary float-end" value="Cancel" />
          </Link>
        </div>
        <div className="row" style={{ height: '30px', width: '100%' }}></div>
      </div>
    </div>
  );
}
