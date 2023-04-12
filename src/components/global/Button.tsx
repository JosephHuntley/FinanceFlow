import { JSX, Component } from "solid-js"

const Button: Component<{
  children: JSX.Element
  variant?: "primary" | "alt" | "white"
  className?: string
}> = ({ children, variant, className = "" }) => {
  return (
    <button
      class={`bg-${
        variant === "alt" ? "white/10" : variant === "white" ? "white" : "blue"
      } ${variant === "alt" ? "hover:bg-blue" : "hover:bg-alt-blue"} ${
        variant === "white" ? "text-blue hover:text-white" : ""
      }  rounded-[5rem] py-5 px-8 flex flex-row justify-center items-center gap-1 w-52 h-14 leading-4 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
