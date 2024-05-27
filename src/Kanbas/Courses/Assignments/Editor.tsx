import { useParams } from "react-router";
import * as db from "../../Database";
export default function AssignmentEditor() {
  const { aid } = useParams();
  const assigments = db.assignments;
    return (
      <div id="wd-assignments-editor">
        
          
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
       
        <br /><br />
        {assigments
          .filter((assignment: any) => assignment._id === aid)
          .map((assignment: any) => (
        <><><div style={{ width: "100%", display: "flex" }}>
              <input id="wd-name" className="form-control mb-3" value={assignment.title} />
              <br /><br />  </div><div>
                <textarea id="wd-description" className="form-control mb-3" cols={4} rows={10} style={{ width: "100%", display: "flex" }}>
                  {assignment.desc}

                </textarea> </div></><br /><form>
                <div style={{ marginLeft: "100px" }}>

                  <div className="d-flex justify-content-end align-items-center mb-3">
                    <label htmlFor="wd-points" className="me-2 form-label" style={{ marginLeft: "87px" }}>Points</label>
                    <input id="wd-points" className="form-control" style={{ width: "1000px" }} value={assignment.points} />
                  </div>

                  <div className="d-flex justify-content-end align-items-center mb-3">
                    <label htmlFor="wd-points" className="me-2 form-label" style={{ whiteSpace: "nowrap" }}>Assignment Group</label>
                    <select className="form-select" style={{ width: "1000px" }} id="assignmentgrp">
                      <option id="wd-points" className="form-control" value="assigments">ASSIGNMENTS</option>
                    </select>
                  </div>


                  <div className="d-flex justify-content-end align-items-center mb-3">
                    <label htmlFor="wd-points" className="me-2 form-label" style={{ whiteSpace: "nowrap" }}>Display Grade as Group</label>
                    <select className="form-select" id="assignmentgrp" style={{ width: "1000px" }}>
                      <option id="wd-points" className="form-control" value="assigments">Percentage</option>
                    </select>
                  </div>



                  <div className="d-flex justify-content-end align-items-center mb-3">
                    <div style={{ width: "1130px" }} className="d-flex align-items-start">
                      <label htmlFor="submissionType" style={{ whiteSpace: "nowrap", marginTop: "40px" }} className=" form-label me-2">Submission Type</label>
                      <div className="card p-3 mt-3" style={{ width: "100%" }}>
                        <div>
                          <select id="submissionType" className="form-select mb-3">
                            <option value="online">Online</option>
                          </select>
                        </div>
                        <h6>Online Entry Options</h6>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="textEntry" />
                          <label className="form-check-label form-label" htmlFor="textEntry">Text Entry</label>
                        </div>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="website" />
                          <label className="form-check-label form-label" htmlFor="website">Website URL</label>
                        </div>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="media" />
                          <label className="form-check-label form-label" htmlFor="media">Media Recordings</label>
                        </div>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="student" />
                          <label className="form-check-label form-label" htmlFor="student">Student Annotation</label>
                        </div>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="files" />
                          <label className="form-check-label form-label" htmlFor="files">File Uploads</label>
                        </div>
                      </div>
                    </div>
                  </div>







                  <div className="d-flex justify-content-end align-items-center mb-3">
                    <label htmlFor="assign" style={{ whiteSpace: "nowrap" }} className="me-2">Assign</label>
                    <div className="card p-3" style={{ width: "1000px" }}>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="assign">Assign to</label>
                        <input type="text" id="assign" className="form-control" placeholder="Everyone" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="due">Due</label>
                        <input type="datetime-local" id="due" className="form-control" value={assignment.due}/>
                      </div>
                      <div className="row">
                        <div className="col">
                          <label className="form-label" htmlFor="ava">Available from</label>
                          <input type="date" id="ava" className="form-control" value={assignment.ava} />
                        </div>
                        <div className="col">
                          <label className="form-label" htmlFor="unt">Until</label>
                          <input type="date" id="unt" className="form-control" value={assignment.until} />
                        </div>
                      </div>
                    </div>
                  </div>


                  <hr />

                  <div style={{ width: "100%" }} className="d-flex justify-content-end">
                    <button id="cancel" className="btn btn-light" type="button">Cancel </button> &nbsp;
                    <button id="save" className="btn btn-danger" type="button">Save</button>
                  </div>
                </div>
              </form></> ))}
      </div>
  );
}
  
  