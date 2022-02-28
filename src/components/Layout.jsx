import MobileNav from "./layout/MobileNav";
import Topbar from "./layout/Topbar";
import { useState, useEffect } from "react";
import Sidebar from "./layout/Sidebar";

export default function Layout({children}) {
    const [screen, setScreen] = useState(window.innerWidth);

    const handleResize = () => {
        setScreen(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })


  return (
    <div className="layout">
        { screen <= 768 && <><Topbar /><main>{children}</main> <MobileNav/></>}
        { screen > 768 && <><Sidebar /><main>{children}</main></>}
    </div>
  )
}
