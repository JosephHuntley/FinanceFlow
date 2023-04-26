import { Component } from "solid-js";
import DualPhone from "/DualPhone.png";
import { rewards } from "../../data/Constants";
import Laptop from "/Computer.png";

const Rewards: Component<{}> = (props) => {
  return (
    <section class="grid sm:gap-y-10  my-20 grid-cols-1 sm:grid-cols-2 items-center overflow-x-hidden mr-[-10rem]">
      {/* Dual Phone */}
      <img class="w-full h-[380px] sm:w-[500px] sm:h-[592px]" src={DualPhone} />
      {rewards.map((reward) => (
        <div class="flex flex-col my-10 sm:max-w-[472px]">
          <h2 class="text-3xl font-bold ">{reward.title}</h2>
          <p class="mt-4 max-w-[328px]">{reward.text}</p>
          {reward.bullets.map((bullet) => (
            <>
              <div class="flex mt-4 gap-4 items-center">
                <img src={bullet.icon} />
                <p>{bullet.text}</p>
              </div>
            </>
          ))}
        </div>
      ))}
      {/* Laptop */}
      <div class="w-full sm:w-[972px] sm:h-[588px] sm:right-[200px] relative mr-[-10rem]">
        <img
          class="sm:relative w-full sm:w-[972px] sm:h-[588px] mr-[-10rem]"
          src={Laptop}
        />
      </div>
    </section>
  );
};

export default Rewards;
