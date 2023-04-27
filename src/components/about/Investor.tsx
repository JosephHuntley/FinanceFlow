import { Component } from "solid-js";
import RandLogo from "/CompanyLogo.png";

const Investor: Component<{}> = (props) => {
  return (
    <section>
      <section class="flex flex-col items-center gap-8 mt-10 sm:mt-44">
        <div class="flex flex-col items-center">
          <h2 class="text-2xl sm:text-4xl font-bold ">Investors</h2>
          <p class="mt-4 sm:text-lg text-center max-w-[328px] sm:max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
            lorem purus justo, ultricies.
          </p>
        </div>
        <div class="flex sm:flex-row flex-col sm:gap-16 gap-6">
          <div class="flex flex-row justify-center">
            <img src={RandLogo} />
            <img src={RandLogo} />
          </div>
          <div class="flex flex-row justify-center">
            <img src={RandLogo} />
            <img src={RandLogo} />
          </div>
          <div class="flex flex-row justify-center">
            <img src={RandLogo} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Investor;
