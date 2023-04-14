import { Component, Show, createSignal } from "solid-js"
import { AiOutlineClose } from "solid-icons/ai"

const Alert: Component<{}> = (props) => {
  const [isOpen, setIsOpen] = createSignal(true)
  return (
    <Show when={isOpen()}>
      <div
        class="fixed left-1/2 transform -translate-x-1/2 bg-blue/70 hover:opacity-50 px-4 py-2 mt-4 rounded-lg max-w-[33vw] flex flex-row gap-2 items-center"
        style={{ "z-index": "99999" }}
      >
        <p>
          This project is still under development and is updated daily. Feel
          free to check out the{" "}
          <a
            class="underline"
            href="https://www.figma.com/community/file/1224405977341356807"
            target="_blank"
            rel="noreferrer"
          >
            figma design
          </a>{" "}
          or{" "}
          <a
            class="underline"
            href="https://github.com/JosephHuntley/FinanceFlow"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </p>
        <AiOutlineClose
          class="cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </Show>
  )
}

export default Alert
