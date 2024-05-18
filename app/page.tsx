import Button from "./components/Button";
import Input from "./components/Input";

export default function Home() {
  return (
    <div className="main-grid">
      <div className="main-grid-breakout flex h-dvh flex-col items-center justify-center gap-4 text-gray-950">
        <div className="flex flex-col gap-2">
          <Input placeholder="https://foo.bar.com/baz" />
          <Button>Make it short!</Button>
        </div>
      </div>
    </div>
  );
}
