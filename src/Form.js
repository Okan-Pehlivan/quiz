
import React from "react";

function Form({ formData, handleFormChange, getOuiz }) {
    return (
        <div className="Form">
            <h1>Quiz App</h1>
            <br />

            <label htmlFor="category">Question Category</label>
            <select 
                id="category"
                name="category"
                value={formData.category}
                onChange={handleFormChange}
            >
                <option value="11">Movie</option>
                <option value="12">Music</option>
            </select>
            <br />

            <label htmlFor="amount">Number of Questions</label>
            <select 
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleFormChange}
            >
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
            <br />

            <br />
            <button className="Button" onClick={getOuiz}>Start Quiz</button>
        </div>
    );
}

export default Form;
