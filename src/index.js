import React from "react";
import ReactDOM from "react-dom";
import Show from "./Show";
import shows from "./shows.json";

ReactDOM.render(
  <Show shows={shows} />,

  document.getElementById("root")
);
