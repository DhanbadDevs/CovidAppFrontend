import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="font-small w-100" style={{ backgroundColor: "#011827" }}>
      <div className="container">
        <hr className="rgba-white-light" style={{ margin: "0 15%" }}></hr>

        <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
          <div className="col-md-8 col-12 mt-5 text-white">
            <p style={{ lineHeight: "1.7rem" }}>A volunteer effort.</p>
          </div>
        </div>
        <hr
          className="clearfix"
          style={{ margin: "10% 15% 5%;", borderColor: "white", width: "70%" }}
        ></hr>

        <div className="row pb-1">
          <div className="col-md-12 p-0">
            <div className="mb-3 text-center justify-content-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg text-white mr-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg text-white mr-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg text-white mr-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg text-white mr-4"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center py-1 text-white">
        <p className="my-0">Contact Us</p>
        <a
          className="text-white"
          href={`mailto:${process.env.REACT_APP_SUPPORT_MAIL}`}
        >
          support@helpco.in
        </a>
      </div>
      <div className="footer-copyright text-center py-1 text-white">
        &copy; 2021 Copyright:
        <NavLink to="/"> {process.env.REACT_APP_NAME}</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
