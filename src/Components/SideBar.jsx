import { sideBarMenu } from "../util/containers";
import { withRouter } from "react-router-dom";

const SideBar = ({ history }) => {
  const handleItemClick = ({ target: { innerText } }) => {
    return history.push({
      pathname: "/",
      search: `?=${innerText}`,
    });
  };

  return (
    <section
      className="text-center mt-3"
      style={{
        backgroundColor: "#6497b1",
        flex: 0.3,
        height: "97.2vh",
        minWidth: "300px",
      }}
    >
      <h2 className="text-capitalize text-white p-2">menu list</h2>
      <ul className="list-group">
        {sideBarMenu &&
          sideBarMenu.map((views, idx) => (
            <li
              key={idx}
              className="list-group-item list-group-item-action text-capitalize mt-3"
              onClick={(e) => handleItemClick(e)}
              style={{ cursor: "pointer" }}
            >
              {views}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default withRouter(SideBar);
