import React, { useEffect, useState } from "react";
import header_image from "../assets/header_image.png";
import header_image1 from "../assets/header_image1.png";
import header_image2 from "../assets/header_image2.png";

const images = [header_image, header_image1, header_image2];

const Main_Content = () => {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(1100);
  const [slideHeight, setSlideHeight] = useState((1100 * 720) / 1280);

  // ✅ AUTO SLIDER
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // ✅ HANDLE RESIZE - Calculate both width and height
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth < 768 ? window.innerWidth - 20 : 1100;
      const height = (width * 720) / 1280;

      setSlideWidth(width);
      setSlideHeight(height);
      setIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center mt-5 mx-auto">
      {/* Carousel Container */}
      <div
        className="overflow-hidden rounded-2xl rounded-2xl mx-auto"
        style={{
          width: slideWidth,
          height: slideHeight,
        }}
      >
        {/* Slides Wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${index * slideWidth}px)`,
            width: `${images.length * slideWidth}px`,
          }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="flex-shrink-0 rounded-2xl object-cover"
              style={{
                width: slideWidth,
                height: slideHeight,
              }}
              alt={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex gap-5 mt-3">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
              index === i ? "bg-[#146fe6]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Main_Content;
