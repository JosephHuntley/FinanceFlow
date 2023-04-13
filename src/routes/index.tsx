import Featured from "~/components/home/Featured"
import Hero from "~/components/home/Hero"

export default function Home() {
  return (
    <>
      {/* Adding mt-32 instead of pt-32 causes issue with fixed header */}
      <main class="pt-32 mx-40 min-h-[100vh]">
        <Hero />
        <Featured />
      </main>
    </>
  )
}
