import Image from "next/image";
import { useState, useEffect } from "react";
export async function getServerSideProps() {
  const data = JSON.stringify({ time: new Date() });
  return { props: { data } };
}

export default function Home() {
  const [time, setTime] = useState<Date | null>(null);
  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((json) => setTime(new Date(json.time)));
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Welcome to{" "}
        <a href="https://nextjs.org">
          Next.js!{" "}
          {time &&
            `The time is ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}
        </a>
      </h1>
    </main>
  );
}
