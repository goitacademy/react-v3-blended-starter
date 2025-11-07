import style from "./Grid.module.css";
import type { ReactNode } from "react";

interface GridProps {
  children?: ReactNode;
}

export default function Grid({ children }: GridProps) {
  return <ul className={style.list}>{children}</ul>;
}

export function GridItem({ children }: GridProps) {
  return <li className={style.gridItem}>{children}</li>;
}
