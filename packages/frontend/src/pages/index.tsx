import React, { useState } from "react";
import { NextPage } from "next";
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

type RGBSliderProps = {
  value: number;
  onChange: (value: number) => any;
};

const RGBSlider: React.FC<RGBSliderProps> = ({ value, onChange }) => {
  return (
    <Slider
      className="col-span-1 mx-3"
      min={0}
      max={255}
      onChange={(value: number) => {
        onChange(value);
      }}
      defaultValue={255}
      startPoint={0}
      value={value}
      vertical
      reverse
    />
  );
};

const RootPage: NextPage = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const rgbToHex = (r: number, g: number, b: number) => {
    return (
      "#" +
      [255 - r, 255 - g, 255 - b]
        .map((value) => {
          return ("0" + value.toString(16)).slice(-2);
        })
        .join("")
    );
  };

  return (
    <>
      <BgDiv red={red} green={green} blue={blue}>
        <div className="block mx-auto max-w-xl">
          <p className="py-8 text-center text-xl">{rgbToHex(red, green, blue)}</p>
          <div className="grid grid-cols-3 gap-1 h-80 items-center justify-items-center">
            <RGBSlider value={red} onChange={(value: number) => setRed(value)} />
            <RGBSlider value={green} onChange={(value: number) => setGreen(value)} />
            <RGBSlider value={blue} onChange={(value: number) => setBlue(value)} />
          </div>
        </div>
      </BgDiv>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2020 Team Nagatacho. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default RootPage;

const BgDiv = styled.div`
  display: block;
  height: 100vh;
  margin: 0 auto;
  background-color: ${(props: { red: number; green: number; blue: number }) =>
    `rgb(${255 - props.red},${255 - props.green},${255 - props.blue})`};
`;
