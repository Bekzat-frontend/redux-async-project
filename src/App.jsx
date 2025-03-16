import React from "react";
import { useSelector } from "react-redux";

function App() {
  const { courses, error, isPending } = useSelector((state) => state.courses);
  return (
    <div>
      {!isPending ? <span className="loader"></span> : ""}
      {!error ? <p>кечирес маалымат жок</p> : ""}
    </div>
  );
}

export default App;
