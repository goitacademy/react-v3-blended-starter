import type { Photo } from "../../types/photo";
import styles from "./PhotosGalleryItem.module.css";

interface PhotosGalleryItemProps {
  photo: Photo;
  onOpenModal: (photo: Photo) => void;
}

export default function PhotosGalleryItem({
  photo,
  onOpenModal,
}: PhotosGalleryItemProps) {
  return (
    <div
      onClick={() => onOpenModal(photo)}
      className={styles.thumb}
      style={{
        backgroundColor: photo.avg_color,
        borderColor: photo.avg_color,
      }}
    >
      <img src={photo.src.original} alt={photo.alt} />
    </div>
  );
}
