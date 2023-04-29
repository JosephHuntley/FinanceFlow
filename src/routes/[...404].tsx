import { useNavigate } from "solid-start";
import Button from "~/components/global/Button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <main class="text-center h-screen w-full flex flex-col place-content-center items-center">
      <h1 class="text-[11.25rem] font-bold text-blue leading-[160px]">404</h1>
      <h1 class="text-4xl font-bold">Page Not Found</h1>
      <p class="max-w-[324px] sm:max-w-[556px] mt-4">
        The page you're looking for can't be found. Double-check the URL and try
        again. Or click the button below.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10">
        <Button
          onClick={() => {
            navigate("/pricing");
          }}
        >
          View Pricing
        </Button>
        <Button
          variant="alt"
          onClick={() => {
            navigate("/");
          }}
        >
          Go Home
        </Button>
      </div>
      <div class="relative w-0 h-0">
        <div class="blur-2xl bg-[--opac-blue] h-[680px] w-[680px] rounded-full absolute right-[-325px] top-[-550px] " />
      </div>
    </main>
  );
}
