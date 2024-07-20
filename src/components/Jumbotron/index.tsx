import {
  LuShip,
  LuBadgeCheck,
  LuHeartHandshake,
  LuBrain,
} from "react-icons/lu";
import Flywheel from "../../styles/assets/flywheel-logo-white.svg";
import Perpetua from "../../styles/assets/perpetua-logo-white.svg";
import LostAndFound from "../../styles/assets/lostandfound-logo-white.svg";
import Shoplogix from "../../styles/assets/shoplogix-logo-white.svg";
import Stan from "../../styles/assets/stan-logo-white.svg";
import StackAdapt from "../../styles/assets/stackadapt-logo-white.svg";

import FlywheelIcon from "../../styles/assets/flywheel-icon-white.svg";
import PerpetuaIcon from "../../styles/assets/perpetua-icon-white.svg";
import LostAndFoundIcon from "../../styles/assets/lostandfound-icon-white.svg";
import ShoplogixIcon from "../../styles/assets/shoplogix-icon-white.svg";
import StanIcon from "../../styles/assets/stan-icon-white.svg";
import StackAdaptIcon from "../../styles/assets/stackadapt-icon-white.svg";

const Jumbotron = () => {
  return (
    <div
      className={
        "relative w-full h-[600px] sm:h-screen flex flex-col gap-4 items-center justify-center px-6 sm:flex-row sm:gap-2 sm:px-28 radi"
      }
    >
      <div className={"w-full flex flex-col gap-1"}>
        <div
          className={
            "-rotate-6 rounded-md w-fit py-0.5 px-2 text-sm font-semibold text-white bg-slate-800"
          }
        >
          Trusted by devs, businesses, & startups
        </div>

        <p className={"text-white text-xl-3 sm:text-xxl font-black"}>
          Experienced Engineer leveraging code and design
        </p>
      </div>
      <div className={"w-full flex flex-col gap-8 sm:w-1/2"}>
        <div className={"flex gap-3 text-white items-center"}>
          <LuShip size={32} />
          <p className={"font-semibold"}>Shipped many high priority features</p>
        </div>

        <div className={"flex gap-3 text-white items-center"}>
          <LuBadgeCheck size={32} />
          <p className={"font-semibold"}>Reviewed hundreds of PRs</p>
        </div>

        <div className={"flex gap-3 text-white items-center"}>
          <LuBrain size={32} />
          <p className={"font-semibold"}>
            Built products with cross-functional teams
          </p>
        </div>

        <div className={"flex gap-3 text-white items-center"}>
          <LuHeartHandshake size={32} />
          <p className={"font-semibold"}>Collaborated with local businesses</p>
        </div>
      </div>

      <div
        className={
          "absolute bottom-0 w-full flex items-center justify-center py-6"
        }
      >
        <div className={"w-full px-6 flex justify-between items-center"}>
          {/* Icons */}
          <img
            src={StackAdaptIcon}
            className={"flex h-7 lg:hidden"}
            alt={"StackAdapt White Icon"}
          />
          <img
            src={PerpetuaIcon}
            className={"flex h-7 lg:hidden"}
            alt={"Perpetua White Icon"}
          />
          <img
            src={FlywheelIcon}
            className={"flex h-7 lg:hidden"}
            alt={"Flywheel White Icon"}
          />
          <img
            src={StanIcon}
            className={"flex h-7 lg:hidden"}
            alt={"Stan White Icon"}
          />
          <img
            src={LostAndFoundIcon}
            className={"flex h-7 lg:hidden"}
            alt={"Lost & Found White Icon"}
          />
          <img
            src={ShoplogixIcon}
            className={"flex h-7 lg:hidden"}
            alt={"Shoplogix White Icon"}
          />

          {/* Full Logos */}
          <img
            src={StackAdapt}
            className={"hidden lg:flex md:h-7"}
            alt={"StackAdapt White Logo"}
          />
          <img
            src={Perpetua}
            className={"hidden lg:flex md:h-7"}
            alt={"Perpetua White Logo"}
          />
          <img
            src={Flywheel}
            className={"hidden lg:flex md:h-7"}
            alt={"Flywheel White Logo"}
          />
          <img
            src={Stan}
            className={"hidden lg:flex md:h-7"}
            alt={"Stan White Logo"}
          />
          <img
            src={LostAndFound}
            className={"hidden lg:flex md:h-7"}
            alt={"Lost & Found White Logo"}
          />
          <img
            src={Shoplogix}
            className={"hidden lg:flex md:h-7"}
            alt={"Shoplogix White Logo"}
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
