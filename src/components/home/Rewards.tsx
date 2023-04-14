import { Component } from "solid-js"
import DualPhone from "/DualPhone.png"

const Rewards: Component<{}> = (props) => {
  return (
    <section class="flex flex-coł mt-20">
      {/* Dual Phone */}
      <div class="flex sm:flex-row flex-col">
        <img class="w-full h-[380px]" src={DualPhone} />
        <h2 class="text-xl font-bold w-[304px] mt-10">
          Earn daily rewards on your idle tokens
        </h2>
        <p class="mt-4 max-w-[328px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
      </div>
      {/* Laptop */}
      <div></div>
    </section>
  )
}

export default Rewards
