import { Component } from "solid-js";
import { Head, Title, Meta } from "solid-start";
import Wallet from "/Wallet.png";
import SR from "/Send_Receive.png";
import Charts from "/Charts.png";
import Trading from "/Trading.png";
import { PricingCards } from "~/data/Constants";
import Button from "~/components/global/Button";

const pricing: Component<{}> = (props) => {
  return (
    <>
      <Head>
        <Title>Pricing | FinanceFlow</Title>
        <Meta charset="utf-8" />
        <Meta name="description" content="About page of Finance Flow" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main class="pt-32 sm:mx-40 mx-4">
        <section>
          <div class="sm:text-center flex flex-col sm:items-center">
            <h1 class="font-bold text-4xl sm:text-6xl">Pricing</h1>
            <p class="mt-4 max-w-[320px] sm:max-w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aenean dis placerat. Scelerisque
              imperdiet vitae dolor non aliquam. Malesuada.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row sm:justify-between gap-9 mt-10">
            <div class="flex flex items-center gap-6">
              <img src={SR} />
              <p class="sm:text-lg">Send & Receive</p>
            </div>
            <div class="flex flex items-center gap-6">
              <img src={Charts} />
              <p class="sm:text-lg">Trading Charts</p>
            </div>
            <div class="flex flex items-center gap-6">
              <img src={Wallet} />
              <p class="sm:text-lg">Wallet</p>
            </div>
            <div class="flex flex items-center gap-6">
              <img src={Trading} />
              <p class="sm:text-lg">Real-Time Trading</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row mt-12 sm:mt-14 gap-6">
            {PricingCards.map((card) => (
              <div class="bg-dark-blue px-7 py-12 rounded-[40px]">
                <span class="bg-blue rounded-[40px] px-3.5 py-2">
                  {card.subscription}
                </span>
                <h2 class="mt-6 font-bold text-4xl">{card.price}</h2>
                <p class="mt-4">{card.text}</p>
                <div class="mt-10">
                  <p class="font-bold mb-4">Features</p>
                  <ul class=" gap-4 flex flex-col ">
                    {card.bullets.map((bullet) => (
                      <li>{bullet}</li>
                    ))}
                  </ul>
                  <Button className="uppercase mt-12  sm:w-[100%]">
                    Contact Us
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default pricing;
