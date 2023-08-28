import { useEffect, useState } from "react";
import { fetchContest } from "../api-client";

const Contest = ({id}) => {
    // object on the state to force rerender
    const [contest, setContest] = useState(null);
    useEffect(() => {
        fetchContest(id).then((contestData) => {
            setContest(contestData);
        });
    }, [id]);


    return (
        <div className="contest">
            <div className="title">Contest Description</div>
            {contest ? 
                (<div className="description">{contest.description}</div>) : 
                (<div className="loading">Loading...</div>)
            }
        </div>
    );
};

export default Contest;