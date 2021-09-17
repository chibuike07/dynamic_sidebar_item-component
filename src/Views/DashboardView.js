import SideBar from "../Components/SideBar";
import Main from "../Components/Main";

const DashboardView = () => {
  return (
    <div className="d-flex justify-content-around w-100 flex-wrap">
      <SideBar />
      <Main />
    </div>
  );
};

export default DashboardView;
