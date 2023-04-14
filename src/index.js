import React from "react";
import ReactDOM from "react-dom";
import BoardView from "./components/BoardView";
import "./main.scss";
import "./styles.scss";

const App = () => {
  return (
    <div>
      <BoardView />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
