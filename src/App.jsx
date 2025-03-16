import React from "react";
import { useSelector } from "react-redux";

function App() {
  const { courses, error, isPending } = useSelector((state) => {
    console.log(state);
  });
  return <div></div>;
}

export default App;
