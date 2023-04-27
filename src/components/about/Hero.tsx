import { Component } from "solid-js";
import { bullets } from "~/data/Constants";

const Hero: Component<{}> = (props) => {
  return (
    <section>
      <div class="sm:text-center flex flex-col sm:items-center">
        <h1 class="font-bold text-4xl sm:text-6xl">About Finance Flow</h1>
        <p class="mt-4 max-w-[320px] sm:max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aenean dis placerat. Scelerisque imperdiet vitae
          dolor non aliquam. Malesuada.
        </p>
      </div>
      <div class="mt-12 flex flex-col sm:flex-row w-full justify-between">
        <h2 class="text-3xl font-bold">What drives Finance Flow?</h2>
        <p class="mt-4 max-w-[320px] sm:max-w-[496px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
      </div>
      <div class="flex flex-col sm:grid sm:grid-cols-2 gap-5 mt-4">
        {bullets.map((bullet) => (
          <div class="bg-dark-blue rounded-[40px] px-8 py-14 flex flex-col sm:flex-row gap-6">
            <img class="w-[68px] h-[68px]" src={bullet.icon} />
            <div>
              <h3 class="font-bold text-lg">{bullet.title}</h3>
              <p class="text-lg leading-[32px]">{bullet.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
