import Image from "next/image";
import logo from "../public/linkaboo-logo.jpeg";

export default function Home() {
  return (
    <div className="main-grid">
      <div className="main-grid-breakout flex h-dvh flex-col items-center justify-center gap-4 bg-gray-50 text-gray-950">
        <Image src={logo} alt="Link 'a boo" className="w-[min(25rem,80dvw)]" />
        <div className="flex flex-col gap-2">
          <input
            placeholder="https://foo.bar.com/baz"
            className="h-6 rounded border border-solid border-gray-950 px-2"
          />
          <button className="h-8 rounded bg-gray-300 px-2 hover:bg-gray-200 active:bg-gray-100 ">
            Make it short!
          </button>
        </div>
      </div>
    </div>
  );
}
