import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import ViewOne from "./ViewOne";
import ViewTwo from "./ViewTwo";

const Main = ({ location }) => {
  const [sideBarViews, setSideBarViews] = useState([]);

  useEffect(() => {
    // declared a query variable
    let query,
      subscribe = true;

    // get the text after the equalto symbol
    const itemToDisplay = location?.search.split("=")[1];

    // check if the text has a symbol demarcating the space and replace it with a space
    query = itemToDisplay.replaceAll("%20", " ");

    // added conditional rendering of the views
    switch (query.toLowerCase()) {
      case "view one":
        subscribe && setSideBarViews(<ViewOne />);
        break;

      case "view two":
        subscribe && setSideBarViews(<ViewTwo />);
        break;

      default:
        <ViewOne />;
        break;
    }

    return () => {
      subscribe = false;
    };
  }, [location?.search]);
  return (
    <div
      className="mt-3 p-3"
      style={{
        backgroundColor: "#b3cde0",
        fontFamily: "cursive",
        fontSize: "16pt",
        flex: 0.8,
        minWidth: "300px",
      }}
    >
      {sideBarViews}
    </div>
  );
};

export default withRouter(Main);
