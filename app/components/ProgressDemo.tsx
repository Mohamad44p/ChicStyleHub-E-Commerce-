"use client";

import { useEffect, useState } from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col h-[100vh] gap-10">
        <div className="flex mt-[20%] flex-col justify-center items-center">
          <h1 className="md:text-4xl text-2xl font-bold block">
            ChicStyle <span className="text-primary">Hub</span>
          </h1>
          <p className="md:text-4xl text-2xl font-bold block">is loading...</p>
        </div>
        <div className="flex justify-center items-center">
          <Progress
            value={progress}
            className="w-[60%] dark:bg-white dark:text-white"
          />
        </div>
      </div>
    </>
  );
}
