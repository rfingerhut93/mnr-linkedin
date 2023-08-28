// has to be tsx because it will have jsx syntax

import ReactDOMServer from "react-dom/server"

import App from "../components/app";
import { fetchContestList } from "../api-client";

// returns initial markup for server to use
const serverRender = async () => {
    const contests = await fetchContestList();

    // Once data is loaded, render app component
    const initialMarkup = ReactDOMServer.renderToString(
        <App initialData={{contests}} />
    );  

    // data and html is included in server resposne.
    return {initialMarkup, initialData: {contests}};
};

export default serverRender;