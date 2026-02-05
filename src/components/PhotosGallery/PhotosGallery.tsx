import Grid from "../Grid/Grid";
import type { Photo } from "../../types/photo";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotosGalleryProps {
  photos: Photo[];
  selectPhoto: (photo:Photo | null) => void;
}

export default function PhotosGallery({ photos,selectPhoto }: PhotosGalleryProps) {
  return (
    <Grid>
      {photos.map((photo) => (
        <PhotosGalleryItem selectPhoto={selectPhoto} key={photo.id} photo={photo} />
      ))}
    </Grid>
  );
}
