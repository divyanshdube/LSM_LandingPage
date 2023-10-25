import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import cardImage from "../../assets/images/logo/Rebecca-Riley-204x204.jpg";

const Courses = () => {
  const containerStyle = {
    backgroundColor: "transparent",
    backgroundImage:
      "radial-gradient(at center center, #2D353E 0%, #1F2734 100%)",
    backgroundSize: "contain",
  };

  const cardStyle = {
    display: "flex",
    flexWrap:"wrap",
    // alignItems: "center",
    // justifyContent: "center",
    // margin: "10px",
    // padding: "10px 10px",
    // border: "2px solid",
    background: cardImage,
  };

  return (
    <div className="bestsolution_container" style={containerStyle}>
      <div>
        <div>
          <section>
            <h1
              style={{
                color: "white",
                textAlign: "center",
                margin: "10px 5px",
                fontSize: "32px",
                padding: "20px",
              }}
            >
              Best Solutions For You
            </h1>
            <p
              style={{
                color: "white",
                textAlign: "center",
                margin: "15px",
                padding: "20px 10px",
              }}
            >
              We offer a wide range of services to individuals, business owners,
              and mid- to large-size organizations to help meet their business
              goals.
            </p>
          </section>
          <div className="bestSolution_card" style={cardStyle}>
            <Card
              style={{
                height: "300px",
                margin: "15px",
                padding: "10px 5px",
                // backgroundColor: "orangered",
                textAlign: "center",
              }}
            >
              <CardHeader style={{ marginTop: "50px" }}>
                <CardTitle style={{ color: "#D95622" }}>
                  Private Coaching
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText style={{ marginRight: "30px" }}>
                  Will help close the gap between where you are and where you
                  want to be.
                </CardText>
              </CardBody>
            </Card>
            <Card
              style={{
                height: "300px",
                margin: "15px",
                padding: "10px 5px",
                // backgroundColor: "orangered",
                textAlign: "center",
              }}
            >
              <CardHeader style={{ marginTop: "50px" }}>
                <CardTitle style={{ color: "#D95622" }}>
                  Private Coaching
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText style={{ marginRight: "30px" }}>
                  Will help close the gap between where you are and where you
                  want to be.
                </CardText>
              </CardBody>
            </Card>

            <Card
              style={{
                height: "300px",
                margin: "15px",
                padding: "10px 5px",
                // backgroundColor: "orangered",
                textAlign: "center",
              }}
            >
              <CardHeader style={{ marginTop: "50px" }}>
                <CardTitle style={{ color: "#D95622" }}>
                  Private Coaching
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText style={{ marginRight: "30px" }}>
                  Will help close the gap between where you are and where you
                  want to be.
                </CardText>
              </CardBody>
            </Card>

            <Card
              style={{
                height: "300px",
                margin: "15px",
                padding: "10px 5px",
                // backgroundColor: "orangered",
                textAlign: "center",
              }}
            >
              <CardHeader style={{ marginTop: "50px" }}>
                <CardTitle style={{ color: "#D95622" }}>
                  Private Coaching
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText style={{ marginRight: "30px" }}>
                  Will help close the gap between where you are and where you
                  want to be.
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"50px 50px"
            }}
          >
            <Button type="submit">View all services</Button>
          </div>
      </div>
    </div>
  );
};

export default Courses;
