import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import './index.css';
import Korea from './pages/Korea';
import Vaccine from './pages/Vaccine';
import World from './pages/World';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <section>
        {/* 라우터 설정 /:path 브라우저 path에 따라 변경되는 페이지*/}
        <Routes>
          <Route path="/" element={<Korea />} />
          <Route path="/world" element={<World />} />
          <Route path="/vaccine" element={<Vaccine />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
