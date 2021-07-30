import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  // console.log("Context in room filter ", context);
  const {
    handleChange,
    type,
    capacity,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    price,
  } = context;
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {" "}
        {item}{" "}
      </option>
    );
  });
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title Title="Search Rooms" /> {/* select type */}
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type"> Room Type </label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}{" "}
          </select>{" "}
        </div>
        {/* end of select type */}
        {/* select guest  */}
        <div className="form-group">
          <label htmlFor="capacity"> Guest </label>{" "}
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}{" "}
          </select>{" "}
        </div>
        {/* end of seGuest select  type */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="Price"> Room Price ${price} </label>{" "}
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price */}
        {/* //size */}

        <div className="form-group">
          <label htmlFor="Price"> Room Size </label>
          <input
            type="number"
            name="minSize"
            id="size"
            value={minSize}
            onChange={handleChange}
            className="size-input"
          />
          <input
            type="number"
            name="maxSize"
            id="size"
            value={maxSize}
            onChange={handleChange}
            className="size-input"
          />
        </div>
        {/* //end of size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="Price"> BreakFast </label>
          </div>

          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="Price"> pets </label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
}

export default RoomsFilter;
