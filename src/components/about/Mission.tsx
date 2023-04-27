import { Component } from "solid-js";
import Planet from "/Planet.svg";

const Mission: Component<{}> = (props) => {
  return (
    <section class="flex flex-col sm:flex-row mt-10 sm:gap-20 gap-16 justify-between overflow-x-hidden mr-[-1rem] sm:mr-[-10rem]">
      <div class="">
        <div>
          <h2 class="text-2xl sm:text-4xl font-bold sm:mt-16">Our Mission</h2>
          <p class="mt-4 max-w-[328px] sm:max-w-[600px] sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
            lorem purus justo, ultricies. Sollicitudin odio elementum urna
            placerat lacus, vulputate. Non malesuada viverra et ultrices cras.
            Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus
            ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
            <br />
            <br />
            Vulputate pellentesque proin facilisis dignissim gravida sed
            faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
            nisl, in quis nulla tellus suscipit id. Semper velit odio cras
            pretium tristique habitant. Elit eu penatibus congue orci turpis.
            Enim diam id.
          </p>
        </div>
        <div class="mt-16 sm:mt-32">
          <h2 class="text-2xl sm:text-4xl font-bold">Our Story</h2>
          <p class="mt-4 max-w-[328px] sm:max-w-[600px] sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
            lorem purus justo, ultricies. Sollicitudin odio elementum urna
            placerat lacus, vulputate. Non malesuada viverra et ultrices cras.
            Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus
            ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
            <br />
            <br />
            Vulputate pellentesque proin facilisis dignissim gravida sed
            faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
            nisl, in quis nulla tellus suscipit id. Semper velit odio cras
            pretium tristique habitant. Elit eu penatibus congue orci turpis.
            Enim diam id.
          </p>
        </div>
      </div>
      {/* Globe Image Right Side */}
      <img
        src={Planet}
        class="mr-[-2rem] relative right-[-1rem]  sm:w-[652px] sm:h-[632px]"
      />
    </section>
  );
};

export default Mission;
