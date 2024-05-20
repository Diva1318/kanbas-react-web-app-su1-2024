import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaFilter, FaUpload, FaDownload, FaCog } from 'react-icons/fa';
import { MdArrowDownward, MdArrowDropDown, MdOutlineArrowDropDown } from 'react-icons/md';
import { BiDownArrow, BiDownArrowAlt, BiDownArrowCircle, BiImport } from 'react-icons/bi';
import { FaFileExport, FaFileImport } from 'react-icons/fa6';
import { LiaLevelDownAltSolid } from 'react-icons/lia';
import { createEnumDeclaration } from 'typescript';

const students = [
  { name: 'Jane Adams', A1: '100%', A2: '96.67%', A3: '92.18%', A4: '66.22%' },
  { name: 'Christina Allen', A1: '100%', A2: '100%', A3: '100%', A4: '100%' },
  { name: 'Samreen Ansari', A1: '100%', A2: '100%', A3: '100%', A4: '100%' },
  { name: 'Han Bao', A1: '100%', A2: '100%', A3: '88.03%', A4: '98.99%' },
  { name: 'Mahi Sai Srinivas Bobbili', A1: '100%', A2: '96.67%', A3: '98.37%', A4: '100%' },
  { name: 'Siran Cao', A1: '100%', A2: '100%', A3: '100%', A4: '100%' },
];

export default function Grades () {
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
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.A1}</td>
              <td>{student.A2}</td>
              <td>
                {student.A3 === '88.03%' ? (
                  <input type="text" className="form-control" defaultValue={student.A3} />
                ) : (
                  student.A3
                )}
              </td>
              <td>{student.A4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}



