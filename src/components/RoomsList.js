import React from "react";
import Room from "./Room";

function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>No Rooms Matched</h3>
      </div>
    );
  }
  return (
    <>
      <section className="roomslist">
        <div className="roomslist-center">
          {rooms.map((item) => (
            <Room id={item.id} room={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default RoomsList;
