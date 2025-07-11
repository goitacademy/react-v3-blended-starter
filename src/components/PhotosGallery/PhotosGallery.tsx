import Grid from "../Grid/Grid";
import type { Photo } from "../../types/photo";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotoGalleryProps {
  photos: Photo[];
  onClick: (photo: Photo) => void;
}

export default function PhotosGallery({ photos, onClick }: PhotoGalleryProps) {
  console.log(photos);

  return (
    <Grid>
      {photos.map((photo) => (
        <PhotosGalleryItem key={photo.id} photo={photo} onClick={onClick} />
      ))}
    </Grid>
  );
}
