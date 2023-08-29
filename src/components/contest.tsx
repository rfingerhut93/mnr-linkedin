import { useEffect, useState } from "react";
import { fetchContest } from "../api-client";
import Header from "./header";

const Contest = ({id}) => {
    // object on the state to force rerender
    const [contest, setContest] = useState(null);
    useEffect(() => {
        fetchContest(id).then((contestData) => {
            setContest(contestData);
        });
    }, [id]);


    return (
        <>
            <Header message={contest ? contest.Name : "Loading..."} />
            <div className="contest">
                <div className="title">Contest Description</div>
                {contest ? 
                    (<div className="description">{contest.description}</div>) : 
                    (<div className="loading">Loading...</div>)
                }
            </div>
        </>
    );
};

export default Contest;