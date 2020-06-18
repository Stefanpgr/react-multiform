import React from "react";
import TopNav from "../TopNav";
import { Row, Col, CardDeck, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Redirect } from "react-router-dom";
import BusDay from "../../assets/img/bus-day.png";
import Disrupt from "../../assets/img/disrupt.png";
import TechPoint from "../../assets/img/tech-point.png";
import Approved from "../../assets/img/approved.svg";
import Currency from "../../assets/img/currency.svg";
import DigitalClock from "../../assets/img/digital-clock.svg";
import Affordable from "../../assets/img/affordable.svg";
import Returns from "../../assets/img/returns.svg";
import Portfolio from "../../assets/img/portfolio.svg";
import Secure from "../../assets/img/secure.svg";
import Coins from "../../assets/img/coins.svg";
import Investor from "../../assets/img/investor.png";
import Renter1 from "../../assets/img/renter1.png";
import Renter2 from "../../assets/img/renter2.png";
import Arm from "../../assets/img/arm.png";
import Axa from "../../assets/img/axa.png";
import Deloitte from "../../assets/img/deloitte.png";
import EkoHotel from "../../assets/img/eko-hotel.png";
import Glo from "../../assets/img/glo.png";
import Ikedc from "../../assets/img/ikedc.png";
import Kudda from "../../assets/img/kudda.png";
import Lagos from "../../assets/img/lagos.png";
import Oando from "../../assets/img/oando.png";
import Paystack from "../../assets/img/paystack.png";
import Police from "../../assets/img/police.png";
import Uber from "../../assets/img/uber.png";
import V from "../../assets/img/v.png";
import Wapic from "../../assets/img/wapic.png";
import Who from "../../assets/img/who.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="px-">
        <div className="intro-cont">
          <TopNav />

          <Row className="intro-text mx-2 mx-md-5">
            <Col md="8" lg="5">
              <h2 className="h1">Rent Payment and Investment made easy</h2>
              <p className="h6">
                Whether you’re a renter looking to pay rent in instalment or an
                investor seeking to grow your money, Kwaba is the right place
              </p>

              <div className="mt-4">
                {/* <Col sm="6"> */}
                <a href="https://rentcrowdy.com/login">
                  <button className="btn btn-invest mr-2">
                    <span className="d-inline-block">Invest</span>

                    <FontAwesomeIcon
                      style={{ fontSize: "28px" }}
                      icon={["fas", "angle-right"]}
                      className="ml-3 mr-2"
                    />
                  </button>
                </a>
                {/* </Col> */}
                {/* <Col sm="6"> */}
                <Link to="/login">
                  <button className="btn btn-rnpl">
                    <span className="d-inline-block">Rent now - Pay Later</span>

                    <FontAwesomeIcon
                      style={{ fontSize: "28px" }}
                      icon={["fas", "angle-right"]}
                      className="ml-4"
                    />
                  </button>
                </Link>
                {/* </Col> */}
              </div>
            </Col>
          </Row>
        </div>

        <h4 className="text-center font-weight-bold pt-5 pb-4">
          As featured in
        </h4>

        <Row className="justify-content-md-center px-0 mx-0">
          <Col className="col-lg-2 pt-2 pt-lg-4">
            <img src={BusDay} alt="Business Day" className="img-fluid" />
          </Col>

          <Col className="col-lg-2">
            <img src={Disrupt} alt="Disrupt" className="img-fluid" />
          </Col>

          <Col className="col-lg-2 pt-2 pt-lg-4">
            <img src={TechPoint} alt="Tech point" className="img-fluid" />
          </Col>
        </Row>

        <div className="easy-pay text-center mx-2 py-3 py-md-5 mt-4">
          <h3 className="font-weight-bold text-white">
            The easy way to pay rent
          </h3>
          <p className="h6 text-white">
            Kwaba enables renters to pay their rent in convenient instalments.{" "}
            <br />
            No more struggles with raising bulk rent.
          </p>
        </div>

        <CardDeck className="mx-md-5 card-cont">
          <Card>
            <Card.Body>
              <img src={Approved} height="100px" width="100px" alt="Approved" />
              <h6>
                Instant <br /> Pre-approval
              </h6>
              <p>
                Our smart system assesses your eligibility for an instalment
                rent payment request in minutes.
              </p>
            </Card.Body>
            <Card.Footer>
              <button className="btn">
                <span className="d-inline-block">Learn more</span>
                <FontAwesomeIcon
                  style={{ fontSize: "28px" }}
                  icon={["fas", "angle-right"]}
                  className="ml-5 mr-2"
                />
              </button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <img src={Currency} height="100px" width="100px" alt="Currency" />
              <h6>
                Convenient <br /> repayment
              </h6>
              <p>
                Once you pass our vetting process, your simple and easy
                repayment plan is setup
              </p>
            </Card.Body>
            <Card.Footer>
              <button className="btn">
                <span className="d-inline-block">Learn more</span>
                <FontAwesomeIcon
                  style={{ fontSize: "28px" }}
                  icon={["fas", "angle-right"]}
                  className="ml-5 mr-2"
                />
              </button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <img
                src={DigitalClock}
                height="100px"
                width="100px"
                alt="Digital Clock"
              />
              <h6>
                Zero <br />
                upfront cost
              </h6>
              <p>
                There’s no upfront cost to paying your rent with Kwaba. Your
                repayment begins after one month.
              </p>
            </Card.Body>
            <Card.Footer>
              <button className="btn">
                <span className="d-inline-block">Learn more</span>
                <FontAwesomeIcon
                  style={{ fontSize: "28px" }}
                  icon={["fas", "angle-right"]}
                  className="ml-5 mr-2"
                />
              </button>
            </Card.Footer>
          </Card>
        </CardDeck>

        <h3 className="text-center font-weight-bold mx-2 mt-5 pt-5">
          Invest in the rental market
        </h3>
        <p className="text-center text-muted mx-2">
          Kwaba has made investing in real estate very simple. <br /> Earn
          guaranteed returns when you help renters pay their rent.
        </p>

        <Row className="mx-0 mx-md-5 mt-5 justify-content-center">
          <Col md="6" lg="5" className="px-5 py-5">
            <h3 style={{ color: "#5B55FF" }} className="mt-lg-4">
              Affordable investments
            </h3>
            <p>
              Invest with as low as N50,000 on <br /> Kwaba to help a renter pay
              their rent
            </p>

            <button className="btn learn-more">
              <span className="d-inline-block">Learn more</span>

              <FontAwesomeIcon
                style={{ fontSize: "28px" }}
                icon={["fas", "angle-right"]}
                className="ml-4 mr-2"
              />
            </button>
          </Col>
          <Col md="6" lg="5" className="text-center">
            <img
              src={Affordable}
              alt="Affordable"
              height="300px"
              width="300px"
            />
          </Col>
        </Row>

        <Row className="mx-0 mx-md-5 mt-5 justify-content-center">
          <Col md="6" lg="5" className="px-5 py-5 order-md-2">
            <h3 style={{ color: "#5B55FF" }} className="mt-lg-4">
              High returns
            </h3>
            <p>
              Earn between 18%-24% on your <br /> investment depending on the
              volume.
            </p>

            <button className="btn learn-more">
              <span className="d-inline-block">Learn more</span>

              <FontAwesomeIcon
                style={{ fontSize: "28px" }}
                icon={["fas", "angle-right"]}
                className="ml-4 mr-2"
              />
            </button>
          </Col>
          <Col md="6" lg="5" className="text-center order-md-1">
            <img src={Returns} alt="Returns" height="300px" width="300px" />
          </Col>
        </Row>

        <Row className="mx-0 mx-md-5 mt-5 justify-content-center">
          <Col md="6" lg="5" className="px-5 py-5">
            <h3 style={{ color: "#5B55FF" }} className="mt-lg-4">
              Vetted portfolio
            </h3>
            <p>
              All the renters you assist on Kwaba are <br /> properly vetted
              high standards of KYC.
            </p>

            <button className="btn learn-more">
              <span className="d-inline-block">Learn more</span>

              <FontAwesomeIcon
                style={{ fontSize: "28px" }}
                icon={["fas", "angle-right"]}
                className="ml-4 mr-2"
              />
            </button>
          </Col>
          <Col md="6" lg="5" className="text-center">
            <img src={Portfolio} alt="Portfolio" height="300px" width="300px" />
          </Col>
        </Row>

        <div className="card-box">
          <Card>
            <Row>
              <Col md="6">
                <h2>
                  Your money <br /> is safe and secure
                </h2>
                <p>
                  Kwaba has your privacy at heart. Our platform was built with
                  Bank-Grade security features. We work with a PCIDSS compliant
                  payment processor for the security of your data. Your funds
                  are comprehensively insured and overseen by our partners who
                  are registered with the Securities and Exchange Commission
                  (SEC). Our partners are being regulated at the highest
                  standard of compliance hence your funds are safe.
                </p>
              </Col>
              <Col md="6" className="text-center p-0">
                <img src={Secure} alt="Secure" className="img-fluid" />
              </Col>
            </Row>
          </Card>
        </div>

        <div className="investor-cont">
          <h3 className="text-white mb-5">Investor of the month</h3>
          <div className="position-relative mt-4">
            <img src={Investor} alt="Investor" className="invest-img" />
            <Card>
              <p>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum"
              </p>
              <h5>Oluwaseun Obuwale</h5>
              <div className="mt-3">
                <button className="btn learn-more">
                  <span className="d-inline-block">Learn more</span>

                  <FontAwesomeIcon
                    style={{ fontSize: "28px" }}
                    icon={["fas", "angle-right"]}
                    className="ml-4 mr-2"
                  />
                </button>
              </div>

              <img src={Coins} alt="Coins" className="coins-img" />
            </Card>
          </div>
        </div>

        <div className="rent-cont px-2 px-lg-5">
          <Card className="mx-md-5 p-5">
            <h4>What renters are saying</h4>
            <Row className="mt-3">
              <Col md="6" className="mt-2">
                <Row>
                  <Col sm="3">
                    <img
                      src={Renter1}
                      alt="Renter 1"
                      className="img-fluid mb-2"
                    />
                  </Col>
                  <Col sm="9">
                    <Card>
                      <h6>Adebayo Oluwaseun</h6>
                      <p className="mb-1">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren,adipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labor
                      </p>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col md="6" className="mt-2">
                <Row>
                  <Col sm="3">
                    <img
                      src={Renter2}
                      alt="Renter 2"
                      className="img-fluid mb-2"
                    />
                  </Col>
                  <Col sm="9">
                    <Card>
                      <h6>Chioma Obinna</h6>
                      <p className="mb-1">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren,adipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labor
                      </p>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </div>

        <div className="px-4 mt-5">
          <h3
            className="text-center font-weight-bold mb-4"
            style={{ color: "#00204F" }}
          >
            Beneficiaries
          </h3>

          <Row className="mt-4 mx-5 text-center">
            <Col className="col-12 col-sm">
              <img src={Deloitte} alt="Dellotte" className="img-fluid" />
            </Col>
            <Col className="col-12 col-sm">
              <img src={EkoHotel} alt="Eko Hotel" className="img-fluid" />
            </Col>
            <Col className="col-12 col-sm">
              <img src={Glo} alt="Glo" className="img-fluid" />
            </Col>
            <Col className="col-12 col-sm">
              <img src={Ikedc} alt="Ikedc" className="img-fluid" />
            </Col>
            <Col className="col-12 col-sm">
              <img src={Kudda} alt="Kudda" className="img-fluid" />
            </Col>
          </Row>

          <Row className="mt-4 mx-5 text-center">
            <Col className="col-12 col-sm">
              <img src={Lagos} alt="Lagos" className="img-fluid" />
            </Col>
            <Col className="col-12 col-sm">
              <img src={Police} alt="Police" className="img-fluid" />
            </Col>
            <Col className="col-12 col-sm">
              <img src={Oando} alt="Oando" className="img-fluid" />
            </Col>
            <Col className="col-12 col-sm">
              <img src={Who} alt="WHO" className="img-fluid" />
            </Col>
            <Col className="col-12 col-sm">
              <img src={Uber} alt="Uber" className="img-fluid" />
            </Col>
          </Row>
        </div>

        <div className="px-4 my-5">
          <h3
            className="text-center font-weight-bold my-5"
            style={{ color: "#00204F" }}
          >
            Our Partners
          </h3>

          <Row className="my-4 mx-5 text-center">
            <Col className="col-12 col-sm">
              <img src={Arm} alt="ARM" className="img-fluid" />
            </Col>
            <Col className="col-12 col-sm">
              <img src={V} alt="V" className="img-fluid" />
            </Col>
            <Col className="col-12 col-sm">
              <img src={Axa} alt="AXA" className="img-fluid" />
            </Col>
            <Col className="col-12 col-sm">
              <img src={Wapic} alt="Wapic" className="img-fluid" />
            </Col>
            <Col className="col-12 col-sm">
              <img src={Paystack} alt="Paystack" className="img-fluid" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
