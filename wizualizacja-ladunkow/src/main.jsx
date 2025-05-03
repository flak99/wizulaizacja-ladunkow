import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SideMenu } from "./Components/SideMenu";

createRoot(document.getElementById("root")).render(
  <>
    <SideMenu></SideMenu>
  </>
);
