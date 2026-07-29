"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface WaitlistContextValue {
  members: number;
  addMember: () => void;
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

const GOAL = 2000;
const INITIAL_MEMBERS = 1240;

export { GOAL };

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const addMember = () => setMembers((m) => m + 1);
  return (
    <WaitlistContext.Provider value={{ members, addMember }}>{children}</WaitlistContext.Provider>
  );
}

export function useWaitlist(): WaitlistContextValue {
  const ctx = useContext(WaitlistContext);
  if (!ctx) throw new Error("useWaitlist must be used within a WaitlistProvider");
  return ctx;
}
