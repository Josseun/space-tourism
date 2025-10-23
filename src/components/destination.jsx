import React, { useState } from "react";
import Moon from "../assets/Image/image-moon.png";
import Mars from "../assets/Image/image-mars.png";
import Europa from "../assets/Image/image-europa.png";
import Titan from "../assets/Image/image-titan.png";
import BGHD from "../assets/Image/background-destination-desktop.jpg";
import BGHT from "../assets/Image/background-destination-tablet.jpg";
import BGHM from "../assets/Image/background-destination-mobile.jpg";
import Nav from "./nav.jsx";

function Destination() {
  const DData = [
    {
      id: "0",
      Image: Moon,
      name: "Moon",
      content:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      time: " 3 days",
    },
    {
      id: "1",
      Image: Mars,
      name: "Mars",
      content:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: " 225 mil. km",
      time: "9 months",
    },
    {
      id: "2",
      Image: Europa,
      name: "Europa",
      content:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: " 628 mil. km",
      time: "3 years",
    },
    {
      id: "3",
      Image: Titan,
      name: "Titan",
      content:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      time: "7 years",
    },
  ];

  const [activebtn, setActiveBtn] = useState(0);

  const activebtnDestination = DData[activebtn];

  function DesktopLayout() {
    return (
      <div
        className="w-full h-full lg:block md:hidden ssm:hidden text-white bg-cover"
        style={{ backgroundImage: `url(${BGHD})`, height: "800px" }}
      >
        <Nav />
        <div className="pt-[30px] flex flex-col justify-between px-[100px] ">
          <div className="text-[28px] font-barlow-reg uppercase pb-[48px]">
            <span className="text-white/25">01</span> Pick your destination
          </div>
          <div className="w-full h-full flex justify-center items-center gap-10">
            <div className="w-[600px] h-full flex ">
              <img
                src={activebtnDestination.Image}
                alt={activebtnDestination.name}
              />
            </div>
            <div className="w-full h-full max-w-[445px] flex flex-col gap-10">
              <div className="w-full h-full flex gap-8">
                {DData.map((data, index) => {
                  return (
                    <div key={data.id}>
                      <button
                        onClick={() => setActiveBtn(index)}
                        className={`uppercase font-barlow-reg text-xl ${
                          activebtn === index
                            ? "pb-5 border-b-4 border-white"
                            : ""
                        }`}
                      >
                        {data.name}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div>
                <div className="text-[96px] uppercase font-Bellefair-reg">
                  {activebtnDestination.name}
                </div>
                <div className=" text-[18px] font-barlow-reg">
                  {activebtnDestination.content}
                </div>
                <hr className="my-[40px] text-white/25" />
                <div className="flex gap-30 uppercase">
                  <div>
                    <div className="text-[14px] font-barlow-reg">
                      AVG. DISTANCE
                    </div>
                    <div className="text-[28px] font-Bellefair-reg">
                      {activebtnDestination.distance}
                    </div>
                  </div>
                  <div>
                    <div className="text-[14px] font-barlow-reg">
                      Est. travel time
                    </div>
                    <div className="text-[28px] font-Bellefair-reg">
                      {activebtnDestination.time}
                    </div>
                  </div>
                </div>
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
        className="w-full lg:hidden md:block ssm:hidden text-white bg-cover"
        style={{ backgroundImage: `url(${BGHT})` }}
      >
        <Nav />
        <div className="py-[30px] flex flex-col justify-between">
          <div className="text-[20px] font-barlow-reg uppercase ml-10 mb-10">
            <span className="text-white/25">01</span> Pick your destination
          </div>
          <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
            <div>
              <img
                width={300}
                src={activebtnDestination.Image}
                alt={activebtnDestination.name}
              />
            </div>
            <div className="w-full h-full max-w-[514px] justify-center items-center flex flex-col gap-5">
              <div className="w-full h-full flex justify-center items-center gap-8">
                {DData.map((data, index) => {
                  return (
                    <div key={data.id}>
                      <button
                        onClick={() => setActiveBtn(index)}
                        className={`uppercase font-barlow-reg text-[16px] ${
                          activebtn === index
                            ? "pb-3 border-b-4 border-white"
                            : ""
                        }`}
                      >
                        {data.name}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div>
                <div className="text-[80px] text-center uppercase font-Bellefair-reg">
                  {activebtnDestination.name}
                </div>
                <div className=" text-[20px] text-center font-barlow-reg">
                  {activebtnDestination.content}
                </div>
                <hr className="my-[40px] text-white/25" />
                <div className="flex gap-30 uppercase text-center items-center justify-center">
                  <div>
                    <div className="text-[14px] font-barlow-reg">
                      AVG. DISTANCE
                    </div>
                    <div className="text-[28px] font-Bellefair-reg">
                      {activebtnDestination.distance}
                    </div>
                  </div>
                  <div>
                    <div className="text-[14px] font-barlow-reg">
                      Est. travel time
                    </div>
                    <div className="text-[28px] font-Bellefair-reg">
                      {activebtnDestination.time}
                    </div>
                  </div>
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
        className="w-full lg:hidden md:hidden ssm:block text-white bg-cover"
        style={{ backgroundImage: `url(${BGHM})`, height: "760px" }}
      >
        <Nav />
        <div className="flex flex-col justify-between items-center gap-5">
          <div className="text-[20px] flex gap-5 font-barlow-reg uppercase">
            <span className="text-white/25">01</span>
            <div>Pick your destination</div>
          </div>
          <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
            <div>
              <img
                width={150}
                src={activebtnDestination.Image}
                alt={activebtnDestination.name}
              />
            </div>
            <div className="w-full h-full max-w-[327px] justify-center items-center flex flex-col gap-5">
              <div className="w-full h-full flex justify-center items-center gap-8">
                {DData.map((data, index) => {
                  return (
                    <div key={data.id}>
                      <button
                        onClick={() => setActiveBtn(index)}
                        className={`uppercase font-barlow-reg text-[14px] ${
                          activebtn === index
                            ? "pb-1 border-b-4 border-white"
                            : ""
                        }`}
                      >
                        {data.name}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div>
                <div className="text-[56px] text-center uppercase font-Bellefair-reg">
                  {activebtnDestination.name}
                </div>
                <div className=" text-[20px] text-center font-barlow-reg">
                  {activebtnDestination.content}
                </div>
                <hr className="my-[12px] text-white/25" />
                <div className="flex flex-col gap-3 uppercase text-center items-center justify-center">
                  <div>
                    <div className="text-[14px] font-barlow-reg">
                      AVG. DISTANCE
                    </div>
                    <div className="text-[28px] font-Bellefair-reg">
                      {activebtnDestination.distance}
                    </div>
                  </div>
                  <div>
                    <div className="text-[14px] font-barlow-reg">
                      Est. travel time
                    </div>
                    <div className="text-[28px] font-Bellefair-reg">
                      {activebtnDestination.time}
                    </div>
                  </div>
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

export default Destination;
