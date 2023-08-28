import { createRoot } from "react-dom/client";
import App from "./components/app";

const container = document.getElementById("app");
const root = createRoot(container);

    // avoid react waiting on data
    // first {} "expression" are for dynamic value 
    // then pass in an object "contests".
    // in this case, use empty array until data is loaded from contest-list component.
    root.render(
      <App initialData={(window as any).initialData} />
    );
  


