"use client";

import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { FooterBunny } from "./footer-bunny";

type TimeParts = {
  hour: number;
  minute: number;
  period: "am" | "pm";
};

function getTimeParts(date: Date): TimeParts {
  const hour = parseInt(
    date.toLocaleTimeString("en-US", { hour: "numeric", hour12: true }),
  );
  const minute = parseInt(
    date.toLocaleTimeString("en-US", { minute: "numeric" }),
  );
  const period = date
    .toLocaleTimeString("en-US", { hour: "numeric", hour12: true })
    .toLowerCase()
    .includes("pm")
    ? "pm"
    : "am";
  return { hour, minute, period };
}

function get24Hour(date: Date): number {
  return parseInt(
    date.toLocaleTimeString("en-US", { hour: "numeric", hour12: false }),
  );
}

export function Footer() {
  const [time, setTime] = useState<TimeParts | null>(null);
  const [sleeping, setSleeping] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(getTimeParts(now));
      const hour24 = get24Hour(now);
      setSleeping(hour24 >= 22 || hour24 < 7);
    };
    tick();
    const interval = setInterval(tick, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="">
      <div>
        {/* <p style={{ fontVariantNumeric: 'tabular-nums' }}> */}
        {/* <span
            style={{
              opacity: time ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            <NumberFlow value={time?.hour ?? 12} />:
            <NumberFlow
              value={time?.minute ?? 0}
              format={{ minimumIntegerDigits: 2 }}
            />
            {time?.period ?? 'am'}
          </span>{' '} */}
        <span
          style={{
            display: "inline-block",
            verticalAlign: "bottom",
            marginBottom: "-6px",
            opacity: time ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <FooterBunny size={48} sleeping={sleeping} />
        </span>
        {/* </p> */}
      </div>
    </footer>
  );
}
