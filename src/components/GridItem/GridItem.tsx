import type { Photo } from "../../types/photo";
import style from "./GridItem.module.css";

interface GridItemProps {
  children: React.ReactNode;
  photo: Photo;
  onSelect: (photo: Photo) => void;
}

export default function GridItem({ children, photo, onSelect }: GridItemProps) {
  return <li onClick={() => onSelect(photo)} className={style.item}>{children}</li>;
}
