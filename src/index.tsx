import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./components/App";
import GlobalStyles from "./components/GlobalStyles";

render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>,
  document.getElementById("root")
);
