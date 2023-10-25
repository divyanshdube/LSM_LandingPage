import React from "react";
import { Button } from "reactstrap";

const EventSection = () => {
  return (
    <>
      <div>
        <div style={{textAlign: "center", marginTop:"10px", }}>
          <h1>Find the Event</h1>
          <h4 style={{color:"orangered", margin:"5px 80px", padding:"10px 80px"}} >
            Live events, one-on-one coaching program, training systems and group
            workshops will help close the gap between where you are and where
            you want to be.
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            alignItems:"center",
            justifyContent:"space-around",
            margin: "30px 15px",
            padding: "15px 10px",
            background:"#fefefe",
          }}
        >
          <div>
            <h1>30</h1>
            <span>January</span>
          </div>

          <div>
            <h3>UX Workshop</h3>
            <span>Saturday</span>
          </div>

          <div>
            <h3>Central Park Brooklyn, NY 10036</h3>
            <span>10:30 - 14:00</span>
          </div>

          <div>
            <Button>VIEW MORE</Button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems:"center",
            justifyContent:"space-around",
            margin: "30px 15px",
            padding: "15px 10px",
            background:"#fefefe",
          }}
        >
          <div>
            <h1>30</h1>
            <span>January</span>
          </div>

          <div>
            <h3>UX Workshop</h3>
            <span>Saturday</span>
          </div>

          <div>
            <h3>Central Park Brooklyn, NY 10036</h3>
            <span>10:30 - 14:00</span>
          </div>

          <div>
            <Button>VIEW MORE</Button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems:"center",
            justifyContent:"space-around",
            margin: "30px 15px",
            padding: "15px 10px",
            background:"#fefefe",
          }}
        >
          <div>
            <h1>30</h1>
            <span>January</span>
          </div>

          <div>
            <h3>UX Workshop</h3>
            <span>Saturday</span>
          </div>

          <div>
            <h3>Central Park Brooklyn, NY 10036</h3>
            <span>10:30 - 14:00</span>
          </div>

          <div>
            <Button>VIEW MORE</Button>
          </div>
        </div>

        <div style={{display:"flex",justifyContent:"center", margin:"50px"}}>
          <Button style={{backgroundColor:"#d95622"}}>VIEW MORE</Button>
        </div>
      </div>
    </>
  );
};

export default EventSection;
