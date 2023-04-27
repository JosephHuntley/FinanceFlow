import { Component } from "solid-js";
import { timeline } from "~/data/Constants";

const Timeline: Component<{}> = (props) => {
  return (
    <section class="mt-10">
      {/* Section Heading */}
      <div>
        <h2 class="text-2xl sm:text-4xl font-bold ">Timeline</h2>
        <p class="mt-4 max-w-[328px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
      {/* Timeline */}
      <div class="mt-10 sm:mt-0 flex flex-col gap-14 ">
        {timeline.map((bullet) => (
          <div class="flex flex-col gap-10">
            <div class="flex flex-row gap-12">
              <div class="rounded-full bg-white w-6 h-6 " />
              <div class="max-w-[280px] flex flex-col gap-4">
                <h3 class="text-2xl sm:text-4xl font-bold">{bullet.year}</h3>
                <h4 class="text-lg font-bold">{bullet.title}</h4>
                <p class="leading-[26px]">{bullet.text}</p>
              </div>
            </div>
            <div class="w-full border border-white" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
