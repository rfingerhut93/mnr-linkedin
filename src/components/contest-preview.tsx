//displays contest name and category of a SINGLE contest

const ContestPreview = ({contest, onClick}) => {

    // Will display info of one contest when clicked
    const handleClick = (event) => {
        event.preventDefault();

        // Navigate to a new view by using a state element to make react rerender.
        // pass in specific contest id.
        onClick(contest.id);
    }
    return (
    <div className="contest-preview" onClick={handleClick}>
        <div className="category">
            {contest.categoryName}
        </div>
        <div className="contest">
            {contest.contestName}
        </div>
    </div>
  );
};

export default ContestPreview;