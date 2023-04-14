import { Component } from "solid-js"
import Button from "../global/Button"
import Comp from "/Computer.png"

const Hero: Component<{}> = (props) => {
  return (
    <section class="flex flex-row justify-between  leading-{5rem} ">
      <div class="relative z-10 mt-48 flex sm:flex-row flex-col w-full">
        <div class="w-full">
          <h1 class="sm:text-6xl text-4xl ">
            Buy, trade and <br class="sm:hidden block" />
            hold <br class="sm:block hidden" />
            350+ <br class="sm:hidden block" />
            cryptocurrencies
          </h1>
          <p class="text-lg sm:max-w-[568px] max-w-[320px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat.
          </p>
          <div class="flex sm:flex-row flex-col gap-7 mt-10 w-full">
            <Button>Download App</Button>
            <Button variant="alt">View Pricing</Button>
          </div>
        </div>
        <div class=" sm:w-[971px] sm:h-[585px] sm:relative sm:top-[-100px] sm:left-[180px sm:mt-0 mt-20">
          <img src={Comp} />
        </div>
      </div>
      {/* bg effects */}
      <div class="blur-2xl bg-dark-blue/40 h-[952px] w-[952px] rounded-full sm:absolute left-[-26%] top-[-50%]  hidden" />
      <div class="blur-2xl bg-[--opac-blue] h-[680px] w-[680px]rounded-full sm:absolute right-[-11%] top-[248px]  hidden " />
    </section>
  )
}

export default Hero
