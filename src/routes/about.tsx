import Hero from "~/components/about/Hero";
import Mission from "~/components/about/Mission";
import Team from "~/components/about/Team";
import Timeline from "~/components/about/Timeline";

export default function About() {
  return (
    <main class="pt-32 sm:mx-40 mx-4">
      <Hero />
      <Mission />
      <Timeline />
      <Team />
    </main>
  );
}
