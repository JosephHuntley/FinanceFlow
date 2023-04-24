import { Component, createSignal } from "solid-js";
import Button from "../global/Button";
import { feedback } from "~/data/Constants";
import "solid-slider/slider.css";
import { Slider, createSlider } from "solid-slider";

const Testimonies: Component<{}> = (props) => {
  const [slider, { current, moveTo }] = createSlider({
    loop: true,
    slides: {
      spacing: 8,
    },
  });

  return (
    <section class="flex flex-col items-center">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:w-full gap-5 mt-28 ">
        <h2 class="text-3xl ">What our users say?</h2>
        <Button>Download App</Button>
      </div>
      <div class="max-w-[588px]" use:slider>
        {/* Feedback cards */}
        {feedback.map((user, index) => (
          <div
            class={`flex flex-col gap-6 bg-dark-blue py-16 px-12 rounded-[40px] my-8 w-full sm:w-1/2 max-w-[588px] ${
              index != current() ? "" : ""
            }`}
          >
            <p class="text-lg leading-8">{`"${user.text}"`}</p>
            <div class="flex gap-4">
              <img src={user.img} />
              <div>
                <h3 class="font-bold">{user.name}</h3>
                <h4>{user.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="flex flex-row gap-3.5 justify-center">
        {feedback.map((x, index) => (
          <div
            class={`rounded-full w-[14px] h-[14px] ${
              index != current() ? "bg-white/10" : "bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonies;
