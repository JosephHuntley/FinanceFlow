import { Component } from "solid-js";
import Button from "../global/Button";
import apple from "/apple.svg";
import iPhone from "/Phone.png";
import playStore from "/playStore.svg";
import galaxy from "/SamsungGalaxy.png";

const Download: Component<{}> = (props) => {
  return (
    <section class="mt-10 sm:mt-28">
      <div class="flex sm:flex-row w-full justify-between ">
        <h2 class="text-3xl font-bold">Download our app</h2>
        <p class="mt-4 max-w-[460px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque
          orci amet, amet .
        </p>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-16 mt-10">
        <div class="bg-dark-blue p-8 pb-0 rounded-[40px] overflow-hidden flex flex-col ">
          <h3 class="text-2xl font-bold">Download for iOS</h3>
          <p class="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer in pellentesque tortor semper elementum. Felis.
          </p>
          <Button className="flex flex-row gap-2 max-w-[180px]  mt-6">
            <img src={apple} />
            App Store
          </Button>
          <img
            class="relative mt-10 mb-[-400px] justify-self-center"
            src={iPhone}
          />
        </div>
        <div class="bg-dark-blue p-8 pb-0 rounded-[40px] overflow-hidden flex flex-col ">
          <h3 class="text-2xl font-bold">Download for Android</h3>
          <p class="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer in pellentesque tortor semper elementum. Felis.
          </p>
          <Button className="flex flex-row gap-2 max-w-[180px]  mt-6">
            <img src={playStore} />
            Play Store
          </Button>
          <img
            class="relative mt-10 mb-[-400px] justify-self-center"
            src={galaxy}
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
