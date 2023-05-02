import { Component, Show, createSignal } from "solid-js";
import { accordion } from "../../data/Constants";
import Open from "/Open.png";
import Close from "/Close.png";

const Faq: Component<{}> = (props) => {
  const [itemOpen, setItemOpen] = createSignal(-1);
  return (
    <section class="flex flex-col items-center gap-8 mt-10 sm:mt-44">
      <h2 class="text-4xl sm:text-6xl font-bold ">FAQ</h2>
      <div class="w-full sm:w-[872px] flex flex-col">
        {accordion.map((item, index) => (
          <div
            onClick={() => {
              itemOpen() !== index ? setItemOpen(index) : setItemOpen(-1);
            }}
          >
            {/* Displayed Data */}
            <div class="flex w-full sm:w-[872px] py-6 sm:py-8 justify-between">
              <h3 class="font-bold text-lg sm:text-2xl">{item.title}</h3>
              <Show when={itemOpen() === index} fallback={<img src={Open} />}>
                <img src={Close} />
              </Show>
            </div>
            <Show when={itemOpen() === index}>
              <div>{item.desc}</div>
            </Show>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
