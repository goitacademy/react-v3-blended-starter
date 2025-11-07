import type { Photo } from "../../types/photo";
import { GridItem } from "../Grid/Grid";
import Grid from "../Grid/Grid";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotosGalleryProps {
  photos: Photo[];
  onOpenModal: (photo: Photo) => void;
}

export default function PhotosGallery({
  photos,
  onOpenModal,
}: PhotosGalleryProps) {
  // Якщо масив порожній — нічого не відображати
  if (!photos.length) return null;

  return (
    <Grid>
      {photos.map((photo) => (
        <GridItem key={photo.id}>
          <PhotosGalleryItem photo={photo} onClick={() => onOpenModal(photo)} />
        </GridItem>
      ))}
    </Grid>
  );
}
