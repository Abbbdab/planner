import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


export default function Topbar() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(location.pathname);
    useEffect(()=> {
        switch(location.pathname) {
            case "/":
                setCurrentPage("Home");
                break;
            case "/profile":
                setCurrentPage("Profile");
                break;
            case "/subjects":
                setCurrentPage("Subjects");
                break;
            case "/assignment":
                setCurrentPage("Assignments");
                break;
            case "/messages":
                setCurrentPage("Messages");
                break;
            case "/calendar":
                setCurrentPage("Calendar");
            break;
                 
        }
    })

  return (
  
    <div className="topbar">
        <h2>{ currentPage}</h2>

        <Link to="/profile">
            <FontAwesomeIcon icon={faUser} />
        </Link>
    </div>
  )
}
