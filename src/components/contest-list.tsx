
import { useEffect, useState } from "react";
import { fetchContestList } from "../api-client";
import ContestPreview from "./contest-preview";
import Header from "./header";

// displays ALL contests-previews in database.
const ContestList = ({initialContests, onContestClick}) => {
  //once the data is rendered, update (use a state element).
  // initial contests has a default value of an empty array if no initialContests exists.
  const [contests, setContests] = useState(initialContests ?? [],);
  
  // load data to be displayed (runs on render)
  useEffect(() => {
    // only fetch if there are no initial contests
    if (!initialContests){
      // need an http client (use fetch or axios)
      fetchContestList().then((contests) => {
        // causes component to rerender.
        setContests(contests);
      });
    }
    // add dependency array [] so that the useEffect is only called if different between renders.
  }, [initialContests]);
  
    return (
      <>
        <Header message="Naming Contests" />
          <div className="contest-list">
            {/* map array to html elements */}
            {contests?.map( (contest) => {
              return (
                <ContestPreview key={contest.id} contest={contest} onClick={onContestClick}/>
              );
            })
            }
          </div>
      </>
    );
};

export default ContestList;