import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="breed">Medication Name:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="breed"
        list="breeds"
        type="text"
        className="form-control"
        placeholder="Type Medication to begin"
        id="breed"
      />
      <datalist id="breeds">
        {props.breeds.map(breed => <option value={breed} key={breed} />)}
      </datalist>
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search Medication
      </button>
    </div>
  </form>
);

export default SearchForm;
