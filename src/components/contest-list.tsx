import { useEffect, useState } from "react";
import ContestPreview from "./contest-preview";
import { fetchContests } from "../api-client";

// displays ALL contests-previews in database.
const ContestList = ({initialContests, onContestClick}) => {
  //once the data is rendered, update (use a state element).
  const [contests, setContests] = useState(initialContests);
  
  // load data to be displayed (runs on render)
  useEffect(() => {
    // need an http client (use fetch or axios)
    fetchContests().then((contests) => {
      // causes component to rerender.
      setContests(contests);
    });
    // add dependency array [] so that the useEffect is only called if different between renders.
  }, []);
  
    return (
        <div className="contest-list">
        {/* map array to html elements */}
        {contests.map( (contest) => {
        return <ContestPreview key={contest.id} contest={contest} onClick={onContestClick}/>
        })}
      </div>
    );
};

export default ContestList;