import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Before Logged In/Body/Home";
import Login from "./Login/Login";
import Browse from "./After Logged In/Browse";
import SignUp from "./Login/SignUp";
import InfoPage from "./Info/InfoPage";
import GptSearch from "./After Logged In/GPTSearch/GptSearch";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/browse/:id",
      element: <InfoPage />,
    },
    {
      path: "browse/gptsearch",
      element: <GptSearch />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
