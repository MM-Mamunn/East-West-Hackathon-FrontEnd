import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const SharedComponent = () => {
  return (
    <>
      <Sidebar />
      <div className="ml-[300px]">
        <Outlet />
      </div>
    </>
  );
};

export default SharedComponent;
