import { Component } from "solid-js";
import Planet from "/Planet.svg";

const Mission: Component<{}> = (props) => {
  return (
    <section class="flex flex-col sm:flex-row mt-10 gap-16">
      <div>
        <div>
          <h2 class="text-2xl font-bold">Our Mission</h2>
          <p class="mt-4 max-w-[328px]">
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
        <div class="mt-16">
          <h2 class="text-2xl font-bold">Our Story</h2>
          <p class="mt-4 max-w-[328px]">
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
      <img src={Planet} />
    </section>
  );
};

export default Mission;
