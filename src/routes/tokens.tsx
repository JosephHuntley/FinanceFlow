import { Component } from "solid-js";
import { Head, Title, Meta, A } from "solid-start";
import { tokensData } from "~/data/Constants";

const tokens: Component<{}> = (props) => {
  return (
    <>
      <Head>
        <Title>Tokens | FinanceFlow</Title>
        <Meta charset="utf-8" />
        <Meta name="description" content="Token page of Finance Flow" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main class="pt-32 sm:mx-40 mx-4">
        <section>
          <div class="sm:text-center flex flex-col sm:items-center">
            <h1 class="font-bold text-4xl sm:text-6xl">Tokens</h1>
            <p class="mt-4 max-w-[320px] sm:max-w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aenean dis placerat. Scelerisque
              imperdiet vitae dolor non aliquam. Malesuada.
            </p>
          </div>
          <div>
            <div class="sm:flex justify-evenly mt-24 hidden my-11">
              <h2 class="w-[240px]">NAME</h2>
              <h2 class="w-[240px]">DESCRIPTION</h2>
              <h2 class="w-[240px]">MARKET CAP</h2>
              <h2 class="w-[240px]">VOLUME</h2>
              <h2 class="w-[128px]">WEBSITE</h2>
            </div>
            {tokensData.map((token) => (
              <>
                <div class="border-0 sm:border border-white/10" />
                <div class="flex flex-col sm:flex-row justify-evenly sm:items-center">
                  <div class="flex items-center gap-4 w-[240px] my-11">
                    <img src={token.img} />
                    <p class=" text-lg font-bold">{token.name}</p>
                  </div>
                  <p class="w-[240px] my-11">{token.description}</p>
                  <p class="w-[240px] my-11">{token.marketCap}</p>
                  <p class="w-[240px] my-11">{token.volume}</p>
                  <A class="w-[128px] my-11 underline" href={token.link}>
                    Visit Website
                  </A>
                </div>
              </>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default tokens;
