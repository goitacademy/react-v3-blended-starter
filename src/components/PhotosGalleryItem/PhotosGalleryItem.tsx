import type { Photo } from "../../types/photo";
import GridItem from "../GridItem/GridItem";

import styles from "./PhotosGalleryItem.module.css";

interface PhotoGalleryItemProps {
  photo: Photo;
  onClick: (photo: Photo) => void;
}

export default function PhotosGalleryItem({
  photo,
  onClick,
}: PhotoGalleryItemProps) {
  return (
    <GridItem>
      <div
        className={styles.thumb}
        style={{
          backgroundColor: photo.avg_color,
          borderColor: photo.avg_color,
        }}
      >
        <img
          src={photo.src.medium}
          alt={photo.alt}
          onClick={() => onClick(photo)}
        />
      </div>
    </GridItem>
  );
}
