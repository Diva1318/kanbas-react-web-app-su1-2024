import React from 'react';
import * as db from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaFilter, FaUpload, FaDownload, FaCog } from 'react-icons/fa';
import { MdArrowDownward, MdArrowDropDown, MdOutlineArrowDropDown } from 'react-icons/md';
import { BiDownArrow, BiDownArrowAlt, BiDownArrowCircle, BiImport } from 'react-icons/bi';
import { FaFileExport, FaFileImport } from 'react-icons/fa6';
import { LiaLevelDownAltSolid } from 'react-icons/lia';
import { useParams } from 'react-router';


export default function Grades () {
  const { eid,uid,gid,cid } = useParams();
  const users = db.users;
  const grades = db.grades;
  const enrollments = db.enrollments;
  const filteredEnrollments = enrollments.filter(el => el.course === cid)
  console.log(cid);

  return (
<div className="container mt-4">
<div className="d-flex justify-content-end">
            <button className="btn btn-light me-2">
              <FaFileImport /> Import 
            </button>
            <button className="btn btn-light me-2">
              <FaFileExport /> Export <MdArrowDownward/>
            </button>
            
            <button className="btn btn-light">
              <FaCog />
            </button>
          </div>
          
      <div className="row mb-3">
        <div className="col-md-6">
          <h5>Student Names</h5>
          <div className="input-group mb-3">
          <span className="input-group-text bg-white border-end-0">
              <FaSearch />
            </span>
            <input 
              type="text"
              className="form-control border-start-0"
              placeholder="Search Students..." 
            /> <span className="input-group-text  ">
            <MdOutlineArrowDropDown/>
          </span>
            
          </div>
          <button className="btn btn-secondary mb-3">
            <FaFilter /> Apply Filters
          </button> 
        </div>
        <div className="col-md-6">
          <h5>Assignment Names</h5>
          <div className="input-group mb-3">
          <span className="input-group-text bg-white border-end-0">
          <FaSearch />
        </span>
        <input 
          type="text"
          className="form-control border-start-0"
          placeholder="Search Assignments..."
        />  <span className="input-group-text  ">
        <MdOutlineArrowDropDown/>
      </span>
          </div>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th style={{textAlign:"center", marginBottom:"200px"}}>Student Name</th>
            <th>A1 SETUP<br /><small>Out of 100</small></th>
            <th>A2 HTML<br /><small>Out of 100</small></th>
            <th>A3 CSS<br /><small>Out of 100</small></th>
            <th>A4 BOOTSTRAP<br /><small>Out of 100</small></th>
          </tr>
        </thead>
        <tbody>
          {filteredEnrollments.map((el, idx) => {
            const currUser = users.find(user => user._id === el.user);
            const currGrade = grades.find(grade => grade.student === el.user);
            if (!currUser || !currGrade) return null;
            return (
              <tr key={idx}>
                <td>{currUser.firstName} {currUser.lastName}</td>
                <td>{currGrade.gradeA1}</td>
                <td>{currGrade.gradeA2}</td>
                <td>{currGrade.gradeA3}</td>
                <td>{currGrade.gradeA4}</td>
              </tr>
            );
          })}
        </tbody>

      
      </table>
    </div>
  );

}



