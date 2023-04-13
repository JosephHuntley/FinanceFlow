// @refresh reload
import { Suspense, createSignal, onCleanup, onMount } from "solid-js"
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start"
import "./root.css"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Menu from "./components/layout/Menu"

export default function Root() {
  const [rect, setRect] = createSignal({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  const handler = (event: Event) => {
    setRect({ height: window.innerHeight, width: window.innerWidth })
  }

  onMount(() => {
    window.addEventListener("resize", handler)
  })

  onCleanup(() => {
    window.removeEventListener("resize", handler)
  })

  return (
    <Html lang="en" class="bg-bg">
      <Head>
        <Title>FinanceFlow</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            {rect().width > 680 ? <Header /> : <Menu />}
            <Routes>
              <FileRoutes />
            </Routes>
            {/* <Footer /> */}
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
