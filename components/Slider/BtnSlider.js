import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? (
        <ArrowRightIcon className="h-10 w-10" />
      ) : (
        <ArrowLeftIcon className="h-10 w-10" />
      )}
    </button>
  );
}
