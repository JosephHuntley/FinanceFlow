import { Component } from "solid-js";
import Button from "../global/Button";
import Partial from "/PartialPhones.png";

const Banner: Component<{}> = (props) => {
  return (
    <section class="bg-blue w-screen sm:mx-[-10rem] mx-[-1rem] sm:px-40 px-6 sm:py-28 pt-10 flex flex-col sm:flex-row sm:mt-60 items-center sm:items-start">
      <div class="flex flex-col items-center sm:items-start">
        <h2 class="text-3xl font-bold sm:text-4xl max-w-[304px] sm:max-w-[520px] text-center sm:text-left">
          Explore endless possibilities with FinanceFlow
        </h2>
        <p class="mt-2 text-lg sm:max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
        <Button variant="white" className="mt-8">
          DOWNLOAD APP
        </Button>
      </div>
      <div class="sm:absolute">
        <img
          class="sm:relative sm:w-[664px] mt-[-16px] sm:mt-0 sm:h-[616px] h-[220px] sm:bottom-[272px] sm:left-[600px]"
          src={Partial}
        />
      </div>
    </section>
  );
};

export default Banner;
