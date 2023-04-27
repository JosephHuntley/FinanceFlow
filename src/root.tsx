// @refresh reload
import { Suspense, createSignal, onCleanup, onMount } from "solid-js";
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
  Link,
} from "solid-start";
import "./root.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Menu from "./components/layout/Menu";
import Alert from "./components/global/Alert";

export default function Root() {
  const [rect, setRect] = createSignal({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handler = (event: Event) => {
    setRect({ height: window.innerHeight, width: window.innerWidth });
  };

  onMount(() => {
    window.addEventListener("resize", handler);
  });

  onCleanup(() => {
    window.removeEventListener("resize", handler);
  });

  return (
    <Html lang="en" class="bg-bg">
      <Head>
        <Title>FinanceFlow</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Font */}
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Alert />
            {rect().width > 680 ? <Header /> : <Menu />}
            <Routes>
              <FileRoutes />
            </Routes>
            <Footer />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
