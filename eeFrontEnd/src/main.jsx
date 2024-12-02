import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./root/Root.jsx";
import { UserProvider } from "./auth/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <Root />
    </UserProvider>
  </StrictMode>
);
