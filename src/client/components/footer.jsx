/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/images/logo.png";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Footer = (props) => {
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const exclusionArray = [
    "/pages/doctor-grid",
    "/pages/doctor-list",
    "/pages/video-call",
    "/pages/voice-call",
    "/pages/chat-doctor",
    "/patient/doctor-list",
    "/patient/doctor-grid",
  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }

  return (
    <>
      {!props.location.pathname.includes("/index-6") &&
        !props.location.pathname.includes("/index-7") &&
        !props.location.pathname.includes("/index-8") &&
        !props.location.pathname.includes("/index-6") &&
        !props.location.pathname.includes("/index-7") &&
        !props.location.pathname.includes("/index-8") && (
          <footer className="footer footer-one">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="footer-widget">
                      <h2 className="footer-title">Ma gasesti si pe</h2>
                      {/* <div className="subscribe-form">
                        <form action="#">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                          />
                          <button type="submit" className="btn">
                            Submit
                          </button>
                        </form>
                      </div> */}
                      <div className="social-icon">
                        <ul>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-facebook" />{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-twitter" />{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                {/* Copyright */}
                <div className="copyright">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <div className="copyright-text">
                        <p className="mb-0">
                          {" "}
                          Copyright © 2024{" "}
                          <Link
                            to="https://themeforest.net/user/dreamguys/portfolio"
                            target="_blank"
                          >
                            Cristina Zurba.
                          </Link>{" "}
                          Toate drepturile rezervate
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      {/* Copyright Menu */}
                      <div className="copyright-menu">
                        <ul className="policy-menu">
                          {/* <li>
                            <Link to="/pages/privacy-policy">
                              Privacy Policy
                            </Link>
                          </li> */}
                          <li>
                            <Link to="/pages/terms">Termeni si conditii</Link>
                          </li>
                        </ul>
                      </div>
                      {/* /Copyright Menu */}
                    </div>
                  </div>
                </div>
                {/* /Copyright */}
              </div>
            </div>
          </footer>
        )}
    </>
  );
};

export default Footer;
