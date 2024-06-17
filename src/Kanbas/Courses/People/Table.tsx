// import React, { useState, useEffect } from "react";
// import * as client from "./client";
// import PeopleDetails from "./Details";
// import exp from "constants";
// interface User {
//   _id: string;
//   firstName: string;
//   lastName: string;
//   loginId: string;
//   section: string;
//   role: string;
//   lastActivity: string;
//   totalActivity: string;
//   courseId: string;
// }
// const PeopleTable() : React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [role, setRole] = useState("");
//   const [name, setName] = useState("");
//   const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
//   const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);



//   const filterUsersByName = async (name: string) => {
//     setName(name);
//     if (name) {
//       const users = await client.findUsersByPartialName(name);
//       setUsers(users);
//     } else {
//       fetchUsers();
//     }
//   };

//   const filterUsersByRole = async (role: string) => {
//     setRole(role);
//     if (role) {
//       const users = await client.findUsersByRole(role);
//       setUsers(users);
//     } else {
//       fetchUsers();
//     }
//   };

//   const fetchUsers = async () => {
//     const users = await client.findAllUsers();
//     setUsers(users);
//   };
//   useEffect(() => {
//     fetchUsers();
//   }, []);
//   const handleRowClick = (userId: string, courseId: string) => {
//     console.log("jokj");
//     setSelectedUserId(userId);
//     setSelectedCourseId(courseId);
    
//   };
 
//   const handleClosePopup = () => {
//     setSelectedUserId(null);
//     setSelectedCourseId(null);
//   };

//   return (
//     <div id="wd-people-table">
//       <input onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
//              className="form-control float-start w-25 me-2" />

//       <select value={role} onChange={(e) =>filterUsersByRole(e.target.value)} className="form-select float-start w-25" >
//         <option value="">All Roles</option>        <option value="STUDENT">Students</option>
//         <option value="TA">Assistants</option>     <option value="FACULTY">Faculty</option>
//       </select>

//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user: User) => (
//             <tr key={user._id}
//               onClick={() => handleRowClick(user._id, user.courseId)}>
//               <td className="text-nowrap"> {user.firstName} {user.lastName} </td>
//               <td>{user.loginId}</td><td>{user.section}</td><td>{user.role}</td><td>{user.lastActivity}</td>
//               <td>{user.totalActivity}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedUserId && selectedCourseId && (
//     <PeopleDetails
//           uid={selectedUserId}
//           cid={selectedCourseId}
//           onClose={handleClosePopup}
//           fetchUsers={fetchUsers}
//         />
//       )}
//     </div>
//   );
// };
// export default PeopleTable;

import React, { useState, useEffect } from "react";
import * as client from "./client";
import { Link, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import PeopleDetails from "./Details";
export default function PeopleTable() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const {cid} = useParams();
  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const [name, setName] = useState("");
  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };
  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };


  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div id="wd-people-table">
      <button onClick={createUser} className="float-end btn btn-danger">
        <FaPlus className="me-2" />
        People
      </button>
      <PeopleDetails fetchUsers={fetchUsers} />

      <input onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
             className="form-control float-start w-25 me-2" />

      <select value={role} onChange={(e) =>filterUsersByRole(e.target.value)} className="form-select float-start w-25" >
        <option value="">All Roles</option>        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>     <option value="FACULTY">Faculty</option>
      </select>


      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
          </tr>
        </thead>
        {/* <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              
              <td className="text-nowrap"> 
                {user.firstName} {user.lastName}
                
                </td>
              <td>{user.loginId}</td><td>{user.section}</td><td>{user.role}</td><td>{user.lastActivity}</td>
              <td>{user.totalActivity}</td>
            </tr>
          ))}
        </tbody> */}
        <tbody>
  {users.map((user: any) => (
    <tr key={user._id}>
      <td className="text-nowrap">
        <Link to={`/Kanbas/Courses/${cid}/People/${user._id}`}>
          {user.firstName} {user.lastName}
        </Link>
      </td>
      <td>{user.loginId}</td>
      <td>{user.section}</td>
      <td>{user.role}</td>
      <td>{user.lastActivity}</td>
      <td>{user.totalActivity}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}

