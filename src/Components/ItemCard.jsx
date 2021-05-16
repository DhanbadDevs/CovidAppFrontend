import React from "react";
import { NavLink } from "react-router-dom";
const ItemCard = (props) => {
  const alternatingColor = ['#9DE0F5', '#daf4fd'];
  return (
    <div className="col-auto  m-auto p-1">
    <NavLink
      style={{ color: "#0A1048" }}
      to={props.item.to}
    >
      <div>
      <div className="rounded-corner p-3 "
        style={{
          backgroundColor:window.innerWidth<500?alternatingColor[props.item.colourId]:alternatingColor[props.item.id%2],
        }}
      >
        <div
          className="d-flex flex-column justify-content-center align-items-center rounded-corner item-card "
        >
          <i style={{ fontSize: "65px" }} class={props.item.icon}></i>
        </div>
      </div>
      <h6 className="text-center">{props.item.title}</h6>
      </div>
    </NavLink>
    </div>
  );
};

export default ItemCard;
