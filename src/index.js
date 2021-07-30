import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { RoomProvider } from "./context";
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <RoomProvider>
    <App />
  </RoomProvider>,
  document.getElementById("root")
);

registerServiceWorker();
