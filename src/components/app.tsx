import Header from "./header";
import ContestList from "./contest-list";
import { useState } from "react";
import Contest from "./contest";

// App will have a page variable, contestList or contest

const App = ({initialData}) => {
  const [page, setPage] = useState<"contestList" | "contest">("contestList");
  const [currentContestId, setCurrentContestId] = useState<string | undefined>();
  
  // Displays specific contest data based off of received contest id
  const navigateToContest = (contestId) => {
    setPage("contest");
    setCurrentContestId(contestId);
  }

  const pageContent = () => {
    switch (page) {
      case "contestList":
        return <ContestList initialContests ={initialData.contests} 
                onContestClick={navigateToContest} />;
    
      case "contest":
        return <Contest id={currentContestId}/>;
    }
  }



  return (
    <div className="container">
      
      {pageContent()}
    </div>
  );
};

export default App;

