"use client";

import { useUser } from "@clerk/nextjs";

export function WelcomeMessage() {
  const { user, isLoaded } = useUser();

  return (
    <div className="text-white">
      <h2 className="text-2xl font-medium lg:text-4xl">
        Welcome back{isLoaded ? ", " : " "}
        {user?.firstName}
      </h2>
      <p className="text-sm text-neutral-200 lg:text-base">
        This is your financial overview report
      </p>
    </div>
  );
}
