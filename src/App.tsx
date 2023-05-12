import { Component, createSignal, createEffect, onCleanup } from "solid-js";

const App: Component = () => {
  const [currentDate, setCurrentDate] = createSignal(
    Math.floor(Date.now() / 1000)
  );
  const destination = Math.floor(new Date("2023-07-03").getTime() / 1000);

  createEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(Math.floor(Date.now() / 1000));
    }, 1000);

    onCleanup(() => clearInterval(interval));
  });

  const leftPad = (s: number) => {
    return s.toString().length < 2
      ? "0".repeat(2 - s.toString().length) + s
      : s;
  };

  const formatCountdown = (remainingTime: number) => {
    const seconds = leftPad(Math.round(remainingTime % 60));
    const minutes = leftPad(Math.floor((remainingTime / 60) % 60));
    const hours = leftPad(Math.floor((remainingTime / 3600) % 24));
    const days = Math.floor(remainingTime / 86400);

    return (
      <div class="flex flex-row items-center justify-center gap-4">
        <div>{days}</div>
        <div>:</div>
        <div>{hours}</div>
        <div>:</div>
        <div>{minutes}</div>
        <div>:</div>
        <div>{seconds}</div>
      </div>
    );
  };

  const remainingTime = () => destination - currentDate();

  return (
    <main class="gap-4 select-none bg-indigo-900 flex items-center justify-center flex-col h-screen text-indigo-200">
      <p class="text-3xl md:text-6xl">
        {() => formatCountdown(remainingTime())}
      </p>
    </main>
  );
};

export default App;
