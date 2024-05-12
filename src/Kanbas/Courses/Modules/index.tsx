export default function Modules() {
    return (
      <div>
        <div>
            <button id="collapse all" type="button">Collapse All</button>
            <button id="view progress" type="button">View Progress</button>
            <select id="dropdownpublish">
                <option value="Publish All">Publish All</option>
                <option value="publish one">Publish One</option>
                <option value="Publish none">Publish None</option>
            </select>
            <button id="add module" type="button">+ Module</button>
        </div>
        <div>
            
        </div>

        {/* Collapse All button, View Progress button, etc. */}
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
            <ul className="reading">
              <li className="reading">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2</li>
                <span className="reading">Reading</span>
                </ul>
              </li>
            </ul>
            <ul className="slides">
              <li className="slides">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                <span className="reading">Reading</span>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2 Lecture - 1 ........</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course 2</li>
                  <li className="wd-content-item">Learn what is Web Development 2</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  
  