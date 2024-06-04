import {IoEllipsisVertical} from "react-icons/io5";
import {FaTrash} from "react-icons/fa";
import DeleteAssignment from "./DeleteAssignment";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function LessonControlButtons({assignmentId, deleteAssignment}: {
    assignmentId: string; deleteAssignment: (assignmentId: string) => void
}) {
    return (
        <div className="float-end d-flex align-items-center">
                        <FaTrash className="text-danger mx-2 mb-1" data-bs-toggle="modal" data-bs-target={`#wd-delete-assignment-${assignmentId}-dialog`} />

            <GreenCheckmark/>
            <IoEllipsisVertical className="fs-4"/>
            <DeleteAssignment assignmentId={assignmentId} deleteAssignment={deleteAssignment} />
        </div>
    );
}