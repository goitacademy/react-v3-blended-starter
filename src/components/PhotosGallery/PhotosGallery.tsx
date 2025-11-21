import type { Photo } from "../../types/photo";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotosGalleryProps {
  photos: Photo[];
  onSelectPhoto: (photo: Photo) => void;
}
export default function PhotosGallery({
  photos,
  onSelectPhoto,
}: PhotosGalleryProps) {
  return (
    <Grid>
      {photos.map((item) => (
        <GridItem key={item.id}>
          <PhotosGalleryItem photo={item} onSelectPhoto={onSelectPhoto} />
        </GridItem>
      ))}
    </Grid>
  );
}
