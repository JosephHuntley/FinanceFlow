import { Head, Title, Meta } from "solid-start";
import Hero from "~/components/about/Hero";
import Investor from "~/components/about/Investor";
import Mission from "~/components/about/Mission";
import Team from "~/components/about/Team";
import Timeline from "~/components/about/Timeline";

export default function About() {
  return (
    <>
      <Head>
        <Title>About | FinanceFlow</Title>
        <Meta charset="utf-8" />
        <Meta name="description" content="About page of Finance Flow" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main class="pt-32 sm:mx-40 mx-4">
        <Hero />
        <Mission />
        <Timeline />
        <Team />
        <Investor />
      </main>
    </>
  );
}
