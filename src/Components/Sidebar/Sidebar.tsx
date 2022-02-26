import { NavLink } from 'react-router-dom';
import Box from '../Box';
import VaccineSummary from '../VaccineSummary';
import './style.css';

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
        <nav>
          <ul>
            {/* react-router의 link컴포넌트로 클릭 시 to의 path로 라우터 이동 => 페이지 이동 */}
            <NavLink
              to="/"
              // 현재 페이지의 path와 컴포넌트의 to path값이 일치하면 isActive == true 이므로 selected 클래스 추가
              className={({ isActive }) => (isActive ? 'selected' : '')}
            >
              <li>국내</li>
            </NavLink>
            <NavLink
              to="/world"
              className={({ isActive }) => (isActive ? 'selected' : '')}
            >
              <li>해외</li>
            </NavLink>
            <NavLink
              to="/vaccine"
              className={({ isActive }) => (isActive ? 'selected' : '')}
            >
              <li>백신</li>
            </NavLink>
          </ul>
        </nav>
      </Box>
      {/* <Box isPadding>
        <VaccineSummary/>
      </Box> */}
    </aside>
  );
};

export default Sidebar;
