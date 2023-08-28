// has to be tsx because it will have jsx syntax

import ReactDOMServer from "react-dom/server"

import { fetchContests } from "../api-client";
import App from "../components/app";

// returns initial markup for server to use
const serverRender = async () => {
    const contests = await fetchContests();

    // Once data is loaded, render app component
    const initialMarkup = ReactDOMServer.renderToString(
        <App initialData={{contests}} />
    );  

    // data and html is included in server resposne.
    return {initialMarkup, initialData: {contests}};
};

export default serverRender;