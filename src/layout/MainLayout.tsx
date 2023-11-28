import { Outlet } from "react-router-dom";
import Topbar from "../components/topbar/Topbar";

export interface IMainLayoutProps {}

export default function MainLayout(props: IMainLayoutProps) {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
}
