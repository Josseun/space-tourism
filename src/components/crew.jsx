import Nav from "./nav.jsx";
import BGHD from "../assets/Image/background-crew-desktop.jpg";
import BGHT from "../assets/Image/background-crew-tablet.jpg";
import BGHM from "../assets/Image/background-crew-mobile.jpg";
import CommanderImg from "../assets/Image/image-douglas-hurley.png";
import SpecialistImg from "../assets/Image/image-mark-shuttleworth.png";
import PilotImg from "../assets/Image/image-victor-glover.png";
import EngineerImg from "../assets/Image/image-anousheh-ansari.png";
import { useState } from "react";

function Crew() {
  const DData = [
    {
      id: "0",
      Image: CommanderImg,
      status: "Commander",
      name: "Douglas Hurley",
      content:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as   commander of Crew Dragon Demo-2.",
    },
    {
      id: "1",
      Image: SpecialistImg,
      status: "  Mission Specialist",
      name: "  Mark Shuttleworth",
      content:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      id: "2",
      Image: PilotImg,
      status: "Pilot",
      name: "Victor Glover",
      content:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S.Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    {
      id: "3",
      Image: EngineerImg,
      status: "Flight",
      name: "Anousheh Ansari",
      content:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    },
  ];

  const [activeBtn, setActiveBtn] = useState(0);

  const activeCrew = DData[activeBtn];

  function DesktopLayout() {
    return (
      <div
        className="lg:block md:hidden ssm:hidden bg-cover text-white"
        style={{ backgroundImage: `url(${BGHD})`, height: "900px" }}
      >
        <Nav />
        <div className="w-full flex justify-center items-center ">
          <div className="w-[1110px] mx-10">
            <div className="text-[28px] font-barlow-bold uppercase text-white mb-10">
              <span className="text-[#979797]">02</span> Meet your crew
            </div>
            <div className="flex items-center h-full mt-20">
              <div className="relative mr-20">
                <div className="w-[539px] flex items-start flex-col ">
                  <div className="text-[32px] font-Bellefair-reg text-[#979797] uppercase mb-5">
                    {activeCrew.status}
                  </div>
                  <div className="text-[56px] font-Bellefair-reg uppercase mb-5">
                    {activeCrew.name}
                  </div>
                  <div className="text-[22px] font-barlow-reg text-blue-300">
                    {activeCrew.content}
                  </div>
                </div>
                <div className="w-[540px] flex gap-5 items-start absolute -bottom-35">
                  {DData.map((data, index) => {
                    return (
                      <div key={index}>
                        <div>
                          <button
                            onClick={() => setActiveBtn(index)}
                            className={`w-[15px] h-[15px] rounded-full ${
                              index === activeBtn ? "bg-white" : "bg-[#979979]"
                            }`}
                          ></button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <img
                  src={activeCrew.Image}
                  alt={activeCrew.name}
                  width={539}
                  height={640}
                  className="w-full h-full"
                />
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
        <div className="w-full flex justify-center items-center mt-10">
          <div className="w-full px-10">
            <div className="text-[20px] font-barlow-bold uppercase text-white mb-20">
              <span className="text-[#979797]">02</span> Meet your crew
            </div>
            <div className="flex flex-col justify-center items-center gap-20">
              <div className="relative mr-20">
                <div className="w-lg flex items-center justify-center flex-col ">
                  <div className="text-[24px] text-center font-Bellefair-reg text-[#979797] uppercase mb-5">
                    {activeCrew.status}
                  </div>
                  <div className="text-[40px] text-white text-center font-Bellefair-reg uppercase mb-5">
                    {activeCrew.name}
                  </div>
                  <div className="text-[20.5px] text-center font-barlow-reg text-blue-300">
                    {activeCrew.content}
                  </div>
                </div>
                <div className="w-[540px] my-8  flex gap-5 items-center justify-center absolute">
                  {DData.map((data, index) => {
                    return (
                      <div key={index}>
                        <div>
                          <button
                            onClick={() => setActiveBtn(index)}
                            className={`w-[15px] h-[15px] rounded-full ${
                              index === activeBtn ? "bg-white" : "bg-[#979979]"
                            }`}
                          ></button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <img
                  src={activeCrew.Image}
                  alt={activeCrew.name}
                  className=""
                />
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
        <div className="w-full flex justify-center items-center ">
          <div className="w-full text-center justify-center">
            <div className="text-[16px]  font-barlow-bold uppercase text-white mb-10">
              <span className="text-[#979797]">02</span> Meet your crew
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center items-center">
                <div className="w-[327px] flex items-center justify-center flex-col ">
                  <div className="text-[18px] text-center font-Bellefair-reg text-[#979797] uppercase mb-3">
                    {activeCrew.status}
                  </div>
                  <div className="text-[24px] text-white text-center font-Bellefair-reg uppercase mb-3">
                    {activeCrew.name}
                  </div>
                  <div className="text-[18px] text-center font-barlow-reg text-blue-300">
                    {activeCrew.content}
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-center mt-10 mb-5">
                  {DData.map((data, index) => {
                    return (
                      <div key={index}>
                        <div>
                          <button
                            onClick={() => setActiveBtn(index)}
                            className={`w-[15px] h-[15px] rounded-full ${
                              index === activeBtn ? "bg-white" : "bg-[#979979]"
                            }`}
                          ></button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={activeCrew.Image}
                  alt={activeCrew.name}
                  className="w-[327px] h-[422px] absolute -bottom-78"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <div>
          <DesktopLayout />
          <TabletLayout />
          <MobileLayout />
        </div>
      </div>
    </>
  );
}

export default Crew;
