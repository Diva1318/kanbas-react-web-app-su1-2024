import { AiOutlineDashboard, AiOutlineDesktop, AiOutlineFullscreenExit, AiOutlineHistory, AiOutlineLaptop, AiOutlineLogout, AiOutlineQuestion, AiOutlineQuestionCircle, AiOutlineSetting } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCalendarAltSolid, LiaCogSolid, LiaInboxSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
export default function KanbasNavigation() {
    return (
      <div id="wd-kanbas-navigation" className="list-group rounded-0">
        <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0">
        <img src="/images/NEU.png" width="75px"/> </a>

        <a id="wd-account-link" href="#/Kanbas/Account"
        className="list-group-item text-white
        bg-black text-center border-0">
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account</a>
        <a id="wd-dashboard-link" href="#/Kanbas/Dashboard" className="list-group-item text-center border-0
                   bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" /><br />Dashboard</a>
        <a id="wd-course-link" href="#/Kanbas/Courses"
        className="list-group-item text-white
        bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />Courses</a>

        <a id="wd-calendar-link" href="#/Kanbas/Calendar" 
        className="list-group-item text-white
        bg-black text-center border-0">
        <LiaCalendarAltSolid className="fs-1 text-danger" /><br />Calendar</a>
        <a id="wd-inbox-link" href="#/Kanbas/Inbox" className="list-group-item text-white
        bg-black text-center border-0">
        <LiaInboxSolid className="fs-1 text-danger" /><br />Inbox</a>
        <a id="wd-labs-link" href="#/History"
        className="list-group-item text-white
        bg-black text-center border-0">
        <AiOutlineHistory className="fs-1 text-danger" /><br />History</a>
        <a id="wd-labs-link" href="#/Studio"
        className="list-group-item text-white
        bg-black text-center border-0">
        <AiOutlineDesktop className="fs-1 text-danger" /><br />Studio</a>
        <a id="wd-labs-link" href="#/Commons"
        className="list-group-item text-white
        bg-black text-center border-0">
        <AiOutlineLogout className="fs-1 text-danger" /><br />Commons</a>
        <a id="wd-labs-link" href="#/Help"
        className="list-group-item text-white
        bg-black text-center border-0">
        <AiOutlineQuestionCircle className="fs-1 text-danger" /><br />Help</a>
      </div>
  );}
  
  