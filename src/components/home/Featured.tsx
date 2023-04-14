import { Component } from "solid-js"
import RandLogo from "/CompanyLogo.png"

const Featured: Component<{}> = (props) => {
  return (
    <section class="flex flex-col items-center gap-8 sm:mt-0 mt-16">
      <h2 class="text-lg font-normal">Finance Flow has been featured on</h2>
      <div class="flex sm:flex-row flex-col sm:gap-16 gap-6">
        <div class="flex flex-row justify-center">
          <img src={RandLogo} />
          <img src={RandLogo} />
        </div>
        <div class="flex flex-row justify-center">
          <img src={RandLogo} />
          <img src={RandLogo} />
        </div>
        <div class="flex flex-row justify-center">
          <img src={RandLogo} />
        </div>
      </div>
    </section>
  )
}

export default Featured
