import React from "react";
import moment from "moment";

const IsVerified = (props) => {
  return (
    <div className="IsVerified">
      {props.isVerified && <p className="verified" >
        <i  class="fas fa-check-circle"></i>
            Verified
        </p>}
    </div>
  );
};

const LastUpdatedOn = (props) => {
  return (
    <p style={{position:'absolute',bottom:0,left:'40%',margin:0,fontSize:'10px'}}>Updated On:{moment(props.updatedOn).format('DD/MM/YYYY') }</p>
  );
};

const PhoneNumber = (props) => {
  return (
    <a href={`tel:${props.phone}`} style={{color:'#000',textDecoration:'none',zIndex:10}}>
   <div 
      className="PhoneNumber text-center"
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
    </a>
  );
};

export { IsVerified, LastUpdatedOn, PhoneNumber };
