import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/imageCarousel.css";

const items = [
  {
    id: 1,
    src: "/images/image0.jpg",
    altText: "Slide 1",
    title: "Welcome to Coffee Bean's",
    caption: "Your perfect coffee, every time & explore your taste here.",
  },
  {
    id: 2,
    src: "/images/image1.jpg",
    altText: "Slide 1",
    title: "Quality Ingredients",
    caption:
      "Savor the richness of perfection with every sip. Our premium coffee beans promise unparalleled quality and flavor.",
  },
  {
    id: 3,
    src: "/images/image2.jpg",
    altText: "Slide 2",
    title: "A Symphony of Flavors",
    caption: "Perfectly Composed Coffee Creations.",
  },
  {
    id: 4,
    src: "/images/image3.jpg",
    altText: "Slide 3",
    title: "Professional Barista",
    caption:
      "Mastering the art of coffee, one brew at a time. Certified barista, dedicated to excellence.",
  },
];

function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
      {items.map((item) => (
        <Carousel.Item
          key={item.id}
          style={{ position: "relative", height: "600px" }}
        >
          <img
            src={item.src}
            alt={item.altText}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
          <div
            className="overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: "16px",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))",
            }}
          />
          <Carousel.Caption
            style={{
              position: "absolute",
              bottom: "80px",
              left: "32px",
              color: "white",
              textAlign: "left",
              width: "40rem",
              lineHeight: "1.5",
              fontSize: "20px",
            }}
          >
            <h2>{item.title}</h2>
            <p>{item.caption}</p>
          </Carousel.Caption>
          <div
            className="carousel-button-container"
            style={{
              position: "absolute",
              bottom: "20px",
              left: "32px",
            }}
          >
            <a
              href="/menu"
              className="btn btn-primary"
              style={{
                backgroundColor: "#9c6a42",
                border: "none",
                bottom: "24px",
                position: "relative",
                zIndex: "2",
              }}
            >
              View Our Menu
            </a>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
