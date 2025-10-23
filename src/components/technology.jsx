import React, { useState } from "react";
import BGHD from "../assets/Image/background-technology-desktop.jpg";
import BGHT from "../assets/Image/background-technology-tablet.jpg";
import BGHM from "../assets/Image/background-technology-mobile.jpg";
import Nav from "./nav.jsx";
import portrait0 from "../assets/Image/image-launch-vehicle-portrait.jpg";
import landscape0 from "../assets/Image/image-launch-vehicle-landscape.jpg";
import portrait1 from "../assets/Image/image-spaceport-portrait.jpg";
import landscape1 from "../assets/Image/image-spaceport-landscape.jpg";
import portrait2 from "../assets/Image/image-space-capsule-portrait.jpg";
import landscape2 from "../assets/Image/image-space-capsule-landscape.jpg";

function Technology() {
  const technologyData = [
    {
      id: 1,
      name: "Launch vehicle",
      images: {
        portrait: portrait0,
        landscape: landscape0,
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      id: 2,
      name: "Spaceport",
      images: {
        portrait: portrait1,
        landscape: landscape1,
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      id: 3,
      name: "Space capsule",
      images: {
        portrait: portrait2,
        landscape: landscape2,
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  const [activeBtn, setActiveBtn] = useState(0);

  const activeTechnology = technologyData[activeBtn];

  function DesktopLayout() {
    return (
      <div>
        <div
          className="lg:block md:hidden ssm:hidden bg-cover gap-10"
          style={{ backgroundImage: `url(${BGHD})`, height: "800px" }}
        >
          <Nav />
          <div className="flex flex-col gap-15 w-full justify-center items-center px-10 mt-15">
            <div className="text-white text-[28px] text-start w-full uppercase">
              <span className="text-white/50"> 03</span> Space launch 101
            </div>
            <div className="flex w-full h-full justify-center items-center gap-10 text-white ">
              <div className="flex  flex-col gap-5">
                {technologyData.map((data, index) => {
                  return (
                    <div key={data.id}>
                      <button
                        className={`w-[80px] h-[80px]  rounded-full text-[32px] ${
                          activeBtn === index
                            ? "bg-white text-black"
                            : "border-2 border-white/50 text-white"
                        }`}
                        onClick={() => setActiveBtn(index)}
                      >
                        {data.id}
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-10 items-center justify-center h-full ">
                <div className="w-[491px] h-[304px]">
                  <div className="uppercase text-[32px] font-Bellefair-reg text-white/50">
                    The terminology...
                  </div>
                  <div className="uppercase text-[56px] font-Bellefair-reg">
                    {activeTechnology.name}
                  </div>
                  <div className="w-[491px] text-[23px] font-barlow-reg text-blue-300">
                    {activeTechnology.description}
                  </div>
                </div>
              </div>

              <div>
                <img src={activeTechnology.images.portrait} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function TabletLayout() {
    return (
      <div
        className="w-full lg:hidden md:block ssm:hidden bg-cover"
        style={{ backgroundImage: `url(${BGHT})` }}
      >
        <Nav />
        <div className="flex flex-col gap-15 w-full justify-center items-center mt-15">
          <div className="text-white text-[20px] text-start w-full uppercase pl-10">
            <span className="text-white/50"> 03</span> Space launch 101
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center gap-10 text-white ">
            <div>
              <img src={activeTechnology.images.landscape} alt="" />
            </div>
            <div className="flex  gap-5">
              {technologyData.map((data, index) => {
                return (
                  <div key={data.id}>
                    <button
                      className={`w-[56px] h-[56px]  rounded-full text-[32px] ${
                        activeBtn === index
                          ? "bg-white text-black"
                          : "border-2 border-white/50 text-white"
                      }`}
                      onClick={() => setActiveBtn(index)}
                    >
                      {data.id}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-10 items-center justify-center h-full ">
              <div className="w-[491px] h-[304px] text-center">
                <div className="uppercase text-[24px] font-Bellefair-reg text-white/50">
                  The terminology...
                </div>
                <div className="uppercase text-[40px] font-Bellefair-reg">
                  {activeTechnology.name}
                </div>
                <div className="w-[491px] text-[20px] text-center font-barlow-reg text-blue-300">
                  {activeTechnology.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function MobileLayout() {
    return (
      <div
        className="w-full h-full lg:hidden md:hidden ssm:block bg-cover"
        style={{ backgroundImage: `url(${BGHM})`, height: "960px" }}
      >
        <Nav />
        <div className="flex flex-col gap-10 w-full justify-center items-center mt-5">
          <div className="text-white text-[20px] text-start w-full uppercase pl-10">
            <span className="text-white/50"> 03</span> Space launch 101
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center gap-10 text-white ">
            <div>
              <img
                src={activeTechnology.images.landscape}
                className="h-[258px]"
                alt=""
              />
            </div>
            <div className="flex  gap-5">
              {technologyData.map((data, index) => {
                return (
                  <div key={data.id}>
                    <button
                      className={`w-[56px] h-[56px]  rounded-full text-[32px] ${
                        activeBtn === index
                          ? "bg-white text-black"
                          : "border-2 border-white/50 text-white"
                      }`}
                      onClick={() => setActiveBtn(index)}
                    >
                      {data.id}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-10 items-center justify-center h-full ">
              <div className="w-[327px] h-[304px] text-center">
                <div className="uppercase text-[24px] font-Bellefair-reg text-white/50">
                  The terminology...
                </div>
                <div className="uppercase text-[40px] font-Bellefair-reg">
                  {activeTechnology.name}
                </div>
                <div className=" text-[18px] text-center font-barlow-reg text-blue-300">
                  {activeTechnology.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <DesktopLayout />
        <TabletLayout />
        <MobileLayout />
      </div>
    </div>
  );
}

export default Technology;
