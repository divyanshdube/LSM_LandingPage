// ** Reactstrap Imports
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
  CardLink,
  CardImg,
  Row,
  Col,
} from "reactstrap";
import { Linkedin, Facebook, Twitter, Instagram } from "react-feather";
import { Link } from "react-router-dom";
// ** Images
import img1 from "../../../assets/images/slider/Rebecca-Riley.jpg";
import img2 from "../../../assets/images/slider/john_doe.jpg";
import img3 from "../../../assets/images/slider/Anna-Doe.jpg";

const CardTitles = (cols) => {
  const colsProps = cols ? cols : { md: 4, xs: 12 };
  return (
    <Row className="match-height" style={{ justifyContent: "center" }}>
      <Col lg="3" md="6">
        <Card>
          <CardImg top src={img1} alt="Card cap" />
          <CardBody>
            <CardTitle tag="h4" style={{ textAlign: "center" }}>
              Rebecca Riley <br />
              Founder
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, dolores albucius ponderum no his, eu
              duo prima placerat. Ex paulo vidisse.
            </CardText>
            <Link>Learn More</Link>
            <br/><br/>
            rebecca@example.com
          </CardBody>
          <CardBody style={{ marginLeft: "10%" }}>
            <style jsx>{`
              .iconClass {
                transition: transform 0.3s ease, z-index 0.3s ease;
              }

              .iconClass:hover {
                transform: translateY(-10px);
                z-index: 10;
                color: blue;
              }
            `}</style>
            <Facebook className="iconClass"></Facebook>
            <Instagram
              className="iconClass"
              style={{ marginLeft: "12px" }}
            ></Instagram>
            <Twitter
              className="iconClass"
              style={{ marginLeft: "12px" }}
            ></Twitter>
            <Linkedin
              className="iconClass"
              style={{ marginLeft: "12px" }}
            ></Linkedin>
          </CardBody>
        </Card>
      </Col>
      <Col lg="3" md="6">
        <Card>
          <CardImg top src={img2} alt="Card cap" />
          <CardBody>
            <CardTitle tag="h4" style={{ textAlign: "center" }}>
              John Doe <br />
              Project Manager
            </CardTitle>
            <CardText>
              As a global, growing company, we’re able to offer rewarding
              careers that let you make a positive impact.
            </CardText>
            <Link>Learn More</Link>
            <br/><br/>
            john@example.com
          </CardBody>
          <CardBody style={{ marginLeft: "10%" }}>
            <style jsx>{`
              .iconClass {
                transition: transform 0.3s ease, z-index 0.3s ease;
              }

              .iconClass:hover {
                transform: translateY(-10px);
                z-index: 10;
                color: blue;
              }
            `}</style>
            <Facebook className="iconClass"></Facebook>
            <Instagram
              className="iconClass"
              style={{ marginLeft: "12px" }}
            ></Instagram>
            <Twitter
              className="iconClass"
              style={{ marginLeft: "12px" }}
            ></Twitter>
            <Linkedin
              className="iconClass"
              style={{ marginLeft: "12px" }}
            ></Linkedin>
          </CardBody>
        </Card>
      </Col>
      <Col lg="3" md="6">
        <Card>
          <CardImg top src={img3} alt="Card cap" />
          <CardBody>
            <CardTitle tag="h4" style={{ textAlign: "center" }}>
              Anna Doe <br />
              Consultant
            </CardTitle>
            <CardText>
              Quae cum magnifice primo dici viderentur, considerata minus
              probabantur. Traditur, inquit, ab Epicuro ratio.
            </CardText>
            <Link >Learn More</Link>
            <br/><br/>
            anna@yoursite.com
          </CardBody>
          <CardBody style={{ marginLeft: "10%" }}>
            <style jsx>{`
              .iconClass {
                transition: transform 0.3s ease, z-index 0.3s ease;
              }

              .iconClass:hover {
                transform: translateY(-10px);
                z-index: 10;
                color: blue;
              }
            `}</style>
            <Facebook className="iconClass"></Facebook>
            <Instagram
              className="iconClass"
              style={{ marginLeft: "12px" }}
            ></Instagram>
            <Twitter
              className="iconClass"
              style={{ marginLeft: "12px" }}
            ></Twitter>
            <Linkedin
              className="iconClass"
              style={{ marginLeft: "12px" }}
            ></Linkedin>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default CardTitles;
