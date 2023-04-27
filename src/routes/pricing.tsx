import { Component } from "solid-js";
import { Head, Title, Meta } from "solid-start";

const pricing: Component<{}> = (props) => {
  return (
    <>
      <Head>
        <Title>Pricing | FinanceFlow</Title>
        <Meta charset="utf-8" />
        <Meta name="description" content="About page of Finance Flow" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main class="pt-32 sm:mx-40 mx-4"></main>
    </>
  );
};

export default pricing;
