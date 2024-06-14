import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import {useParams} from "react-router";
import {Link, useLocation} from "react-router-dom";
import "./index.css"
export default function CoursesNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    return (
<div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
        {links.map((link) => (
<Link key={`#Kanbas/Courses/${cid}/${link}`} to={`${link}`} 
                className={`list-group-item  border border-0
                ${pathname.includes(link) ? "active" : "text-danger" }`} >
            {link}
</Link>
        ))}   
</div>
  );}