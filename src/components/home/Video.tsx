import { Component } from "solid-js";
import TradingIcon from "/TradingIcon.png";
import AccountIcon from "/Account.png";
import DownloadIcon from "/Download.png";
import Arrow from "/Arrow.png";

const Video: Component<{}> = (props) => {
  return (
    <section class="flex flex-col sm:flex-row mt-28 gap-16 sm:gap-8">
      <div>
        <h2 class="text-3xl">Get started today</h2>
        <p class="mt-4 max-w-[472px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
        <ul class="flex flex-col gap-4 mt-4">
          <li class="flex flex-row gap-4 items-center">
            <img src={DownloadIcon} />
            <p>Download app</p>
          </li>
          <li class="flex flex-row gap-4 items-center">
            <img src={AccountIcon} />
            <p>Create a free account</p>
          </li>
          <li class="flex flex-row gap-4 items-center">
            <img src={TradingIcon} />
            <p>Start trading</p>
          </li>
        </ul>
      </div>
      <div class="w-full sm:w-[660px] h-[400px] bg-dark-blue rounded-[40px] flex items-center justify-center">
        <div class="bg-white/20 w-[100px] h-[100px] rounded-full flex items-center justify-center cursor-pointer">
          <img src={Arrow} />
        </div>
      </div>
    </section>
  );
};

export default Video;
