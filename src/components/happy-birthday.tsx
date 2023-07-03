import { inDifferentLanguages } from "../config/data";
import { createSignal, createEffect, onCleanup, Component } from "solid-js";

const RotatinginDifferentLanguages: Component<{}> = ({}) => {
  const [currentSet, setCurrentSet] = createSignal<string[]>(
    inDifferentLanguages.slice(0, 3)
  );
  const NUMBER_OF_MESSAGES = 3;

  function getRandomStrings(arr: string[], num: number) {
    return arr.sort(() => 0.5 - Math.random()).slice(0, num);
  }

  createEffect(() => {
    const interval = setInterval(() => {
      const randomStrings = getRandomStrings(
        inDifferentLanguages,
        NUMBER_OF_MESSAGES
      );
      setCurrentSet(randomStrings);
    }, 2000);

    onCleanup(() => clearInterval(interval));
  });

  return (
    <div class="flex flex-col gap-2 md:gap-10 items-center justify-center">
      {currentSet().map((hbd, i) => (
        <>
          <p class="align-middle text-lg md:text-4xl">{hbd}</p>
          {i !== NUMBER_OF_MESSAGES - 1 && (
            <div class="w-full h-0 border-accent border-b-[1.5px]"></div>
          )}
        </>
      ))}
    </div>
  );
};

export default RotatinginDifferentLanguages;
