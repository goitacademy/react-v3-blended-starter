// import GridItem from "../GridItem/GridItem";
import { type Photo } from "../../types/photo";
import styles from "./PhotosGalleryItem.module.css";

interface PhotosGalleryItemProps {
  children?: React.ReactNode;
  photo: Photo;
  onSelect: (photo: Photo) => void;
}

export default function PhotosGalleryItem({ photo, onSelect }: PhotosGalleryItemProps) {
  if (!photo) {
    return <div>No photo data available</div>;
  }

  if (!photo.src || !photo.src.original) {
    return <div>Image source not available</div>;
  }

  return (
    // <GridItem>
    //   {/* console.log(photo) */}
    <div
      className={styles.thumb}
      onClick={() => {
        onSelect(photo);
        console.log("Photo selected:", photo);
      }}
      style={{
        backgroundColor: photo.avg_color,
        borderColor: photo.avg_color,
      }}
    >
      <img src={photo.src.original} alt={photo.alt} />
    </div>
    // </GridItem>
  );
}
