import { useState } from "react";
import { addContest } from "../api-client";


const AddNewContest = ({onSuccess}) => {
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const newContestData = {
            contestName: form.contestName.value,
            categoryName: form.categoryName.value,
            description: form.description.value,
          };
        
        const newContest = await addContest(newContestData);

        if (newContest?.id){
            form.reset();
            onSuccess(newContest);
        }
    };

   
    return(
            <div className="add-new-contest">
                {/* if showForm is set to false, show link. */}
                {!showForm && (
                    <div className="link" onClick={() => setShowForm(true)}>Add New Contest</div>
                )}

                {showForm && (
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="contestName" placeholder="Contest Name" />
                        <input type="text" name="categoryName" placeholder="Contest Category"/>
                        <textarea name="description" rows={5} placeholder="Contest Description" />
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>    
    );
};

export default AddNewContest;


