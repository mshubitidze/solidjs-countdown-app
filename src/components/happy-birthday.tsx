import { createSignal } from "solid-js";
import { inDifferentLanguages } from "../config/data";

const RotatinginDifferentLanguages = () => {
  const [currentSet, setCurrentSet] = createSignal<string[]>(
    inDifferentLanguages.slice(17, 22)
  );

  const getRandomStrings = (arr: string[], num: number) => {
    const randomStrings = [];
    const shuffled = arr.sort(() => 0.5 - Math.random());
    for (let i = 0; i < num; i++) {
      randomStrings.push(shuffled[i]);
    }
    return randomStrings;
  };

  setInterval(() => {
    const randomStrings = getRandomStrings(inDifferentLanguages, 5);
    setCurrentSet(randomStrings);
  }, 2500);

  return (
    <div class="flex flex-col gap-2 md:gap-10 items-center justify-center">
      {currentSet().map((hbd, i) => (
        <>
          <p class="align-middle text-lg md:text-4xl">{hbd}</p>
          {i !== 4 && <div class="w-full h-0 border-accent border-b"></div>}
        </>
      ))}
    </div>
  );
};

export default RotatinginDifferentLanguages;
