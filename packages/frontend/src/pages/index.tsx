import React, { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

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
    <BgDiv red={red} green={green} blue={blue}>
      <p className="text-center">{rgbToHex(red, green, blue)}</p>
      <div className="grid grid-cols-3 gap-1 h-80 items-center justify-items-center">
        <Slider
          className="col-span-1 mx-3"
          min={0}
          max={255}
          onChange={(value: number) => {
            setRed(value);
          }}
          defaultValue={255}
          startPoint={0}
          value={red}
          vertical
          reverse
        />
        <Slider
          className="col-span-1 mx-3"
          min={0}
          max={255}
          onChange={(value: number) => {
            setGreen(value);
          }}
          defaultValue={255}
          startPoint={0}
          value={green}
          vertical
          reverse
        />
        <Slider
          className="col-span-1 mx-3"
          min={0}
          max={255}
          onChange={(value: number) => {
            setBlue(value);
          }}
          defaultValue={255}
          startPoint={0}
          value={blue}
          vertical
          reverse
        />
      </div>
    </BgDiv>
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
