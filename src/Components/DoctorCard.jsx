import React from "react";
import Doctor from "../Assets/doctor.png";
import moment from "moment";
const DoctorCard = (props) => {
    return (
        <div className="col-12 mb-3">
        <div
        className="row shadow"
        style={{
            position: "relative",
                backgroundColor: "#E4F7FF",
                padding: "20px 0",
                width: "100%",
                margin: "auto",
                borderRadius: "10px",
        }}
        >
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
        <div
        style={{
            backgroundColor: "#FE9574",
                margin: "5px",
                padding: "3px 10px",
                borderRadius: "20px",
                fontSize: "14px",
        }}
        >
        {props.item.phone}
        </div>
        </div>
        <div
        className="col-8 m-0 mb-1"
        style={{
            backgroundColor: "#BFE9FB",
                marginBottom: "20px",
                width: "100%",
                borderRadius: "10px",
        }}
        >
        <p style={{ textAlign: "left", fontSize: "14px" }}>
        <span className="text-primary h3">{props?.item?.doctorName}</span>
        <br />
        <span className="text-muted"> {props?.item?.designation}</span>
        <br />
        <b>Timing :</b> {props.item.timing}
        <br />
        <b>Meeting Medium :</b> <a href={props?.item?.mediumLink} target="_blank" rel="noreferrer">{props?.item?.medium}</a>
        <br />
        <b>Address :</b> {props.item?.location?.address}
        <br />
        {props?.item?.notes}
        </p>
        {props.item.isVerified && (
            <i
            style={{
                color: "#09B22E",
                    position: "absolute",
                    top: 3,
                    right: 10,
            }}
            className="fas fa-check-circle"

            > Verified</i>
        )}
        </div>
        <i
        style={{ position: "absolute", bottom: 5, right: 10 }}
        className="fal fa-thumbs-up"
        >
        <span className="pl-1">20{props.item.votes}</span>
        </i>
        <p
        style={{
            position: "absolute",
                bottom: 0,
                left: "40%",
                margin: 0,
                fontSize: "10px",
        }}
        >
        Updated On:{moment(props.item.updatedOn).format("DD/MM/YYYY")}
        </p>
        </div>
        </div>
    );
};

export default DoctorCard;
