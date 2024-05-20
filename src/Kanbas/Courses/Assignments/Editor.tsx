export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        
          
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
       
        <br /><br />
        <div style={{width:"100%", display:"flex"}}>
        <input id="wd-name" className="form-control mb-3"  value="A1" /> 
        <br /><br />  </div>
        <div >
        <textarea id="wd-description" className="form-control mb-3" cols={30} rows={10} style={{width:"100%", display:"flex"}}>
          The assignment is available online Submit a
           jbjjbjlink to the landing page of knknkn
        </textarea> </div>
        <br />
          <div style={{marginLeft:"100px"}}>

          <div className="d-flex align-items-center mb-3">
          <label htmlFor="wd-points" className="me-2" style={{marginLeft:"87px"}}>Points</label>
          <input id="wd-points" className="form-control" style={{ width: "100%" }} value={100} />
          </div>   
         
          <div  className="d-flex align-items-center mb-3" >
              <label htmlFor="wd-points" className="me-2" style={{whiteSpace:"nowrap"}}>Assignment Group</label>
              <select className="form-select" id="assignmentgrp">
                <option id="wd-points" className="form-control" style={{ width: "100%" }}  value="assigments">ASSIGNMENTS</option>
                </select> 
          </div>

          
            <div  className="d-flex align-items-center mb-3" >
              <label htmlFor="wd-points" className="me-2" style={{whiteSpace:"nowrap"}}>Display Grade as Group</label>
              <select className="form-select" id="assignmentgrp"style={{ width: "100%" }}>
                <option id="wd-points" className="form-control"  value="assigments">Percentage</option>
                </select> 
          </div>
         
         
            
    <div className="d-flex align-items-center mb-3">
    <label htmlFor="submissionType" style={{whiteSpace:"nowrap"}} className="me-2">Submission Type</label>
    <div className="card p-3 mt-3" style={{width:"100%"}}>
      <div>
      <select id="submissionType" className="form-select mb-3">
      <option value="online">Online</option>
    </select>
      </div>
      <h6>Online Entry Options</h6>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="textEntry"/>
        <label className="form-check-label" htmlFor="textEntry">Text Entry</label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="website"/>
        <label className="form-check-label" htmlFor="website">Website URL</label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="media"/>
        <label className="form-check-label" htmlFor="media">Media Recordings</label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="student"/>
        <label className="form-check-label" htmlFor="student">Student Annotation</label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="files"/>
        <label className="form-check-label" htmlFor="files">File Uploads</label>
      </div>
    </div>
    </div>
  
    
         
  
   
   


  <div className="d-flex align-items-center mb-3">
  <label htmlFor="assign" style={{whiteSpace:"nowrap"}} className="me-2">Assign</label>
    <div className="card p-3" style={{width:"100%"}}>
      <div className="mb-3">
        <label className="form-label" htmlFor="assign">Assign to</label>
        <input type="text" id="assign" className="form-control" placeholder="Everyone" />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="due">Due</label>
        <input type="datetime-local" id="due" className="form-control" value="2024-05-13T23:59" />
      </div>
      <div className="row">
        <div className="col">
          <label className="form-label" htmlFor="ava">Available from</label>
          <input type="date" id="ava" className="form-control" value="2024-06-05" />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="unt">Until</label>
          <input type="date" id="unt" className="form-control" value="2024-06-20" />
        </div>
      </div>
    </div>
    </div>
    
    <tr>
        <table>

        </table>
        <hr/>
        </tr>
        <tr>
        
            <td align="right">
            <button id="cancel" type="button">Cancel </button> &nbsp;
            <button id="save" type="button">Save</button>
            </td>
            </tr>
      </div>
      </div>
  );
<div>
<button id="cancel" type="button">Cancel</button>
</div>}
  
  