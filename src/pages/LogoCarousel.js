import React from "react";
// import "./logo-carousel.css";
import css3 from "../public/css3-logo.png";
import html5 from "../public/html5-logo (1).png";
import javascript from "../public/javascript-logo.png";
import reactjs from "../public/react-logo.png";
import nodejs from "../public/nodejs-logo.png";
import { Carousel } from "react-carousel3";

// const style = {
//   width: 190,
//   height: 80,
// };

function LogoCarousel() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #16235e 0%, #020223 100%)",
      }}
    >
      {/* <div>Hello</div> */}
      <Carousel
        height={260}
        width={780}
        yOrigin={42}
        yRadius={48}
        autoPlay={true}
      >
        <div key={1}>
          <img className="logo" alt="" src={html5} />
        </div>
        <div key={2}>
          <img className="logo" alt="" src={css3} />
        </div>
        {/* <div key={3} style={style}>
          <img className="logo" alt="" src={javascript} />
        </div> */}
        {/* <div key={4} style={style}>
          <img className="logo" alt="" src={reactjs} />
        </div> */}
        {/* <div key={5} style={style}>
          <img className="logo" alt="" src={nodejs} />
        </div> */}
      </Carousel>
    </div>
  );
}

export default LogoCarousel;
