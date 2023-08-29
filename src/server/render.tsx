
// has to be tsx because it will have jsx syntax

import ReactDOMServer from "react-dom/server";
import { fetchContest, fetchContestList } from "../api-client";
import App from "../components/app";


// returns initial markup for server to use
const serverRender = async (req) => {
  const { contestId } = req.params;

  const initialData = contestId
    ? { currentContest: await fetchContest(contestId) }
    : { contests: await fetchContestList() };

  // Once data is loaded, render app component
  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={initialData} />,
  );

  // data and html is included in server resposne.
  return { initialMarkup, initialData };
};

export default serverRender;
