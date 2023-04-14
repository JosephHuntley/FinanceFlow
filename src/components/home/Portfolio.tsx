import { Component } from "solid-js"
import SR from "/Send_Receive.png"
import Wallet from "/Wallet.png"
import Phone from "/Phone.png"
import Charts from "/Charts.png"
import Trading from "/Trading.png"
import Button from "../global/Button"

const Portfolio: Component<{}> = (props) => {
  return (
    <section class="sm:mt-44 mt-16 flex flex-col items-center gap-12">
      <div class="flex flex-col gap-4">
        <h1 class="text-3xl font-bold">
          Build your crypto <br class="sm:hidden block" />
          profile
        </h1>
        <p class="max-w-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
      </div>
      <div class="sm:flex">
        <div class="sm:flex sm:flex-col mt-20">
          <div class="sm:flex sm:flex-row sm:gap-7">
            {/* First Row */}
            <div class=" sm:mt-0 mt-6 flex flex-col gap-3 ">
              <div class="bg-dark-blue h-[296px] sm:w-[326px] w-full rounded-[40px] py-12 px-6">
                <img src={SR} />
                <h2 class="font-bold text-lg uppercase mt-6">Send & Receive</h2>
                <p class="max-w-[280px] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat nulla suspendisse tortor aene.
                </p>
              </div>
              <div class="bg-dark-blue h-[296px] sm:w-[326px] w-full rounded-[40px] py-12 px-6">
                <img src={Wallet} />
                <h2 class="font-bold text-lg uppercase mt-6">
                  100% Secure Wallet
                </h2>
                <p class="max-w-[280px] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat nulla suspendisse tortor aene.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div class="bg-blue sm:h-[604px] h-[624px] sm:w-[480px] w-full rounded-[40px] pt-12 px-9 overflow-hidden">
              <h2 class="font-bold text-xl uppercase">IOS & Android App</h2>
              <p class=" mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                amet, morbi non at sed neque.
              </p>
              <img class="mt-4" src={Phone} />
            </div>

            {/* Second Row */}
            <div class="sm:flex sm:flex-col gap-3">
              <div class="bg-dark-blue h-[296px] sm:w-[326px] w-full rounded-[40px] py-12 px-6">
                <img src={Charts} />
                <h2 class="font-bold text-lg uppercase mt-6">Trading Charts</h2>
                <p class="max-w-[280px] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat nulla suspendisse tortor aene.
                </p>
              </div>
              <div class="bg-dark-blue h-[296px] sm:w-[326px] w-full rounded-[40px] py-12 px-6">
                <img src={Trading} />
                <h2 class="font-bold text-lg uppercase mt-6">
                  Real Time Trading
                </h2>
                <p class="max-w-[280px] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat nulla suspendisse tortor aene.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button>Download App</Button>
    </section>
  )
}

export default Portfolio
