export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <tr>
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description">
          The assignment is available online
          Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Assignment Group</label>
            </td>
            <td>
              <select id="assignmentgrp">
                <option value="assigments">ASSIGNMENTS</option>
                </select> 
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Display Grade as</label>
            </td>
            <td>
              <select id="assignmentgrp">
                <option value="percentage">Percentage</option>
                </select> 
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Submission Type</label>
            </td>
            <td>
              <select id="assignmentgrp">
                <option value="online">Online</option>
                </select> 
            </td>
         
          </tr>
          <td></td>
            <td>
            <label>Online Entry Options</label>
            <br/>
            <input type="checkbox"
            name="text-entry" id="textentry"/>
            <label htmlFor="textentry">Text Entry</label><br/>
           
            <input type="checkbox"
            name="text-entry" id="website"/>
            <label htmlFor="website">Website URL</label><br/>
            
            <input type="checkbox"
            name="text-entry" id="media"/>
            <label htmlFor="media">Media Recordings</label><br/>
            
            <input type="checkbox"
            name="text-entry" id="student"/>
            <label htmlFor="student">Student Annotation</label><br/>
            
            <input type="checkbox"
            name="text-entry" id="files"/>
            <label htmlFor="files">File Uploads</label><br/>
            </td>
            
            
    <tr>
        <td align="right" valign="top"><label>Assign</label></td>
         <label htmlFor="assign">Assign</label><br/>
        <input id="assign" placeholder="Everyone" /> <br />
        <br/>
        <label htmlFor="due">Due</label><br/>
        <input type= "date" id="due" value="2024-05-13"></input><br />
        <br/>
        <tr>
            <td>
        <label htmlFor="ava">Available From</label><br/>
        </td>
        <td><label htmlFor="unt">Until</label><br/></td>
        </tr>
        <tr>
            <td><input type= "date" id="ava" value="2024-06-05"></input></td>
            <td><input type= "date" id="unt" value="2024-06-20"></input></td>
        </tr>
        
    </tr>
   
    
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
  );
<div>
<button id="cancel" type="button">Cancel</button>
</div>}
  
  