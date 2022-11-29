import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
