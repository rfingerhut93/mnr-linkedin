import { useEffect, useState } from "react";
import Contest from "./contest";
import ContestList from "./contest-list";

// App will have a page variable, contestList or contest

const App = ({ initialData }) => {
  const [page, setPage] = useState<"contestList" | "contest">(
    initialData.currentContest ? "contest" : "contestList",
  );
  const [currentContest, setCurrentContest] = useState<
    object | undefined
  >(initialData.currentContest);

  useEffect(() => {
    // hook into history api to make page rerender.
    window.onpopstate = (event) => {
      // determine which page to render based off of state of event.
      const newPage = event.state?.contestId
        ? "contest"
        : "contestList";
      setPage(newPage);
      setCurrentContest({ id: event.state?.contestId });
    };
  }, []);

  // Displays specific contest data based off of received contest id
  const navigateToContest = (contestId: any) => {
    // navigate to new url
    window.history.pushState(
      { contestId },
      "",
      `/contest/${contestId}`,
    );
    setPage("contest");
    setCurrentContest({ id: contestId });
  };

  const pageContent = () => {
    switch (page) {
      case "contestList":
        return (
          <ContestList
            initialContests={initialData.contests}
            onContestClick={navigateToContest}
          />
        );
      case "contest":
        return <Contest initialContest={currentContest} />;
    }
  };

  return <div className="container">{pageContent()}</div>;
};

export default App;
