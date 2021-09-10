import React from "react";
import { render } from "react-dom";

import { LikeOutlined } from "./icons";

const App = () => {
  return (
    <div>
      <p>Start editing to see some magic happen :)</p>
      <LikeOutlined />
    </div>
  );
};

render(<App />, document.getElementById("root"));
