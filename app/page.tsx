export default function Home() {
  return (
    <div className="main-grid">
      <div className="main-grid-breakout flex h-dvh flex-col items-center justify-center gap-4 bg-gray-50 text-gray-950">
        <h2 className="text-3xl">Link &apos;a boo!</h2>
        <form className="flex flex-col gap-2">
          <input
            placeholder="https://foo.bar.com/baz"
            className="h-6 rounded-full border border-solid border-gray-950 px-2"
          />
          <button className="h-8 rounded bg-gray-200 px-2">
            Make it short!
          </button>
        </form>
      </div>

      <div className="main-grid-main">gigio</div>
    </div>
  );
}
