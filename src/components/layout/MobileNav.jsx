import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBook, faBookOpen, faMessage, faCalendar } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function MobileNav() {
    const [active, setActive] = useState(false);
  return (
    <div className="layout-mobilenav">
      <nav>
          
       
        <NavLink to="/subjects">
             <FontAwesomeIcon icon={faBook} />
             <span>Subjects</span>
           
        </NavLink>
        <NavLink to="/assignment">
          <FontAwesomeIcon icon={faBookOpen} /><span>Assignments</span>
           
        </NavLink>

         <NavLink to="/" exact="true" >
<FontAwesomeIcon icon={faHome} /><span>Home</span>
        </NavLink>
        <NavLink to="/messages">
 <FontAwesomeIcon icon={faMessage} /><span>Messages</span>
        </NavLink>
        <NavLink to="/calendar">
<FontAwesomeIcon icon={faCalendar} /><span>Calendar</span>
           
        </NavLink>
      </nav>
    
     
      
    
    </div>
  )
}
