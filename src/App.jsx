// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import Spinner from "./components/Spinner";
// async function getAll() {
//   try {
//     const response = await fetch("https://c0258028d6fa9d49.mokky.dev/kokos");
//     const data = await response.json();

//     return data;
//   } catch (error) {
//     console.log(error, "kata");
//   }
// }

// function App() {
//   const { courses, error, isPending } = useSelector((state) => state.courses);
//   useEffect(() => {
//     dispatch({ type: "SET_LOADING", payload: true });

//     getAll()
//       .then((data) => {
//         dispatch({ type: "SET_COURSES", payload: data });
//       })
//       .catch((err) => {
//         dispatch({ type: "SET_ERROR", payload: err.message });
//       })
//       .finally(() => {
//         dispatch({ type: "SET_LOADING", payload: false });
//       });
//   }, [dispatch]);
//   return (
//     <div>
//       {!isPending ? <Spinner /> : ""}
//       {!error && console.log("kata")}
//       {!courses.length === 0 ? (
//         <h1>У вас нет курсов</h1>
//       ) : (
//         <div>
//           {courses.map((items, index) => {
//             return <p key={index}>{items.color}</p>;
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "./components/Spinner";

async function getAll() {
  try {
    const response = await fetch("https://c0258028d6fa9d49.mokky.dev/kokos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, "kata");
  }
}

function App() {
  const dispatch = useDispatch();
  const { courses, error, isPending } = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });

    getAll()
      .then((data) => {
        dispatch({ type: "SET_COURSES", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "SET_ERROR", payload: err.message });
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  }, [dispatch]);

  return (
    <div>
      {isPending && <Spinner />}
      {error && <h2>{error}</h2>}
      {courses.length === 0 ? (
        <h1>У вас нет курсов</h1>
      ) : (
        <div>
          {courses.map((item, index) => (
            <p key={index}>{item.color}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
