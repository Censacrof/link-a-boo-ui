import Button from "../components/Button";
import FormControl from "../components/FormControl/FormControl";
import FormControlLabel from "../components/FormControl/FormControlLabel";
import Input from "../components/Input";

export default function Page() {
  return (
    <div className="main-grid">
      <div className="main-grid-breakout flex h-dvh flex-col">
        <Header />

        <ShortenUrlForm />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex h-20 items-center gap-2 px-4">
      <Spacer />
      header
    </div>
  );
}

function Spacer() {
  return <div className="grow" />;
}

function ShortenUrlForm() {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <div className="flex w-[min(90dvw,24rem)] flex-col items-stretch gap-3">
        <FormControl>
          <FormControlLabel>Enter long link</FormControlLabel>
          <Input placeholder="https://foo.bar.com/baz" />
        </FormControl>
        <FormControl isOptional>
          <FormControlLabel>Add alias</FormControlLabel>
          <Input placeholder="cool-page" />
        </FormControl>
        <Button>Make it short!</Button>
      </div>
    </div>
  );
}
