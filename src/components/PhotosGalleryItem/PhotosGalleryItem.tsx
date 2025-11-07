import GridItem from "../GridItem/GridItem";
import type { Photo } from "../../types/photo";
import styles from "./PhotosGalleryItem.module.css";

interface PhotosGalleryItemProps {
  photo: Photo;
  onClick: () => void;
}

export default function PhotosGalleryItem({
  photo,
  onClick,
}: PhotosGalleryItemProps) {
  const { src, alt, avg_color } = photo;

  return (
    <GridItem>
      <div
        className={styles.thumb}
        style={{
          backgroundColor: avg_color,
          borderColor: avg_color,
        }}
        onClick={onClick}
      >
        <img srcSet={`${src.large}, ${src.original}`} alt={alt} />
      </div>
    </GridItem>
  );
}
