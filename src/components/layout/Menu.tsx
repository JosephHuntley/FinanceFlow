import { Component, Show, createSignal } from "solid-js"
import Logo from "../global/Logo"

import { A, useLocation } from "@solidjs/router"
import Button from "../global/Button"

const Menu: Component<{}> = (props) => {
  const [isMenu, setIsMenu] = createSignal(false)
  const location = useLocation()
  const active = (path: string) =>
    path == location.pathname ? "underline" : ""
  return (
    <header class={`fixed z-50 w-screen ${isMenu() && "bg-bg"}`}>
      <div class="flex flex-row justify-between items-center">
        <Logo />
        <div class="w-max">
          <div
            class={`burger burger1 ${isMenu() && "toggled"}`}
            onClick={() => setIsMenu(!isMenu())}
            aria-label="Hamburger Menu"
          >
            <div />
          </div>
        </div>
      </div>
      <Show when={isMenu()}>
        <nav class=" w-screen h-screen relative z-50">
          <ul
            onClick={() => setIsMenu(!isMenu())}
            class="w-full h-full flex flex-col gap-20 text-3xl justify-center items-center"
          >
            <li>
              <A href="/" class={active("/")}>
                HOME
              </A>
            </li>
            <li>
              <A href="/about" class={active("/about")}>
                ABOUT
              </A>
            </li>
            <li>
              <A href="/pricing" class={active("/pricing")}>
                PRICING
              </A>
            </li>
            <li>
              <A href="/tokens" class={active("/tokens")}>
                TOKENS
              </A>
            </li>
            <li>
              <A href="/contact" class={active("/contact")}>
                CONTACT US
              </A>
            </li>
            {/* Download App Button */}
            <Button className="text-base">Download App</Button>
          </ul>
        </nav>
        <div class="blur-2xl bg-blue/40 h-[616px] w-[616px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </Show>
    </header>
  )
}

export default Menu
