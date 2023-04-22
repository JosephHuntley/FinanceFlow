import { Component } from "solid-js";
import Button from "../global/Button";
import Partial from "/PartialPhones.png";

const Banner: Component<{}> = (props) => {
  return (
    <section class="bg-blue w-screen sm:mx-[-10rem] sm:px-40 sm:py-28 flex sm:mt-60">
      <div class="w-1/2">
        <h2 class=" text-4xl">
          Explore endless possibilities with FinanceFlow
        </h2>
        <p class="mt-2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
        <Button variant="white" className="mt-8">
          DOWNLOAD APP
        </Button>
      </div>
      <div class="absolute ">
        <img
          class="relative w-[664px] h-[616px] bottom-[272px] left-[600px]"
          src={Partial}
        />
      </div>
    </section>
  );
};

export default Banner;
