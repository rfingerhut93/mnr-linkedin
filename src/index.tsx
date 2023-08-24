import { createRoot } from "react-dom/client";
import axios from "axios";

import App from "./components/app";
import { API_SERVER_URL } from "./public-config";

const container = document.getElementById("app");
const root = createRoot(container);

// need an http client (use fetch or axios)
axios.get(`${API_SERVER_URL}/contests`).then((resp) => {
    console.log(resp.data);
  });


root.render(<App />);
