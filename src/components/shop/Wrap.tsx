import type { ReactNode } from "react";

export default function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto max-w-[1320px] px-12 max-[640px]:px-4.5 ${className}`}>{children}</div>
  );
}
