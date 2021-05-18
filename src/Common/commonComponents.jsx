import React from "react";
import moment from "moment";

const IsVerified = (props) => {
  return (
    <div className="IsVerified">
      {props.isVerified && (
        <i
          style={{
            color: "#09B22E",
            position: "absolute",
            top: 3,
            right: 10,
          }}
          className="fas fa-check-circle"
        >
          Verified
        </i>
      )}
    </div>
  );
};

const LastUpdatedOn = (props) => {
  return (
    <div
      className="LastUpdatedOn"
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        margin: 0,
        fontSize: "10px",
      }}
    >
      Updated On:{moment(props.updatedOn).format("DD/MM/YYYY")}
    </div>
  );
};

const PhoneNumber = (props) => {
  return (
    <div
      className="PhoneNumber"
      style={{
        backgroundColor: "#FE9574",
        margin: "5px",
        padding: "3px 10px",
        borderRadius: "20px",
        fontSize: "14px",
      }}
    >
      {props.phone}
    </div>
  );
};

export { IsVerified, LastUpdatedOn, PhoneNumber };
