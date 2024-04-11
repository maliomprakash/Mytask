import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import  {store}  from "./store";
// import Table from "./component/Table";
import TABLE from "./component/Table";

function App() {
  return (
    <>
      <Provider store={store}>
        <TABLE/>
      </Provider>
    </>
  );
}

export default App;
