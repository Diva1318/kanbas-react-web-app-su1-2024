export default function Dashboard() {
    return (
      <div>
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.webp" width={200} />
            
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <img src="/images/frontend.png" width={200} /> <br />
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                CS4566  
              </a>
              <p className="wd-dashboard-course-title">
                Front End developer
              </p>
              <img src="/images/nodejs.png" width={150} /> <br />
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                CS7453  
              </a>
              <p className="wd-dashboard-course-title">
                Node.Js
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
            <div className="wd-dashboard-course"> ... </div>
            <div className="wd-dashboard-course"> ... </div>
          </div>
        </div>
      </div>
  );}
  
  