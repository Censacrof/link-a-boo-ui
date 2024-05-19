import Button from "./components/Button";
import FormControl from "./components/FormControl/FormControl";
import FormControlLabel from "./components/FormControl/FormControlLabel";
import Input from "./components/Input";

export default function Page() {
  return (
    <div className="main-grid">
      <div className="main-grid-breakout flex h-dvh flex-col items-center justify-center gap-4">
        <div className="flex flex-col gap-2">
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
    </div>
  );
}
