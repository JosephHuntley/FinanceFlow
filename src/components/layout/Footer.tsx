import { Component } from "solid-js"
import Logo from "../global/Logo"
import insta from "/insta.svg"
import facebook from "/facebook.svg"
import linkedin from "/linkedIn.svg"
import apple from "/apple.svg"
import playStore from "/playStore.svg"
import { A } from "@solidjs/router"
import Button from "../global/Button"

const Footer: Component<{}> = (props) => {
  return (
    <footer class="bg-dark-blue pt-14 lg:px-32 sm:px-12 px-6 pb-8">
      <div class="flex sm:flex-row flex-col gap-6 sm:gap-0 justify-between mb-24">
        <Logo />
        {/* icons */}
        <div class="flex flex-row gap-3">
          <a>
            <img src={insta} />
          </a>
          <a>
            <img src={facebook} />
          </a>
          <a>
            <img src={linkedin} />
          </a>
        </div>
      </div>
      <div class="flex lg:flex-row flex-col justify-between gap-14 lg:gap-0">
        <div>
          <div>MENU</div>
          <div class="h-px width-full bg-white mt-8" />
          <ul class="grid grid-cols-2 uppercase gap-4 mt-9 text-[.75rem]">
            <li>
              <A href="/">Home</A>
            </li>
            <li>
              <A href="/about">About</A>
            </li>
            <li>
              <A href="/pricing">Pricing</A>
            </li>
            <li>
              <A href="/tokens">Tokens</A>
            </li>
            <li>
              <A href="/contact">Contact Us</A>
            </li>
          </ul>
        </div>
        {/* APPLICATION PROMPT */}
        <div class="bg-white/10 p-11 rounded-[40px] text-lg">
          <div class="uppercase leading-6">Download our application</div>
          <div class="max-w-96 leading-8 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer.
          </div>
          <div class="flex flex-row mt-6 gap-4 justify-evenly">
            <Button className="flex flex-row gap-2 ">
              <img src={apple} />
              App Store
            </Button>
            <Button className="flex flex-row gap-2">
              <img src={playStore} />
              Play Store
            </Button>
          </div>
        </div>
      </div>
      <div class="bg-white/10 w-full h-px mt-32" />
      <div class=" mt-8">All rights reserved &COPY;</div>
    </footer>
  )
}

export default Footer
