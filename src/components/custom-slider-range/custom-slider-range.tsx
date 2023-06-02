import React from "react";
import { Slider } from "antd";
import "./custom-slider-range.style.css";
import { SliderRangeProps } from "antd/es/slider";

export const CustomSliderRage: React.FC<SliderRangeProps> = (props) => {
  return (
    <Slider
      className="custom-slider-range"
      {...props}
      range
      railStyle={{ backgroundColor: "#E7E7EF" }}
      trackStyle={[{ backgroundColor: "#4246E9" }]}
    />
  );
};
