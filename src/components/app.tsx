import Header from "./header";
import ContestList from "./contest-list";
import { useState } from "react";

// App will have a page variable, contestList or contest

const App = ({initialData}) => {
  const [page, setPage] = useState("contestList");
  
  const navigateToContest = () => {
    setPage("contest");
  }

  const pageContent = () => {
    switch (page) {
      case "contestList":
        return <ContestList initialContests ={initialData.contests} 
                onContestClick={navigateToContest} />;
    
      case "contest":
        return "....";
    }
  }



  return (
    <div className="container">
      <Header message="Naming Contests" />

      {pageContent()}
    </div>
  );
};

export default App;

