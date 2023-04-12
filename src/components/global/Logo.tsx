import { Component } from "solid-js"
import Img from "/Logo.svg"

const Logo: Component<{}> = (props) => {
  return (
    <a href="/">
      <img src={Img} />
    </a>
  )
}

export default Logo
