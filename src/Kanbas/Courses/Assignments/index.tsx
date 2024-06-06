import {useParams} from "react-router";
import AssignmentsControls from "./AssignmentsControls";
import {BsGripVertical} from "react-icons/bs";
import {deleteAssignment} from "./reducer";
import {useSelector, useDispatch} from "react-redux";
import AssignmentControlButtons from "./AssignmentsControlButtons";
import {BiCaretDown, BiEdit, BiNotepad} from "react-icons/bi";
import LessonControlButtons from "./LessonControlButtons";


export default function Assignments() {
    const {cid} = useParams();
    const {assignments} = useSelector((state: any) => state.assignmentsReducer);
    console.log(assignments)
    const cidAssignments = assignments.filter((assignment: any) => assignment.course === cid);
    const dispatch = useDispatch();

    return (
        <div id="wd-assignments">
            <AssignmentsControls cid={cid!}/>
            <ul id="wd-assignment-list" className="list-group rounded-0 my-4">
                <div className="wd-title p-3 ps-2 bg-secondary mb-4">
                    <BsGripVertical className="me-2 fs-3"/>
                    <BiCaretDown className="me-2"/>
                    Assignments
                    <AssignmentControlButtons/>
                </div>

                {
                    cidAssignments && cidAssignments.map((item: any) => (
                        <li className="wd-assignment-list-item list-group-item p-3" style={{borderLeft: "4px solid green"}}>
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <BsGripVertical className="fs-4"/>
                                </div>
                                <div className="col-auto">
                                    <a className="wd-assignment-link text-dark link-underline link-underline-opacity-0"
                                       href={`#/Kanbas/Courses/${cid}/Assignments/${item._id}`}>
                                        <BiNotepad className="text-success fs-4"/>
                                    </a>

                                </div>
                                <div className="col">
                                    <a className="wd-assignment-link text-dark link-underline link-underline-opacity-0"
                                       href={`#/Kanbas/Courses/${cid}/Assignments/${item._id}`}>
                                    <h5>{item.title}</h5>
                                    </a>
                                    <p>
                                        <span className="text-danger"> Multiple Modules </span>
                                        | <strong>Available from</strong> {item.ava} | <strong>Until</strong> {item.until} | <strong>Due</strong> {item.due} | {item.points} pts
                                    </p>
                                </div>
                                <div className="col float-end">
                                    <LessonControlButtons assignmentId={item._id}
                                                          deleteAssignment={(assignmentId) => {
                                                              dispatch(deleteAssignment(assignmentId));
                                                          }}/>
                                </div>
                            </div>
                        </li>
                    ))

                }
            </ul>
        </div>
    );
}
