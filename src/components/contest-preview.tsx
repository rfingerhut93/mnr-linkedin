//displays contest name and category of a SINGLE contest

const ContestPreview = ({contest}) => {
    return (
    <div className="contest-preview">
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