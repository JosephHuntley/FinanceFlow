import { Component } from "solid-js"
import { A, useLocation } from "@solidjs/router"
import Logo from "../global/Logo"

const Header: Component<{}> = (props) => {
  const location = useLocation()
  const active = (path: string) =>
    path == location.pathname ? "underline" : ""
  return (
    <header class=" z-10 flex flex-row justify-between align-center w-full py-8 px-[10.25rem] fixed">
      {/* Links */}
      <nav class="flex flex-row items-center  gap-8 h-16">
        <Logo />
        <div class="bg-dark-blue w-px h-full" />
        <ul class="flex flex-row gap-7 text-xs">
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
        </ul>
      </nav>
      {/* Download App Button */}
      <button class="bg-blue rounded-[5rem] py-5 px-8 flex flex-row justify-center items-center gap-1 w-52 h-14 leading-4">
        Download App
      </button>
    </header>
  )
}

export default Header
