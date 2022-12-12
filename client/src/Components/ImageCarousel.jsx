import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { SliderData } from "./Imagedata";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import "../App.css";
import { useEffect } from "react";

function ImageCarousel({ slider }) {
  const [current, setCurrent] = useState(0);
  const length = slider.length;

  useEffect(() => {
    const timer = setInterval(() => {
      if (current == length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current == length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current == 0 ? length - 1 : current - 1);
  };

  if (length <= 0) {
    return null;
  }

  return (
    <Box className="slider">
      <ArrowLeftIcon className="left-arrow" onClick={nextSlide} />
      <ArrowRightIcon className="right-arrow" onClick={prevSlide} />
      {SliderData.map((e, i) => (
        <Box className={i === current ? "slide active" : "slide"} key={i}>
          {i === current && (
            <Image className="image" src={e.image} alt="carousel" />
          )}
        </Box>
      ))}
    </Box>
  );
}

export default ImageCarousel;
