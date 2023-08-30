import { useEffect, useState } from "react";
import { fetchContest } from "../api-client";
import Header from "./header";

const Contest = ({initialContest, onContestListClick}) => {
    // object on the state to force rerender
    const [contest, setContest] = useState(initialContest);

    useEffect(() => {
        if (!contest.names){
            fetchContest(contest.id).then((contest) => {
                setContest(contest);
            });
        }
    }, [contest.id, contest.names]);

    const handleContestListClick = (event) => {
        event.preventDefault();
        onContestListClick();
    }

    return (
        <>
            <Header message={contest.contestName} />
            <div className="contest">
                <div className="title">Contest Description</div>
                <div className="description">{contest.description}</div>
            </div>

            <a href="/" className="link" onClick={handleContestListClick}>Contest List</a>
        </>
    );
};

export default Contest;