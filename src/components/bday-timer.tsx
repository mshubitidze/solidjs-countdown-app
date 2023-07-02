import { Component, createSignal, createEffect, onCleanup } from "solid-js";
import HappyBirthday from "./happy-birthday";

const BdayTimer: Component<{}> = ({}) => {
  const [currentDate, setCurrentDate] = createSignal(
    Math.floor(Date.now() / 1000)
  );
  const bday = Math.floor(
    new Date("2023-07-03T00:00:00+04:00").getTime() / 1000
  );

  createEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(Math.floor(Date.now() / 1000));
    }, 1000);

    onCleanup(() => clearInterval(interval));
  });

  const formatCountdown = (remainingTime: number) => {
    const seconds = Math.round(remainingTime % 60);
    const minutes = Math.floor((remainingTime / 60) % 60);
    const hours = Math.floor((remainingTime / 3600) % 24);
    const days = Math.floor(remainingTime / 86400);

    const padded = [seconds, minutes, hours, days].map((el) =>
      el.toLocaleString().padStart(2, "0")
    );

    return (
      <div class="flex flex-row items-center gap-3 justify-center md:gap-4">
        {padded.reverse().map((el, i) => (
          <>
            <p class="flex items-center justify-center w-[50px] md:w-[100px]">
              {el}
            </p>
            {i !== 3 && (
              <p class="-translate-y-[3px] text-accent md:-translate-y-1.5">
                :
              </p>
            )}
          </>
        ))}
      </div>
    );
  };

  const remainingTime = () => bday - currentDate();

  return (
    <div>
      {remainingTime() >= 0 ? (
        () => (
          <p class="font-bold text-5xl md:text-7xl rounded-md">
            {formatCountdown(remainingTime())}
          </p>
        )
      ) : (
        <HappyBirthday />
      )}
    </div>
  );
};

export default BdayTimer;
