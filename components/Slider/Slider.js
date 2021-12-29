import React, { useState } from "react";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";

const Slider = () => {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  const nextSlide = () => {
    if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({
        index: slideAnim.index + 1,
        inProgress: true,
      });

      setTimeout(() => {
        setSlideAnim({
          index: slideAnim.index + 1,
          inProgress: false,
        });
      }, 400);
    } else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({
        index: 1,
        inProgress: true,
      });

      setTimeout(() => {
        setSlideAnim({
          index: 1,
          inProgress: false,
        });
      }, 400);
    }
  };

  const prevSlide = () => {
    if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      setSlideAnim({
        index: slideAnim.index - 1,
        inProgress: true,
      });

      setTimeout(() => {
        setSlideAnim({
          index: slideAnim.index - 1,
          inProgress: false,
        });
      }, 400);
    } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({
        index: 5,
        inProgress: true,
      });

      setTimeout(() => {
        setSlideAnim({
          index: 5,
          inProgress: false,
        });
      }, 400);
    }
  };

  const moveDot = (index) => {
    setSlideAnim({ index: index, inProgress: false });
  };

  return (
    <div className="container-slider">
      <h2 className="text-center text-xl text-red-700 m-2">
        Image Gallery Of The House
      </h2>
      {dataSlider.map((obj, index) => {
        return (
          <div>
            <div
              key={obj.id}
              className={
                slideAnim.index === index + 1 ? "slide active-anim" : "slide"
              }
            >
              {/* TODO : images.map instead this Image */}
              <img src={`/imgs/img${index + 1}.avif`} alt={obj.title} />
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 6 }).map((item, index) => {
          return (
            <div
              key={index}
              className={slideAnim.index === index + 1 ? "dot active" : "dot"}
              onClick={() => moveDot(index + 1)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
