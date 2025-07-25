import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";
import { type Photo } from "../../types/photo";
// import css from "./Photo/sGallery.module.css";
interface PhotosGalleryProps {
  photos: Photo[];
  children?: React.ReactNode;
  onSelect: (photo: Photo) => void;
}

export default function PhotosGallery({ photos, onSelect }: PhotosGalleryProps) {
  if (!photos || photos.length === 0) {
    return <p>No photos available</p>;
  }
  // console.log(photos);
  return (
    <Grid>
      {photos.map((photo) => (
        <GridItem key={photo.id} photo={photo} onSelect={onSelect}>
          <PhotosGalleryItem photo={photo} onSelect={onSelect} />
        </GridItem>
      ))}
    </Grid>
  );
}
