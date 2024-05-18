"use client";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="main-grid">
      <div className="main-grid-breakout flex h-dvh flex-col items-center justify-center gap-4 text-gray-950">
        <div className="flex flex-col gap-2">
          <input
            placeholder="https://foo.bar.com/baz"
            className="h-6 rounded border border-solid border-gray-950 px-2"
          />
          <Button>Make it short!</Button>
        </div>
      </div>
    </div>
  );
}
