import type { ReactNode } from "react";

export interface HeadingProps {
  children: ReactNode;
}

export function Heading({children}: HeadingProps) {
  return <h1 className="text-xl font-semibold">{children}</h1>;
}