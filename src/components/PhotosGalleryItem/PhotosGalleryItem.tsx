import type { Photo } from "../../types/photo";
import GridItem from "../GridItem/GridItem";
import styles from "./PhotosGalleryItem.module.css";

interface PhotosGalleryItemProps {
  photo: Photo;
  selectPhoto: (photo: Photo | null) => void;
}

export default function PhotosGalleryItem({
  photo,
  selectPhoto,
}: PhotosGalleryItemProps) {
  return (
    <GridItem>
      <div
        onClick={() => selectPhoto(photo)}
        className={styles.thumb}
        style={{
          backgroundColor: photo.avg_color,
          borderColor: photo.avg_color,
        }}
      >
        <img src={photo.src.large} alt={photo.alt} />
      </div>
    </GridItem>
  );
}
