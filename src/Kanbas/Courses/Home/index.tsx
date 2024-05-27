import ModuleControlButtons from "../Modules/ModuleControlButtons ";
import ModulesControls from "../Modules/ModulesControls";
import Modules from "../Modules/modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home" className="d-flex">
      
  <div className="flex-fill me-5">
          <Modules /> 
          </div>
  <div className="d-none d-xl-block">

          <CourseStatus />
          </div>
</div>

  );
}
