import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Project2 from "./Components/Project2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Project2 />
  </StrictMode>
);
