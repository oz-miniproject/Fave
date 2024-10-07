import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />  
      </div>
    </div>
  );
}
