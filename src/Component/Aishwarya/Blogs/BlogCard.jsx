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
// import { Fragment } from 'react';

// ** Images
// import img1 from "@src/assets/images/slider/04.jpg";
import img2 from "@src/assets/images/slider/03.jpg";
import img1 from "../../../assets/images/slider/blog-image1.jpg";
// import img2 from "../../../assets/images/slider/blog-image2.jpg";
import img3 from "../../../assets/images/slider/blog-image3.jpg";
import img4 from "../../../assets/images/slider/blog-image4.jpg";

const BlogCard = (cols) => {
  const colsProps = cols ? cols : { md: 4, xs: 12 };
  return (
    <div>
      <Row className="match-height" style={{ justifyContent: "center" }}>
        <Col lg="4" md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h4">How to Hire Only Professional?</CardTitle>
              <CardSubtitle className="text-muted">Subtitle</CardSubtitle>
            </CardBody>
            <img className="img-fluid" src={img3} alt="Card cap" />
            <CardBody>
              {/* <CardText>Bear claw sesame snaps gummies chocolate.</CardText> */}
              <CardLink href="/" onClick={(e) => e.preventDefault()}>
                Blog Link
              </CardLink>
              <CardLink href="/" onClick={(e) => e.preventDefault()}>
                Share
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h4">How to Achieve Higher Profits?</CardTitle>
              <CardSubtitle className="text-muted">Subtitle</CardSubtitle>
            </CardBody>
            <img className="img-fluid" src={img3} alt="Card cap" />
            <CardBody>
              {/* <CardText>Bear claw sesame snaps gummies chocolate.</CardText> */}
              <CardLink href="/" onClick={(e) => e.preventDefault()}>
                Blog Link
              </CardLink>
              <CardLink href="/" onClick={(e) => e.preventDefault()}>
                Share
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        {/* <Col lg="3" md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h4">Blog Title</CardTitle>
              <CardSubtitle className="text-muted">Subtitle</CardSubtitle>
            </CardBody>
            <img className="img-fluid" src={img2} alt="Card cap" />
            <CardBody>
              <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
              <CardLink href="/" onClick={(e) => e.preventDefault()}>
                Blog Link
              </CardLink>
              <CardLink href="/" onClick={(e) => e.preventDefault()}>
                Share
              </CardLink>
            </CardBody>
          </Card>
        </Col> */}
      </Row>
      <Row className="match-height" style={{ justifyContent: "center" }}>
        <Col lg="4" md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h4">Top 5 Tips to Improve Your Department.</CardTitle>
              <CardSubtitle className="text-muted">Subtitle</CardSubtitle>
            </CardBody>
            <img className="img-fluid" src={img3} alt="Card cap" />
            <CardBody>
              {/* <CardText>Bear claw sesame snaps gummies chocolate.</CardText> */}
              <CardLink href="/" onClick={(e) => e.preventDefault()}>
                Blog Link
              </CardLink>
              <CardLink href="/" onClick={(e) => e.preventDefault()}>
                Share
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h4">How to Hire Only Professional?</CardTitle>
              <CardSubtitle className="text-muted">Subtitle</CardSubtitle>
            </CardBody>
            <img className="img-fluid" src={img3} alt="Card cap" />
            <CardBody>
              {/* <CardText>Bear claw sesame snaps gummies chocolate.</CardText> */}
              <CardLink href="/" onClick={(e) => e.preventDefault()}>
                Blog Link
              </CardLink>
              <CardLink href="/" onClick={(e) => e.preventDefault()}>
                Share
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        {/* <Col lg="3" md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h4">Blog Title</CardTitle>
              <CardSubtitle className="text-muted">Subtitle</CardSubtitle>
            </CardBody>
            <img className="img-fluid" src={img2} alt="Card cap" />
            <CardBody>
              <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
              <CardLink href="/" onClick={(e) => e.preventDefault()}>
                Blog Link
              </CardLink>
              <CardLink href="/" onClick={(e) => e.preventDefault()}>
                Share
              </CardLink>
            </CardBody>
          </Card>
        </Col> */}
        
      </Row>
      <div className="d-flex justify-content-center">
      <Button className="me-1" color="primary" type="submit" style={{justifyContent:'center'}}>
          Learn More
        </Button>
        </div>
        <br/>
      </div>
    
  );
};

export default BlogCard;
