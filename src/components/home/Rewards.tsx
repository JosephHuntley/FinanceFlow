import { Component } from "solid-js"
import DualPhone from "/DualPhone.png"
import { rewards } from "../../data/Constants"
import Laptop from "/Computer.png"

const Rewards: Component<{}> = (props) => {
  return (
    <section class="grid   my-20 grid-cols-1 sm:grid-cols-2">
      {/* Dual Phone */}
      {/* <div class="flex sm:flex-row flex-col"> */}
      <img class="w-full h-[380px]" src={DualPhone} />

      {rewards.map((reward) => (
        <div class="flex flex-col my-10">
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
      {/* </div> */}
      {/* Laptop */}
      <div>
        <img src={Laptop} />
      </div>
    </section>
  )
}

export default Rewards
