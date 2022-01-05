import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Car from "./components/Car";
import List from "./components/List";
import Ul from "./components/Ul";
import Datatable from "./components/Table"
import Hook from "./components/Hook";

ReactDOM.render(
  <>
    <Datatable />
    <Car age="21" eye="black" />
    <List />
    <Ul />
    <Hook />
  </>,
document.getElementById("root")
);
