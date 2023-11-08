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
  CardHeader,
} from "reactstrap";
import { Linkedin, Facebook, Twitter, Instagram } from "react-feather";
// ** Images
//   import img1 from "../../assets/images/logo/Royal-logo.png";
// import royal-logo from '../../assets/images/logo/Royal-logo.png'

const Footer = () => {
  return (
    <Row className="match-height" style={{ textAlign: "center" }}>
      <Col lg="4" md="6" style={{ marginLeft: "35%", marginTop: "8%" }}>
        <Card style={{ backgroundColor: "transparent" }}>
          {/* <CardImg top src={img1} alt="Card cap" style={{height:"130px", width:"150px", alignContent:"center", marginLeft:"30%"}}/> */}
          <CardHeader style={{justifyContent:"center"}}>
            <CardTitle tag="h1" style={{justifyContent: "center" }}>
              Address
            </CardTitle>
          </CardHeader>
          <CardBody>
            <CardText style={{ textAlign: "center" }}>
              3611 Silas Trail Suite 927 Port
              Yasmeenland, PY 20061 
              <br/><br/>Hours Mon – Sat: 8AM – 6PM Sun: 11AM – 3PM
              <br/><br/>Contacts (800) 123 45 67 email@example.com
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <CardBody style={{ marginLeft: "3%", marginTop: "1%" }}>
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
        <Twitter className="iconClass" style={{ marginLeft: "12px" }}></Twitter>
        <Linkedin
          className="iconClass"
          style={{ marginLeft: "12px" }}
        ></Linkedin>
      </CardBody>
    </Row>
  );
};

export default Footer;
