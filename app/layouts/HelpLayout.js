import { NavLink, Outlet } from "react-router-dom";
import React from 'react';

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <center>

        <h2>Connected ✅</h2>

        <div className="mint">
         { <p><h1><MINT /></h1></p> }
       </div>
        
    
        <nav>
            <NavLink to="/Result"><button>Result</button></NavLink>
        </nav>

</center>
        <Outlet />
    </div>
  )
}