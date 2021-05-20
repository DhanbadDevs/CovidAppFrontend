import React from "react";
import { NavLink } from "react-router-dom";
const ItemCard = (props) => {
  const alternatingColor = ['#9DE0F5', '#daf4fd'];
  return (
    <div className="col-6">

    <div className="m-auto" style={{width: '100px'}}>
    <NavLink
      style={{ color: "#0A1048" }}
      to={props.item.to}
    >
      <div>
      <div className="rounded-corner"
        style={{width:'fit-content',padding:'5px',
          backgroundColor:window.innerWidth<500?alternatingColor[props.item.colourId]:alternatingColor[props.item.id%2],
        }}
      >
        <div
          className="d-flex flex-column justify-content-center align-items-center rounded-corner item-card "
        >
          <i style={{ fontSize: "34px" }} class={props.item.icon}></i>
        </div>
      </div>
      <h6 style={{width: "100px"}} className="text-center">{props.item.title}</h6>
      </div>
    </NavLink>
    </div>
    </div>
  );
};

export default ItemCard;
