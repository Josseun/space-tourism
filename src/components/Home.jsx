import BGHD from "../assets/Image/background-home-desktop.jpg";
import BGHT from "../assets/Image/background-home-tablet.jpg";
import BGHM from "../assets/Image/background-home-mobile.jpg";
import Nav from "./nav.jsx";

function hero() {
  function DesktopLayout() {
    return (
      <div
        className="lg:block md:hidden ssm:hidden bg-cover"
        style={{ backgroundImage: `url(${BGHD})`, height: "800px" }}
      >
        <Nav />
        <div className="w-full h-140 flex justify-center items-center">
          <div className="flex w-full max-w-[1110px] justify-between items-center  text-white uuppercase tracking-widest px-10">
            <div>
              <div
                className="text-[28px] font-barlow-reg stroke-black tracking-[4px] leading-normal uppercase pl-5
               text-blue-300"
              >
                So, you want to travel to
              </div>
              <div className="font-Bellefair-reg text-[144px] uppercase ">
                Space
              </div>
              <div className="w-[500px] font-barlow-reg">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </div>
            </div>
            <div
              className="w-[272px] h-[272px] bg-white rounded-full
           flex justify-center items-center text-dark text-[32px]
           hover:"
            >
              Explore
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
        <div className="w-full h-full flex justify-center items-center pt-20">
          <div className="flex flex-col justify-between h-full  items-center text-white text-center  tracking-widest">
            <div>
              <div className="text-[28px] uppercase font-barlow-reg stroke-black tracking-[4px] leading-normal text-blue-300">
                So, you want to travel to
              </div>
              <div className="font-Bellefair-reg text-[140px] uppercase">
                Space
              </div>
              <div className="w-[550px] font-barlow-reg mb-5">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </div>
            </div>
            <div
              className="w-[272px] h-[272px] uppercase bg-white rounded-full mt-5
           flex justify-center items-center text-dark text-[32px] mb-10
           hover:"
            >
              Explore
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
        style={{ backgroundImage: `url(${BGHM})`, height: "760px" }}
      >
        <Nav />
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col h-full  items-center mt-10 text-white text-center  tracking-widest">
            <div>
              <div className="text-[18px] uppercase font-barlow-reg stroke-black tracking-[4px] leading-normal text-blue-300">
                So, you want to travel to
              </div>
              <div className="font-Bellefair-reg text-[80px] uppercase">
                Space
              </div>
              <div className="w-[378px] text-[17px] font-barlow-reg mb-5">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </div>
            </div>
            <div
              className="w-[144px] h-[144px] uppercase bg-white rounded-full mt-5
           flex justify-center items-center text-dark text-[18px]
           hover:"
            >
              Explore
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

export default hero;
