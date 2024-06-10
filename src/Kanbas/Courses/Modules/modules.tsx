import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons  from "./ModuleControlButtons ";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { useParams } from "react-router";
import { modules } from "../../Database";
import React, { useState, useEffect } from "react";
// import * as db from "../../Database";
import * as client from "./client";
import { setModules,deleteModule, addModule, editModule, updateModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const saveModule = async (module: any) => {
      const status = await client.updateModule(module);
      dispatch(updateModule(module));
    };
  
    const removeModule = async (moduleId: string) => {
      await client.deleteModule(moduleId);
      dispatch(deleteModule(moduleId));
    };
  
    const createModule = async (module: any) => {
      const newModule = await client.createModule(cid as string, module);
      dispatch(addModule(newModule));
    };
  
    const fetchModules = async () => {
      const modules = await client.findModulesForCourse(cid as string);
      dispatch(setModules(modules));
    };
    useEffect(() => {
      fetchModules();
    }, []);
  
return(
  <>
  <ul id="wd-modules" className="list-group rounded-0"> 
  <ModulesControls  moduleName={moduleName} setModuleName={setModuleName}
        addModule={() => {
          // dispatch(addModule({ name: moduleName, course: cid }));
          createModule({ name: moduleName, course: cid });

          setModuleName("");
        }} />

  {modules
          .filter((module: { course: string | undefined; }) => module.course === cid)
          .map((module: { editing: any; name: string | number | readonly string[] | undefined; _id: string; lessons: { name: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }[]; }) => (

            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    {!module.editing && module.name}
      { module.editing && (
        <input className="form-control w-50 d-inline-block"
               onChange={(e) => saveModule({ ...module, name: e.target.value })
            }

               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                  saveModule({ ...module, editing: false });
                 }
               }}
               value={module.name}/>
      )}

<ModuleControlButtons moduleId={module._id}
                  deleteModule={(moduleId) => { removeModule(moduleId); }}
                  editModule={(moduleId) => dispatch(updateModule(moduleId))} />

                </div>
                {module.lessons && (
                    <ul className="wd-lessons list-group rounded-0">
                        {module.lessons.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                {lesson.name}
                                <LessonControlButtons />
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ))}
    </ul></>
);}

