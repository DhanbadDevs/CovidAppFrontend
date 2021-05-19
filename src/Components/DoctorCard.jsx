import React, { useState } from "react";
import Doctor from "../Assets/doctor.png";
import {
  LastUpdatedOn,
  IsVerified,
  PhoneNumber,
} from "../Common/commonComponents";

const IconSection = (props) => {
  return (
    <div
      className="col-4 p-0"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "stretch",
      }}
    >
      <img
        src={Doctor}
        alt="doctor icon"
        style={{ width: "50px", alignSelf: "center", marginBottom: "10px" }}
      />
      <div
        style={{
          backgroundColor: "#55C3DB",
          margin: "5px",
          padding: "3px 10px",
          borderRadius: "20px",
          fontSize: "14px",
        }}
      >
        Fees : {props.item.fees}
      </div>

      {props.item.phone
        .split(",")
        .splice(0, 2)
        .map((phone) => (
          <PhoneNumber key={phone} phone={phone} />
        ))}
    </div>
  );
};

const DetailSection = (props) => {
  const [expand, setExpand] = useState(false);
  const textStyle = {
    ellipsis: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    normal: {},
  };

  return (
    <div
      className="DetailSection col-8 m-0 mb-1"
      style={{
        backgroundColor: "#BFE9FB",
        marginBottom: "20px",
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <div style={{ textAlign: "left", fontSize: "14px" }}>
        <div className="text-center ">
          <span className="h4">{props?.item?.doctorName}</span>
          <br />

          <div
            className="text-muted"
            onClick={() => setExpand(!expand)}
            style={expand ? textStyle.normal : textStyle.ellipsis}
          >
            {props.item.qualification}
            <br />
          </div>
        </div>
        <b>Designation : </b> {props.item.designation}
        <br />
        <b>Experience : </b> {props.item.experience}
        <br />
        <b>Timing :</b> {props.item.timing}
        <br />
        <b>Meeting Medium :</b>{" "}
        <a href={props?.item?.mediumLink} target="_blank" rel="noreferrer">
          {props?.item?.medium}
        </a>
        <br />
        <b>Address :</b> {props.item?.address}
      </div>
    </div>
  );
};

const DoctorCard = (props) => {
  return (
    <div className="col-12 mb-3">
      <div
        className="row shadow pr-2"
        style={{
          position: "relative",
          backgroundColor: "#E4F7FF",
          padding: "20px 0",
          width: "100%",
          margin: "auto",
          borderRadius: "10px",
        }}
      >
        <IsVerified isVerified={props.item.isVerified} />

        <IconSection item={props.item} />

        <DetailSection item={props.item} />

        <LastUpdatedOn updatedOn={props.item.updatedOn} />
      </div>
    </div>
  );
};

export default DoctorCard;
