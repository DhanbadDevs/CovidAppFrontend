import React from "react";
import { NavLink } from "react-router-dom";
const ItemCard = (props) => {
  const alternatingColor = ['#9DE0F5', '#daf4fd'];

  return (
    <NavLink
      style={{ color: "#0A1048" }}
      to={props.item.to}

      className="col-auto m-auto p-1"
    >
      <div className="itemCard"
        style={{
          backgroundColor: alternatingColor[props.item.colourId],
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid #7CC1F4",
            borderRadius: "20px",
            width: "150px",
            height: "150px",
          }}
        >
          <i style={{ fontSize: "65px" }} class={props.item.icon}></i>
        </div>
      </div>
      <h6 className="text-center">{props.item.title}</h6>
    </NavLink>
  );
};

export default ItemCard;
