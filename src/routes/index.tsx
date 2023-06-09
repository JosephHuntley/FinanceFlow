import { Head, Title, Meta } from "solid-start";
import Banner from "~/components/home/Banner";
import Featured from "~/components/home/Featured";
import Hero from "~/components/home/Hero";
import Portfolio from "~/components/home/Portfolio";
import Rewards from "~/components/home/Rewards";
import Testimonies from "~/components/home/Testimonies";
import Video from "~/components/home/Video";
import News from "~/components/home/News";
import Download from "~/components/home/Download";

export default function Home() {
  return (
    <>
      <Head>
        <Title>Home Page | FinanceFlow</Title>
        <Meta charset="utf-8" />
        <Meta name="description" content="Home page of Finance Flow" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Adding mt-32 instead of pt-32 causes issue with fixed header */}
      <main class="pt-32 sm:mx-40 mx-4">
        <Hero />
        <Featured />
        <Portfolio />
        <Rewards />
        <Banner />
        <Testimonies />
        <Video />
        <News />
        <Download />
      </main>
    </>
  );
}
