import { NavLink } from "react-router-dom";
import Box from "../Box";
import "./style.css";

const Sidebar = () => {
  return (
    <aside>
      <Box isPadding>
        <header>
          <h1>
            CORONA <b>LIVE</b>
          </h1>
        </header>
      </Box>
      <Box>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <li>국내</li>
          </NavLink>
          <NavLink
            to="/world"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <li>해외</li>
          </NavLink>
          <NavLink
            to="/vaccine"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <li>백신</li>
          </NavLink>
        </ul>
      </Box>
    </aside>
  );
};

export default Sidebar;
