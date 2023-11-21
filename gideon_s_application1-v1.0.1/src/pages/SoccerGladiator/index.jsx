import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import SoccerGladiatorO1 from "components/SoccerGladiatorO1";

const SoccerGladiatorPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="sm:h-[2066px] md:h-[2249px] h-[2629px] md:px-5 relative w-full">
            <div className="absolute sm:h-[2066px] md:h-[2249px] h-[2361px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="absolute sm:h-[1666px] h-[1710px] md:h-[2249px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  className="absolute h-[1666px] inset-y-[0] left-[0] my-auto object-cover"
                  src="images/img_rectangle6.png"
                  alt="rectangleSix"
                />
                <div className="absolute sm:h-14 h-[131px] md:h-[244px] inset-x-[0] mx-auto top-[0] w-full">
                  <div className="flex flex-col m-auto w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[57px] items-start justify-start mx-auto p-[18px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group4.svg')",
                      }}
                    >
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[188px] w-2/5 md:w-full">
                        <Img
                          className="h-4 w-[17px]"
                          src="images/img_callfill0wght.svg"
                          alt="callfill0wght"
                        />
                        <Text
                          className="ml-4 md:ml-[0] text-[15px] text-white-A700"
                          size="txtInterRegular15"
                        >
                          0161-669-6279
                        </Text>
                        <Img
                          className="h-[19px] md:ml-[0] ml-[33px] w-[19px]"
                          src="images/img_mailfill0wght.svg"
                          alt="mailfill0wght"
                        />
                        <Text
                          className="ml-3 md:ml-[0] text-[15px] text-white-A700"
                          size="txtInterRegular15"
                        >
                          info@soccergladiators.com
                        </Text>
                        <Img
                          className="h-4 md:ml-[0] ml-[27px] md:mt-0 mt-0.5 w-[17px]"
                          src="images/img_schedulefill0.svg"
                          alt="schedulefillZero"
                        />
                        <Text
                          className="md:ml-[0] ml-[9px] text-[15px] text-white-A700"
                          size="txtInterRegular15"
                        >
                          Mon - Sat 9:00 - 17:00 Sunday CLOSED
                        </Text>
                      </div>
                    </div>
                    <div className="bg-indigo-900 flex flex-col font-dmsans items-center justify-end mb-auto ml-auto mr-[425px] mt-[-57px] p-5 w-[17%] z-[1]">
                      <div className="flex flex-col gap-2 items-start justify-start mt-1 w-[91%] md:w-full">
                        <Text
                          className="ml-0.5 md:ml-[0] text-[10px] text-white-A700 tracking-[1.40px] uppercase"
                          size="txtDMSansRegular10"
                        >
                          live match update
                        </Text>
                        <div className="font-nunito md:h-[37px] h-[62px] relative w-full">
                          <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[2%] w-[74%]">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="capitalize text-white-A700 text-xl"
                                size="txtNunitoRegular20"
                              >
                                02
                              </Text>
                              <Text
                                className="capitalize text-white-A700 text-xl"
                                size="txtNunitoRegular20"
                              >
                                04
                              </Text>
                            </div>
                          </div>
                          <div className="absolute flex flex-row inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
                            <div className="flex flex-row gap-2.5 items-center justify-start">
                              <Img
                                className="h-[37px] md:h-auto object-cover rounded-[18px] w-[36%]"
                                src="images/img_ellipse3.png"
                                alt="ellipseThree"
                              />
                              <Text
                                className="capitalize text-[10px] text-white-A700"
                                size="txtNunitoRegular10"
                              >
                                Manchester
                              </Text>
                            </div>
                            <Text
                              className="capitalize text-base text-white-A700_7e"
                              size="txtNunitoRegular16"
                            >
                              Vs
                            </Text>
                            <div className="flex flex-row gap-[11px] items-end justify-between w-[34%]">
                              <Img
                                className="h-[37px] md:h-auto object-cover rounded-[18px]"
                                src="images/img_ellipse4.png"
                                alt="ellipseFour"
                              />
                              <Text
                                className="capitalize leading-[95.90%] mb-1 mt-[13px] text-[10px] text-white-A700"
                                size="txtNunitoRegular10"
                              >
                                Chelsea
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[8%] flex md:flex-col flex-row font-dmsans md:gap-5 items-start justify-start right-[4%] w-[71%]">
                    <Text
                      className="text-base text-white-A700 tracking-[2.24px] uppercase"
                      size="txtDMSansBold16"
                    >
                      upcoming matches
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[34px] text-base text-white-A700 tracking-[2.24px] uppercase"
                      size="txtDMSansBold16"
                    >
                      DOWNLOAD
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[49px] text-base text-white-A700 tracking-[2.24px] uppercase"
                      size="txtDMSansBold16"
                    >
                      FEATURES
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[49px] text-base text-white-A700 tracking-[2.24px] uppercase"
                      size="txtDMSansBold16"
                    >
                      HOW IT WORKS
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[421px] text-base text-white-A700 tracking-[2.24px] uppercase"
                      size="txtDMSansRegular16"
                    >
                      testimonies
                    </Text>
                    <Text
                      className="ml-6 md:ml-[0] text-base text-white-A700 tracking-[2.24px] uppercase"
                      size="txtDMSansRegular16"
                    >
                      customise
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-end justify-start mx-auto w-[87%]">
                  <div className="h-[1120px] md:h-[1439px] sm:h-[1564px] relative w-[59%] md:w-full">
                    <div className="absolute bg-gradient  bottom-[0] h-[790px] inset-x-[0] mx-auto w-full"></div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[79%]">
                      <div className="flex flex-col justify-start w-full">
                        <Text
                          className="text-blue_gray-200 text-xl"
                          size="txtNunitoRegular20Bluegray200"
                        >
                          <>
                            World class virtual Fifa game competition
                            <br />
                            for top Fifa football gamers in Africa
                          </>
                        </Text>
                        <Input
                          name="button"
                          placeholder="JOIN TOURNAMENT"
                          className="font-bold font-dmsans p-0 placeholder:text-white-A700 text-left text-xl tracking-[1.40px] uppercase w-full"
                          wrapClassName="flex mr-[439px] mt-12 w-[44%]"
                          type="text"
                          suffix={
                            <Img
                              className="mt-[7px] mb-[5px] ml-[27px]"
                              src="images/img_group_18.svg"
                              alt="Group 18"
                            />
                          }
                        ></Input>
                        <Text
                          className="ml-4 md:ml-[0] mt-[265px] sm:text-[25.64px] md:text-[27.64px] text-[29.64px] text-white-A700 uppercase"
                          size="txtDMSansMedium2964"
                        >
                          Upcoming matches
                        </Text>
                        <div className="flex sm:flex-col flex-row font-nunito sm:gap-5 items-center justify-start md:ml-[0] ml-[17px] mt-[85px] w-[74%] md:w-full">
                          <Button
                            className="capitalize cursor-pointer font-bold leading-[normal] min-w-[123px] text-center text-sm"
                            color="blue_A700_01"
                          >
                            monday
                          </Button>
                          <Button className="capitalize cursor-pointer font-bold leading-[normal] min-w-[73px] ml-3 sm:ml-[0] text-center text-sm">
                            Tuesday
                          </Button>
                          <Button className="capitalize cursor-pointer font-bold leading-[normal] min-w-[55px] ml-2.5 sm:ml-[0] text-center text-sm">
                            Wed
                          </Button>
                          <Button className="cursor-pointer font-bold leading-[normal] min-w-[99px] ml-3 sm:ml-[0] text-center text-sm">
                            Thursday
                          </Button>
                          <Button className="cursor-pointer font-bold leading-[normal] min-w-[75px] ml-3.5 sm:ml-[0] text-center text-sm">
                            Friday
                          </Button>
                          <Button className="cursor-pointer font-bold leading-[normal] min-w-[84px] ml-2.5 sm:ml-[0] text-center text-sm">
                            Saturday
                          </Button>
                        </div>
                        <div className="flex flex-row font-nunito gap-[15px] items-center justify-start md:ml-[0] ml-[17px] mt-[45px] w-[33%] md:w-full">
                          <div className="flex flex-col h-[83px] items-center justify-start w-[83px]">
                            <Img
                              className="h-[83px] md:h-auto rounded-[50%] w-[83px]"
                              src="images/img_ellipse1.png"
                              alt="ellipseOne"
                            />
                          </div>
                          <Text
                            className="capitalize text-white-A700 text-xl"
                            size="txtNunitoRegular20"
                          >
                            Semi Final Match
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row font-nunito sm:gap-5 items-start justify-start md:ml-[0] ml-[25px] mt-[55px] w-[73%] md:w-full">
                          <div className="flex flex-row gap-[15px] items-start justify-start sm:mt-0 mt-1 w-[13%] sm:w-full">
                            <Img
                              className="h-5"
                              src="images/img_group6.svg"
                              alt="groupSix"
                            />
                            <Text
                              className="capitalize text-base text-indigo-200"
                              size="txtNunitoSemiBold16"
                            >
                              Date
                            </Text>
                          </div>
                          <Line className="bg-blue_gray-800 h-[33px] sm:h-px ml-12 sm:ml-[0] sm:w-full w-px" />
                          <div className="flex flex-row gap-[13px] items-center justify-center sm:ml-[0] ml-[37px] sm:mt-0 mt-[3px] w-[15%] sm:w-full">
                            <Img
                              className="h-[22px] w-[22px]"
                              src="images/img_vector.svg"
                              alt="vector"
                            />
                            <Text
                              className="capitalize text-base text-indigo-200_01"
                              size="txtNunitoSemiBold16Indigo20001"
                            >
                              Match
                            </Text>
                          </div>
                          <Line className="bg-blue_gray-800 h-[33px] sm:h-px ml-11 sm:ml-[0] sm:w-full w-px" />
                          <div className="flex flex-row gap-3.5 items-start justify-center sm:ml-[0] ml-[27px] sm:mt-0 mt-0.5 w-[22%] sm:w-full">
                            <Img
                              className="h-6"
                              src="images/img_xmlid459.svg"
                              alt="xmlid459"
                            />
                            <Text
                              className="capitalize text-base text-indigo-200_01"
                              size="txtNunitoSemiBold16Indigo20001"
                            >
                              Ticket Price
                            </Text>
                          </div>
                          <Line className="bg-blue_gray-800 h-[33px] sm:h-px sm:ml-[0] ml-[26px] sm:w-full w-px" />
                          <div className="flex flex-row gap-[15px] items-start justify-start sm:ml-[0] ml-[30px] sm:mt-0 mt-1 w-[14%] sm:w-full">
                            <Img
                              className="h-[19px]"
                              src="images/img_group7.svg"
                              alt="groupSeven"
                            />
                            <Text
                              className="capitalize text-base text-indigo-200_01"
                              size="txtNunitoSemiBold16Indigo20001"
                            >
                              Venue
                            </Text>
                          </div>
                        </div>
                        <div className="bg-blue_gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[17px] mt-[27px] p-[13px] rounded-[7px] w-[98%] md:w-full">
                          <Text
                            className="capitalize leading-[95.90%] text-base text-white-A700"
                            size="txtNunitoRegular16WhiteA700"
                          >
                            <>
                              22 July
                              <br />
                              2020
                            </>
                          </Text>
                          <div className="flex flex-col font-nunito items-center justify-start md:ml-[0] ml-[45px] w-[17%] md:w-full">
                            <div className="flex flex-col gap-[9px] items-end justify-start w-full">
                              <div className="flex flex-row gap-3.5 items-center justify-between w-[93%] md:w-full">
                                <Img
                                  className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                                  src="images/img_ellipse3_34x34.png"
                                  alt="ellipseThree_One"
                                />
                                <Text
                                  className="capitalize text-base text-white-A700"
                                  size="txtNunitoRegular16WhiteA700"
                                >
                                  Vs
                                </Text>
                                <Img
                                  className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                                  src="images/img_ellipse4_34x34.png"
                                  alt="ellipseFour_One"
                                />
                              </div>
                              <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                                <Text
                                  className="capitalize text-[10px] text-white-A700_87"
                                  size="txtNunitoRegular10WhiteA70087"
                                >
                                  Manchester
                                </Text>
                                <Text
                                  className="capitalize text-[10px] text-white-A700_87"
                                  size="txtNunitoRegular10WhiteA70087"
                                >
                                  Chelsea
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col font-nunito items-center justify-start md:ml-[0] ml-[84px]">
                            <Text
                              className="capitalize text-base text-white-A700"
                              size="txtNunitoRegular16WhiteA700"
                            >
                              $29.00
                            </Text>
                            <Text
                              className="capitalize text-[10px] text-white-A700_87"
                              size="txtNunitoRegular10WhiteA70087"
                            >
                              Base price
                            </Text>
                          </div>
                          <Text
                            className="capitalize md:ml-[0] ml-[78px] text-base text-white-A700"
                            size="txtNunitoRegular16WhiteA700"
                          >
                            Kimberly Sanders
                          </Text>
                          <Text
                            className="bg-pink-800 capitalize h-[33px] justify-center md:ml-[0] ml-[35px] mr-[5px] md:mt-0 my-3 sm:pl-5 pl-[26px] pr-2.5 py-2 rounded-[3px] text-white-A700 text-xs w-[108px]"
                            size="txtRobotoRegular12"
                          >
                            Set Reminder
                          </Text>
                        </div>
                        <SoccerGladiatorO1 className="bg-blue_gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[17px] mt-[11px] p-[13px] rounded-[7px] w-[98%] md:w-full" />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[790px] sm:h-auto md:mt-0 mt-[330px] object-cover w-[42%] md:w-full"
                    src="images/img_vvzqmlzfootbal.png"
                    alt="vvzqmlzfootbal"
                  />
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col font-nunito md:gap-10 gap-[1358px] inset-x-[0] justify-start mx-auto w-[79%]">
                <Img
                  className="h-[354px] md:h-auto mr-[753px] object-cover w-[51%]"
                  src="images/img_group4_354x755.png"
                  alt="groupFour"
                />
                <div className="h-[354px] md:ml-[0] ml-[753px] relative w-[51%] md:w-full">
                  <Img
                    className="h-[354px] m-auto object-cover w-full"
                    src="images/img_group4_354x755.png"
                    alt="groupFive"
                  />
                  <Text
                    className="absolute bottom-[7%] leading-[136.40%] left-[1%] text-2xl md:text-[22px] text-white-A700_d1 sm:text-xl w-[81%] sm:w-full"
                    size="txtNunitoRegular24"
                  >
                    Download the soccer gladiator app to keep track on the
                    progress of your team, get instant notification from the app
                    and follow up with live matches from your mobile phone.
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] h-[726px] left-[23%] w-[19%]">
              <Img
                className="h-[687px] m-auto object-cover w-[91%]"
                src="images/img_screen.png"
                alt="screen"
              />
              <Img
                className="absolute h-[726px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_iphonex.png"
                alt="iphonex"
              />
            </div>
            <div className="absolute bottom-[6%] flex sm:flex-col flex-row gap-[23px] items-center justify-center right-[20%] w-[30%]">
              <Img
                className="h-[81px]"
                src="images/img_downloadbadge.svg"
                alt="downloadbadge"
              />
              <Img
                className="h-[81px]"
                src="images/img_downloadbadge.svg"
                alt="downloadbadge_One"
              />
            </div>
            <Img
              className="absolute h-14 left-[11%] object-cover top-[3%] w-[10%]"
              src="images/img_blueminimalist.png"
              alt="blueminimalist"
            />
            <Img
              className="absolute h-[602px] object-cover right-[16%] top-[8%] w-[29%]"
              src="images/img_wgdimageoption1640w.png"
              alt="wgdimageoptionOne"
            />
          </div>
          <div className="font-nunito md:h-[2031px] sm:h-[2501px] h-[5045px] mt-[136px] md:px-5 relative w-full">
            <div className="absolute h-[4927px] inset-[0] justify-center m-auto w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col font-dmsans h-[1755px] items-center justify-start mb-[-328.5px] mx-auto p-[216px] md:px-10 sm:px-5 w-full z-[1]"
                style={{ backgroundImage: "url('images/img_features.png')" }}
              >
                <div className="flex flex-col md:gap-10 gap-[67px] items-start justify-start mb-[772px] w-3/4 md:w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800_01 tracking-[4.48px] uppercase"
                    size="txtDMSansBold32"
                  >
                    features of soccer Gladiators
                  </Text>
                  <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col items-end justify-end p-[38px] sm:px-5 rounded-[10px] w-full">
                      <div className="flex flex-col md:gap-10 gap-[67px] items-start justify-start mb-[26px] mt-[49px]">
                        <Text
                          className="leading-[89.40%] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 tracking-[-1.60px] w-[89%] sm:w-full"
                          size="txtMontserratRomanExtraBold40"
                        >
                          LIVE MACTH
                        </Text>
                        <Text
                          className="leading-[124.50%] text-blue_gray-800_02 text-xl w-full"
                          size="txtDMSansRegular20"
                        >
                          Credibly simplify real-time channels for unique
                          convergence of video live feeds to users{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-end justify-start p-12 md:px-10 sm:px-5 rounded-[10px] w-full">
                      <div className="flex flex-col items-start justify-start mb-[39px] mt-3.5">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-pink-A200_01 tracking-[-1.60px] uppercase"
                          size="txtMontserratRomanExtraBold40PinkA20001"
                        >
                          100%
                        </Text>
                        <Text
                          className="leading-[89.40%] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 tracking-[-1.60px] uppercase"
                          size="txtMontserratRomanExtraBold40"
                        >
                          <>
                            TEAM
                            <br />
                            SELECTION
                          </>
                        </Text>
                        <Text
                          className="leading-[124.50%] mt-[47px] text-blue_gray-800_02 text-xl w-full"
                          size="txtDMSansRegular20"
                        >
                          Select your favourite team and build team to suit you
                          taste for the competition , customise kits etc.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[45px] md:px-10 sm:px-5 rounded-[10px] w-full">
                      <div className="flex flex-col md:gap-10 gap-[79px] h-[260px] items-start justify-start mb-12 mt-[42px] w-[260px]">
                        <Text
                          className="leading-[89.40%] sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-900 tracking-[-1.40px] uppercase"
                          size="txtMontserratRomanExtraBold35"
                        >
                          <>
                            eARN TROPY
                            <br />
                            WINS
                          </>
                        </Text>
                        <Text
                          className="leading-[124.50%] md:ml-[0] ml-[3px] text-blue_gray-800_02 text-xl w-[99%] sm:w-full"
                          size="txtDMSansRegular20"
                        >
                          Compete in the pro league competition and earn
                          winnings and trophies that comes with prices.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:h-[1895px] h-[3501px] mt-auto mx-auto w-full">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] mx-auto p-[310px] md:px-10 sm:px-5 top-[0] w-full"
                  style={{ backgroundImage: "url('images/img_group3.png')" }}
                >
                  <div className="flex flex-col items-center justify-start mt-60 w-[63%]">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <Img
                        className="h-[147px]"
                        src="images/img_quotemark.svg"
                        alt="quotemark"
                      />
                      <div className="bg-white-A700 flex flex-col gap-[33px] justify-end md:mt-0 mt-32 p-[15px] rounded-lg shadow-bs">
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[33px] mr-[268px] mt-5 w-auto">
                          <div className="flex flex-row gap-[7px] items-start justify-start w-auto">
                            <Img
                              className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                              src="images/img_profilepic.png"
                              alt="profilepic"
                            />
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-[15px] text-black-900 w-auto"
                                size="txtNunitoBold15"
                              >
                                Chime Emma
                              </Text>
                              <Text
                                className="text-[10px] text-gray-600 w-auto"
                                size="txtNunitoRegular10Gray600"
                              >
                                ClydeLowe
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-dmsans md:ml-[0] ml-[17px] mr-8 relative w-[89%] sm:w-full">
                          <div className="flex flex-row gap-4 items-start justify-between mx-auto w-auto">
                            <Img
                              className="h-3.5 w-4"
                              src="images/img_quotemark_cyan_400.svg"
                              alt="quotemark_One"
                            />
                            <div className="flex flex-col items-center justify-start pb-[17px]">
                              <Text
                                className="leading-[32.00px] text-[15px] text-gray-900_02 w-full"
                                size="txtDMSansRegular15"
                              >
                                The prizes and rewards offered by soccer
                                gladiator were impressive, motivating all
                                participants to give their best. But beyond the
                                material rewards, the sense of achievement and
                                recognition from peers and gaming enthusiasts
                                alike was priceless.
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col font-manrope items-start justify-start ml-8 mt-[-6px] w-[159px] z-[1]">
                            <Text
                              className="text-gray-900_02 text-lg w-auto"
                              size="txtManropeBold18"
                            >
                              Emmanuel kalu
                            </Text>
                            <Text
                              className="text-blue_gray-300 text-sm w-auto"
                              size="txtManropeMedium14"
                            >
                              Gamer
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col font-manrope gap-5 h-[362px] md:h-auto items-start justify-start mb-[67px] ml-auto mr-[100px] mt-[-NaNpx] p-8 sm:px-5 rounded-lg shadow-bs w-[455px] sm:w-full z-[1]">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="flex flex-row gap-[7px] items-start justify-start w-auto">
                        <Img
                          className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                          src="images/img_profilepic.png"
                          alt="profilepic_One"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-[15px] text-gray-900_02 w-auto"
                            size="txtManropeBold15"
                          >
                            Kristin Watson
                          </Text>
                          <Text
                            className="text-[10px] text-gray-600 w-auto"
                            size="txtNunitoRegular10Gray600"
                          >
                            kristinwatson
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                      <Img
                        className="h-full w-4"
                        src="images/img_quotemark_cyan_400.svg"
                        alt="quotemark_Two"
                      />
                      <div className="flex flex-col gap-6 items-start justify-start">
                        <Text
                          className="leading-[32.00px] max-w-[340px] md:max-w-full text-base text-gray-900_02"
                          size="txtManropeRegular16"
                        >
                          <>
                            I want to extend my heartfelt gratitude to the
                            organiser&#39;s, sponsors, and fellow participants
                            of soccer gladiators. You have created an event that
                            not only celebrates gaming but also fosters a sense
                            of community
                          </>
                        </Text>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900_02 text-lg w-auto"
                            size="txtManropeBold18"
                          >
                            Kristin Watson
                          </Text>
                          <Text
                            className="text-blue_gray-300 text-sm w-auto"
                            size="txtManropeMedium14"
                          >
                            Gamer
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col font-nunito gap-[33px] justify-center mb-[261px] ml-[247px] mt-[-191px] p-8 sm:px-5 rounded-lg shadow-bs w-[24%] z-[1]">
                    <div className="flex flex-col items-center justify-start ml-4 md:ml-[0] mr-[246px] mt-[3px] w-auto">
                      <div className="flex flex-row gap-[7px] items-start justify-start w-auto">
                        <Img
                          className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                          src="images/img_profilepic.png"
                          alt="profilepic_Two"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-[15px] text-black-900 w-auto"
                            size="txtNunitoBold15"
                          >
                            Chime Emma
                          </Text>
                          <Text
                            className="text-[10px] text-gray-600 w-auto"
                            size="txtNunitoRegular10Gray600"
                          >
                            ClydeLowe
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row font-dmsans gap-4 items-start justify-start mb-3 mr-[11px] w-[98%] md:w-full">
                      <Img
                        className="h-3.5"
                        src="images/img_quotemark_cyan_400.svg"
                        alt="quotemark_Three"
                      />
                      <div className="flex flex-col items-start justify-start pb-3 pr-3 w-[92%] sm:w-full">
                        <Text
                          className="leading-[32.00px] text-base text-gray-900_02 w-full"
                          size="txtDMSansRegular16Gray90002"
                        >
                          The level of competition was intense, pushing me to my
                          limits and making every victory incredibly rewarding.
                          Facing off against skilled opponents challenged my
                          gaming abilities, fostering an environment of growth
                          and improvement.
                        </Text>
                        <div className="flex flex-col font-manrope items-start justify-start mb-4 w-auto">
                          <Text
                            className="text-gray-900_02 text-lg w-auto"
                            size="txtManropeBold18"
                          >
                            Chime Emmanuel
                          </Text>
                          <Text
                            className="text-blue_gray-300 text-sm w-auto"
                            size="txtManropeMedium14"
                          >
                            Gamer
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 h-[207px] md:h-auto items-start justify-start max-w-[634px] ml-[123px] mt-[-NaNpx] w-full z-[1]">
                    <div className="flex flex-col font-dmsans items-start justify-start w-full">
                      <Text
                        className="leading-[64.00px] max-w-[578px] md:max-w-full md:text-5xl text-[64px] text-white-A700"
                        size="txtDMSansBold64"
                      >
                        Real Stories from Our Gamers
                      </Text>
                    </div>
                    <Text
                      className="text-lg text-white-A700 w-full"
                      size="txtManropeRegular18"
                    >
                      Get inspired by these stories.
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[1895px] inset-x-[0] mx-auto object-cover w-full"
                  src="images/img_rectangle142.png"
                  alt="rectangle142"
                />
                <div className="absolute bottom-[0] flex flex-col font-dmsans inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="md:h-[1531px] sm:h-[1568px] h-[1895px] relative w-full">
                    <div className="md:h-[1531px] sm:h-[1568px] h-[1895px] m-auto w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-[1568px] inset-x-[0] items-start justify-start mx-auto p-[287px] md:px-10 sm:px-5 top-[0] w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_group6_blue_gray_900_02.png')",
                        }}
                      >
                        <div className="flex flex-col md:gap-10 gap-[77px] items-start justify-start mb-[579px] mt-3">
                          <Text
                            className="leading-[95.90%] md:text-5xl text-[70px] text-white-A700 uppercase"
                            size="txtDMSansRegular70"
                          >
                            <>
                              CUSTOMISE <br />
                              yOUR TEAM
                            </>
                          </Text>
                          <Text
                            className="md:text-5xl text-[147.39px] text-blue_gray-900_02 uppercase"
                            size="txtDMSansRegular14739"
                          >
                            uniform
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] h-[1223px] inset-x-[0] mx-auto w-full">
                        <Img
                          className="h-[1223px] m-auto object-cover w-full"
                          src="images/img_rectangle139.png"
                          alt="rectangle139"
                        />
                        <div className="absolute flex flex-col gap-10 items-center justify-start right-[7%] top-[23%] w-[27%]">
                          <div className="bg-white-A700 flex sm:flex-col flex-row gap-8 items-center justify-start md:pr-10 sm:pr-5 pr-[43px] w-full">
                            <div className="bg-green-400 h-[79px] w-[3%]"></div>
                            <Text
                              className="sm:flex-1 leading-[128.90%] text-[13px] text-black-900 tracking-[1.17px] uppercase w-[91%] sm:w-full"
                              size="txtDMSansRegular13"
                            >
                              <>
                                01. Select your tshirts, Pants, shocks ans shoes
                                from our wide collection of different categories
                              </>
                            </Text>
                          </div>
                          <div className="bg-white-A700 flex sm:flex-col flex-row gap-8 items-center justify-start md:pr-10 sm:pr-5 pr-[43px] w-full">
                            <div className="bg-orange-500 h-[79px] w-[3%]"></div>
                            <Text
                              className="sm:flex-1 leading-[128.90%] text-[13px] text-black-900 tracking-[1.17px] uppercase w-[91%] sm:w-full"
                              size="txtDMSansRegular13"
                            >
                              <>
                                02. GO TO MAKE COLLECTION AND RIGH- LEFT SWAPE
                                OVER TSHIRT, PANTS, SHOCKS AND SHOES TO SEE THE
                                BEST COMBINATION FOR YOU
                              </>
                            </Text>
                          </div>
                          <div className="bg-white-A700 flex sm:flex-col flex-row gap-8 items-center justify-start md:pr-10 sm:pr-5 pr-[70px] w-full">
                            <div className="bg-pink-A200 h-[79px] w-[3%]"></div>
                            <Text
                              className="sm:flex-1 leading-[128.90%] text-[13px] text-black-900 tracking-[1.17px] uppercase w-[90%] sm:w-full"
                              size="txtDMSansRegular13"
                            >
                              03. LOCK THE COMBINATION RESULT AND GO TO CART FOR
                              FINAL CHECKOUT
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[14%] h-[1236px] left-[6%] w-[68%] md:w-full">
                      <div className="h-[1236px] m-auto w-full">
                        <div className="absolute h-[1236px] inset-[0] justify-center m-auto w-full">
                          <div className="absolute h-[1236px] inset-y-[0] my-auto right-[13%] w-[62%] md:w-full">
                            <Img
                              className="absolute h-[1236px] inset-y-[0] left-[0] my-auto object-cover w-[79%]"
                              src="images/img_jesrsy01.png"
                              alt="jesrsyOne"
                            />
                            <Img
                              className="absolute h-[728px] object-cover right-[0] top-[15%] w-[46%]"
                              src="images/img_jesrsy02.png"
                              alt="jesrsyTwo"
                            />
                          </div>
                          <div className="absolute border border-dashed h-[54px] inset-x-[0] mx-auto rounded-[650px] top-[38%] w-full white_A700_white_A700_00_border"></div>
                        </div>
                        <Img
                          className="absolute h-4 right-[31%] top-[42%]"
                          src="images/img_vector29.svg"
                          alt="vectorTwentyNine"
                        />
                        <Img
                          className="absolute h-4 left-1/4 top-[42%]"
                          src="images/img_vector29.svg"
                          alt="vectorThirty"
                        />
                        <div className="absolute flex flex-row gap-2.5 items-start justify-center right-[35%] top-[47%] w-[11%]">
                          <div className="bg-yellow-900 h-[18px] rounded-[50%] w-[18px]"></div>
                          <Text
                            className="text-[13px] text-white-A700 tracking-[1.88px] uppercase"
                            size="txtDMSansRegular13WhiteA700"
                          >
                            jersey pants
                          </Text>
                        </div>
                        <Img
                          className="absolute h-[720px] left-[9%] object-cover top-[17%] w-1/5"
                          src="images/img_jesrsy03.png"
                          alt="jesrsyThree"
                        />
                      </div>
                      <div className="absolute flex flex-row gap-2.5 items-start justify-center left-[20%] top-[31%] w-[16%]">
                        <div className="bg-yellow-900 h-[18px] rounded-[50%] w-[18px]"></div>
                        <Text
                          className="text-[13px] text-white-A700 tracking-[1.88px] uppercase"
                          size="txtDMSansRegular13WhiteA700"
                        >
                          t-shirt collections
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700 font-montserrat md:h-[1499px] sm:h-[887px] h-[890px] inset-x-[0] mx-auto md:pr-10 sm:pr-5 pr-[182px] top-[17%] w-full">
              <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-y-[0] items-start justify-between left-[0] my-auto w-[91%]">
                <div className="flex flex-col items-center justify-start w-[36%] md:w-full">
                  <Img
                    className="h-[887px] md:h-auto object-cover w-full"
                    src="images/img_sideviewmanw.png"
                    alt="sideviewmanw"
                  />
                </div>
                <div className="md:h-[572px] h-[752px] md:mt-0 mt-[93px] relative w-[54%] md:w-full">
                  <div className="absolute bottom-[13%] flex flex-col items-center justify-start left-[0] w-[84%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[96%] md:w-full">
                          <Img
                            className="h-[41px]"
                            src="images/img_vector_indigo_700.svg"
                            alt="vector_One"
                          />
                          <Text
                            className="md:ml-[0] ml-[15px] sm:text-[31px] md:text-[33px] text-[35px] text-indigo-700 tracking-[-1.40px]"
                            size="txtMontserratRomanExtraBold35Indigo700"
                          >
                            <span className="text-indigo-700 font-montserrat text-left font-extrabold">
                              Step{" "}
                            </span>
                            <span className="text-pink-A200_02 font-montserrat text-left font-extrabold">
                              01
                            </span>
                          </Text>
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[323px] w-[29%] md:w-full">
                            <div className="flex flex-row gap-4 items-start justify-start w-full">
                              <Img
                                className="h-[41px]"
                                src="images/img_vector_indigo_700.svg"
                                alt="vector_Two"
                              />
                              <Text
                                className="sm:text-[31px] md:text-[33px] text-[35px] text-indigo-700 tracking-[-1.40px]"
                                size="txtMontserratRomanExtraBold35Indigo700"
                              >
                                <span className="text-indigo-700 font-montserrat text-left font-extrabold">
                                  Step{" "}
                                </span>
                                <span className="text-pink-A200_02 font-montserrat text-left font-extrabold">
                                  03
                                </span>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row font-dmsans sm:gap-10 items-start justify-between md:ml-[0] ml-[75px] mt-2.5 w-[89%] md:w-full">
                          <Text
                            className="mt-0.5 text-indigo-700 text-xl tracking-[-0.80px]"
                            size="txtDMSansBold20"
                          >
                            Select a Tournament
                          </Text>
                          <Text
                            className="mb-0.5 text-indigo-700 text-xl tracking-[-0.80px]"
                            size="txtDMSansBold20"
                          >
                            Create your team
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row font-montserrat sm:gap-10 gap-[315px] items-center justify-start mt-[147px] w-[96%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-[29%] sm:w-full">
                            <div className="flex flex-row gap-4 items-start justify-start w-full">
                              <Img
                                className="h-[41px]"
                                src="images/img_vector_indigo_700.svg"
                                alt="vector_Three"
                              />
                              <Text
                                className="sm:text-[31px] md:text-[33px] text-[35px] text-indigo-700 tracking-[-1.40px]"
                                size="txtMontserratRomanExtraBold35Indigo700"
                              >
                                <span className="text-indigo-700 font-montserrat text-left font-extrabold">
                                  Step{" "}
                                </span>
                                <span className="text-pink-A200_02 font-montserrat text-left font-extrabold">
                                  02
                                </span>
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[29%] sm:w-full">
                            <div className="flex flex-row gap-4 items-start justify-start w-full">
                              <Img
                                className="h-[41px]"
                                src="images/img_vector_indigo_700.svg"
                                alt="vector_Four"
                              />
                              <Text
                                className="sm:text-[31px] md:text-[33px] text-[35px] text-indigo-700 tracking-[-1.40px]"
                                size="txtMontserratRomanExtraBold35Indigo700"
                              >
                                <span className="text-indigo-700 font-montserrat text-left font-extrabold">
                                  Step{" "}
                                </span>
                                <span className="text-pink-A200_02 font-montserrat text-left font-extrabold">
                                  04
                                </span>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row font-dmsans sm:gap-10 items-center justify-between md:ml-[0] ml-[75px] mt-2.5 w-[91%] md:w-full">
                          <Text
                            className="text-indigo-700 text-xl tracking-[-0.80px]"
                            size="txtDMSansBold20"
                          >
                            Join a Competition
                          </Text>
                          <Text
                            className="text-indigo-700 text-xl tracking-[-0.80px]"
                            size="txtDMSansBold20"
                          >
                            Win exciting Prices
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col font-nunito h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[92%]">
                    <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                      <div className="flex md:flex-1 flex-col md:gap-10 gap-[141px] items-center justify-start md:mt-0 mt-[449px] w-[39%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="leading-[136.40%] text-2xl md:text-[22px] text-black-900_d1 sm:text-xl w-full"
                            size="txtNunitoRegular24Black900d1"
                          >
                            Choose from a list of tournaments{" "}
                          </Text>
                        </div>
                        <Text
                          className="leading-[136.40%] text-2xl md:text-[22px] text-black-900_d1 sm:text-xl w-full"
                          size="txtNunitoRegular24Black900d1"
                        >
                          Start a tournament or competition
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col font-roboto md:gap-10 gap-[355px] justify-start w-[54%] md:w-full">
                        <div className="flex flex-col gap-[23px] items-start justify-start w-[65%] md:w-full">
                          <Text
                            className="text-blue_gray-800_02 text-xl uppercase"
                            size="txtRobotoBold20"
                          >
                            Credibly simplify real-time{" "}
                          </Text>
                          <div className="flex flex-row gap-2.5 items-center justify-start w-[49%] md:w-full">
                            <Img
                              className="h-[41px] md:h-auto rounded-[50%] w-[41px]"
                              src="images/img_ellipse14.png"
                              alt="ellipseFourteen"
                            />
                            <Img
                              className="h-[41px] md:h-auto rounded-[50%] w-[41px]"
                              src="images/img_ellipse15.png"
                              alt="ellipseFifteen"
                            />
                            <Img
                              className="h-[41px] md:h-auto rounded-[50%] w-[41px]"
                              src="images/img_ellipse16.png"
                              alt="ellipseSixteen"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col font-nunito md:gap-10 gap-[147px] items-center justify-start md:ml-[0] ml-[125px]">
                          <Text
                            className="leading-[136.40%] text-2xl md:text-[22px] text-black-900_d1 sm:text-xl w-full"
                            size="txtNunitoRegular24Black900d1"
                          >
                            Select your team and start customising
                          </Text>
                          <Text
                            className="leading-[136.40%] text-2xl md:text-[22px] text-black-900_d1 sm:text-xl w-full"
                            size="txtNunitoRegular24Black900d1"
                          >
                            Win pricing after a successful competition
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute md:h-[370px] h-[424px] left-[26%] top-[0] w-[37%] md:w-full">
                <div className="absolute bg-blue_gray-900 h-[370px] inset-x-[0] mx-auto top-[0] w-full"></div>
                <Img
                  className="absolute bottom-[0] h-[354px] object-cover right-[5%] w-[82%]"
                  src="images/img_group4_354x755.png"
                  alt="groupFive_One"
                />
              </div>
            </div>
            <div className="absolute bg-blue_gray-900_03 bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto md:px-10 sm:px-5 px-[165px] w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[107px] w-[34%] md:w-full">
                <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-[540px] sm:w-full">
                    <div className="flex flex-col font-dmsans items-start justify-start w-auto sm:w-full">
                      <Text
                        className="leading-[64.00px] max-w-[540px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                        size="txtDMSansBold48"
                      >
                        Download Soccer Gladiator Mobile App
                      </Text>
                    </div>
                    <Text
                      className="leading-[136.40%] max-w-[540px] md:max-w-full text-2xl md:text-[22px] text-white-A700_d1 sm:text-xl"
                      size="txtNunitoRegular24"
                    >
                      Download the soccer gladiator app to keep track on the
                      progress of your team, get instant notification from the
                      app and follow up with live matches from your mobile
                      phone.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[371px] md:h-[445px] mb-[74px] md:ml-[0] ml-[74px] relative shadow-bs1 w-[15%] md:w-full">
                <Img
                  className="h-[359px] m-auto object-cover w-[88%]"
                  src="images/img_screen_359x202.png"
                  alt="screen_One"
                />
                <Img
                  className="absolute h-[371px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_iphonex.png"
                  alt="iphonex_One"
                />
              </div>
              <div className="h-[357px] ml-8 md:ml-[0] md:mt-0 mt-[88px] relative shadow-bs1 w-[15%] md:w-full">
                <Img
                  className="h-[342px] m-auto object-cover w-[88%]"
                  src="images/img_screen_342x202.png"
                  alt="screen_Two"
                />
                <Img
                  className="absolute h-[357px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_iphonex.png"
                  alt="iphonex_Two"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-manrope md:gap-10 items-start justify-between max-w-[1490px] mt-[49px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-4 items-start justify-start md:mt-0 mt-[22px] w-[62%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-1 md:ml-[0] w-full">
                <Img
                  className="h-14 md:h-auto mb-1.5 object-cover"
                  src="images/img_blueminimalist.png"
                  alt="blueminimalist_One"
                />
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-start md:mt-0 mt-9 w-auto sm:w-full">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtManropeRegular16WhiteA700"
                  >
                    About
                  </Text>
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtManropeRegular16WhiteA700"
                  >
                    Features
                  </Text>
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtManropeRegular16WhiteA700"
                  >
                    About
                  </Text>
                  <a
                    href="javascript:"
                    className="text-base text-white-A700 w-auto"
                  >
                    <Text size="txtManropeRegular16WhiteA700">Careers</Text>
                  </a>
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtManropeRegular16WhiteA700"
                  >
                    Help
                  </Text>
                  <a
                    href="javascript:"
                    className="text-base text-white-A700 w-auto"
                  >
                    <Text size="txtManropeRegular16WhiteA700">
                      Privacy Policy
                    </Text>
                  </a>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row font-dmsans sm:gap-10 items-start justify-between w-4/5 md:w-full">
                <Text
                  className="leading-[24.00px] text-gray-300 text-sm"
                  size="txtDMSansRegular14"
                >
                  Become a gamer champion participating in the FIFA Pro League
                  Challenge on SoccerGladiator
                </Text>
                <Text
                  className="sm:mt-0 mt-1.5 text-gray-300 text-sm"
                  size="txtDMSansRegular14"
                >
                  © 2023 Soccer Gladiator . All rights reserved
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start py-1 w-[16%] md:w-full">
              <Text className="text-gray-300 text-lg" size="txtManropeMedium18">
                Get the App
              </Text>
              <Img
                className="h-[67px]"
                src="images/img_downloadbadge.svg"
                alt="downloadbadge_Two"
              />
              <Img
                className="h-[67px] mb-[47px]"
                src="images/img_downloadbadge.svg"
                alt="downloadbadge_Three"
              />
            </div>
          </div>
          <Img
            className="sm:h-auto h-px mt-[2126px] object-cover md:w-full"
            src="images/img_group3.png"
            alt="vectorSixteen"
          />
        </div>
      </div>
    </>
  );
};

export default SoccerGladiatorPage;
