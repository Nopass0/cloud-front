import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthIndex from "./auth";
import NewMessage from "./NewMessage/n_m";
import Success from "./success/success";
import Read from "./read_message/read";
import ReadMessage from "./read_message/read_message";

const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthIndex/>,
  },
  {
    path: "newmessage",
    element: <NewMessage/>,
  },
  {
    path: "success",
    element: <Success/>,
  },
  {
    path: "read",
    element: <Read/>
  },
  {
    path: "readmsg",
    element: <ReadMessage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);