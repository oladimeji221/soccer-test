import React from "react";

import { Img, Text } from "components";

const SoccerGladiatorO1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="capitalize leading-[95.90%] text-base text-white-A700 w-[8%] sm:w-full"
          size="txtNunitoRegular16WhiteA700"
        >
          {props?.date}
        </Text>
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[45px] w-[17%] md:w-full">
          <div className="flex flex-col gap-[9px] items-end justify-start w-full">
            <div className="flex flex-row gap-3.5 items-center justify-between w-[93%] md:w-full">
              <Img
                className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                src="images/img_ellipse3_1.png"
                alt="ellipseThree_Two"
              />
              <Text
                className="capitalize text-base text-white-A700"
                size="txtNunitoRegular16WhiteA700"
              >
                {props?.vsTwo}
              </Text>
              <Img
                className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                src="images/img_ellipse4_1.png"
                alt="ellipseFour_Two"
              />
            </div>
            <div className="flex flex-row gap-[35px] items-center justify-between w-full">
              <Text
                className="capitalize text-[10px] text-white-A700_87"
                size="txtNunitoRegular10WhiteA70087"
              >
                {props?.teamone}
              </Text>
              <Text
                className="capitalize text-[10px] text-white-A700_87"
                size="txtNunitoRegular10WhiteA70087"
              >
                {props?.teamtwo}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[84px]">
          <Text
            className="capitalize text-base text-white-A700"
            size="txtNunitoRegular16WhiteA700"
          >
            {props?.price}
          </Text>
          <Text
            className="capitalize text-[10px] text-white-A700_87"
            size="txtNunitoRegular10WhiteA70087"
          >
            {props?.pricelabel}
          </Text>
        </div>
        <Text
          className="capitalize md:ml-[0] ml-[78px] text-base text-white-A700"
          size="txtNunitoRegular16WhiteA700"
        >
          {props?.username}
        </Text>
        <Text
          className="bg-pink-800 capitalize h-[33px] justify-center md:ml-[0] ml-[54px] mr-[5px] md:mt-0 my-3 sm:pl-5 pl-[26px] pr-2.5 py-2 rounded-[3px] text-white-A700 text-xs w-[108px]"
          size="txtRobotoRegular12"
        >
          {props?.booknowbtnOne}
        </Text>
      </div>
    </>
  );
};

SoccerGladiatorO1.defaultProps = {
  date: (
    <>
      25 July
      <br />
      2020
    </>
  ),
  vsTwo: "Vs",
  teamone: "Manchester",
  teamtwo: "Chelsea",
  price: "$29.00",
  pricelabel: "Base price",
  username: "Belinda Bryant",
  booknowbtnOne: "Set Reminder",
};

export default SoccerGladiatorO1;
