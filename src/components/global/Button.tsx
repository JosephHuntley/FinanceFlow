import { JSX, Component } from "solid-js";

const Button: Component<{
  children: JSX.Element;
  variant?: "primary" | "alt" | "white";
  className?: string;
}> = ({ children, variant, className = "" }) => {
  return (
    <button
      class={`${
        variant === "alt"
          ? "bg-white/10"
          : variant === "white"
          ? "bg-white"
          : "bg-blue"
      } ${variant === "alt" ? "hover:bg-blue" : "hover:bg-alt-blue"} ${
        variant === "white" ? "text-blue hover:text-white" : ""
      }  rounded-[5rem] py-5 px-8 flex flex-row justify-center items-center gap-1 w-52 h-14 leading-4 font-bold sm:min-w-[200px] w-full sm:w-min  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
