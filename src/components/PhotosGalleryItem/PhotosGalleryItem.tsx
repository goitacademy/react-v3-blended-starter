import GridItem from "../GridItem/GridItem";
import { type Photo } from "../../types/photo";
import styles from "./PhotosGalleryItem.module.css";

interface PhotosGalleryItemProps {
  photos: Photo[];
}

export default function PhotosGalleryItem({ photos }: PhotosGalleryItemProps) {
  return (
    <GridItem>
      <div
        className={styles.thumb}
        style={{
          backgroundColor: "avg_color",
          borderColor: "avg_color",
        }}
      >
        {photos.map((photo) => (
          <img key={photo.id} src={photo.src.tiny} alt={photo.alt} />
        ))}
      </div>
    </GridItem>
  );
}
