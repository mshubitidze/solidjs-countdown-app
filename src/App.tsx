import { Component } from "solid-js";
import BdayTimer from "./components/bday-timer";

const App: Component = () => {
  return (
    <main class="flex flex-col select-none gap-10 items-center justify-center h-[100svh]">
      <BdayTimer />
    </main>
  );
};

export default App;
