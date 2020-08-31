import React from "react";

const PizzaForm = ({ form, handleInput, handleFormSubmit }) => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          name="topping"
          value={form.topping}
          onChange={handleInput}
        />
      </div>
      <div className="col">
        <select
          name="size"
          value={form.size}
          className="form-control"
          onChange={handleInput}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="vegetarian"
            value={true}
            checked={form.vegetarian}
            onChange={handleInput}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="vegetarian"
            value={false}
            checked={!form.vegetarian}
            onChange={handleInput}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
