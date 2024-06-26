import * as client from "./client";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./reducer";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { error } from "console";
import { findUserById } from "./client";
export default function Profile() {
    // const function Profile() {
  const [profile, setProfile] = useState<any>({});
//   const {uid} = useParams;
//   const [findUserById] = async(uid:any)
// const [profile, setProfile] = useState({
//     username: "", password: "",
//     firstName: "", lastName: "", dob: "", email: "", role: "USER"});

  const navigate = useNavigate();
  const dispatch = useDispatch();
//   const currentUser = useSelector((state: any) => state.account.currentUser);
// const fetchProfile = async () => {

    // try {
    //     console.log("bdwhbvawh");
    //   const account = await client.profile();
    //   console.log(account);
    //   setProfile(account);
    // } catch (err: any) {
    //     console.log(err);
    //   navigate("/Kanbas/Account/Signin");
    // }
//     const fetchProfile = async () => {
       
//         const profile = await client.profile();
//         setProfile(profile);
    
//   };
  const fetchProfile = async () => {
    const account = await client.profile();
    console.log(account);
    setProfile(account);
  };


  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

//   useEffect(() => { fetchProfile(); }, []);
// useEffect(() => {
//     if (uid) {
//       findUserById(uid);
//     } else {
//       fetchProfile();
//     }
//   }, []);

  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <h3> User Name : </h3> <input value={profile.username}  onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/> <br /> <br />
          <h3> Password : </h3> <input value={profile.password}  onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/> <br /> <br />
          <label> First Name : </label>  <input value={profile.firstName} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/> <br/> <br />
          <label> Last Name : </label> <input value={profile.lastName}  onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/> <br/> <br />
          <label> DOB : </label>  <input value={profile.dob} onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/> <br /> <br />
          <label> Email : </label> <input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })}/> <br /> <br />
          <select onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select> <br />
          <button onClick={signout} className="btn btn-danger w-100">
            Sign out
         </button>

        </div>
      )}
    </div>
  );
}

// export default Profile;



