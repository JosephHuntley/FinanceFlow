import { Component } from "solid-js"
import Button from "../global/Button"
import Comp from "/Computer.png"

const Hero: Component<{}> = (props) => {
  return (
    <section class="flex flex-row justify-between mx-40 max-w-[644px] leading-{5rem} mb-[120px]">
      <div class="relative z-10 mt-48 flex flex-row">
        <div>
          <h1 class="text-6xl ">Buy, trade and hold 350+ cryptocurrencies</h1>
          <p class="text-lg max-w-[568px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat.
          </p>
          <div class="flex flex-row gap-7 mt-10">
            <Button>Download App</Button>
            <Button variant="alt">View Pricing</Button>
          </div>
        </div>
        <div class=" w-[971px] h-[585px] relative top-[-100px] left-[-8px]">
          <img src={Comp} />
        </div>
      </div>
      {/* bg effects */}
      <div class="blur-2xl bg-dark-blue/40 h-[952px] w-[952px] rounded-full absolute left-[-26%] top-[-50%]" />
      <div class="blur-2xl bg-[--opac-blue] h-[680px] w-[680px] rounded-full absolute right-[-11%] top-[248px]" />
    </section>
  )
}

export default Hero
