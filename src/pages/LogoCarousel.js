import "./logo-carousel.css";
import css3 from "../public/css3-logo.png";
import html5 from "../public/html5-logo (1).png";
import javascript from "../public/javascript-logo.png";
import reactjs from "../public/react-logo.png";
import nodejs from "../public/nodejs-logo.png";
import { Carousel } from "react-carousel3";

function LogoCarousel() {
  return (
    <div className="container">
      <Carousel
        height={100}
        width={300}
        yOrigin={40}
        yRadius={45}
        autoPlay={true}
      >
        <div key={1}>
          <img className="logo" alt="" src={html5} />
        </div>
        <div key={2}>
          <img className="logo" alt="" src={css3} />
        </div>
        <div key={3}>
          <img className="logo" alt="" src={javascript} />
        </div>
        <div key={4}>
          <img className="logo" alt="" src={reactjs} />
        </div>
        <div key={5}>
          <img className="logo" alt="" src={nodejs} />
        </div>
      </Carousel>
    </div>
  );
}

export default LogoCarousel;
