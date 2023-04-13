import { Component } from "solid-js"
import RandLogo from "/CompanyLogo.png"

const Featured: Component<{}> = (props) => {
  return (
    <section class="flex flex-col items-center gap-8">
      <h2 class="text-lg font-normal">Finance Flow has been featured on</h2>
      <div class="flex flex-row gap-16">
        <img src={RandLogo} />
        <img src={RandLogo} />
        <img src={RandLogo} />
        <img src={RandLogo} />
        <img src={RandLogo} />
      </div>
    </section>
  )
}

export default Featured
