import type { Photo } from "../../types/photo";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotosGalleryProps {
  photos: Photo[];
  onOpenModal: (photo: Photo) => void;
}

export default function PhotosGallery({
  photos,
  onOpenModal,
}: PhotosGalleryProps) {
  return (
    <Grid>
      {photos.map((photo) => {
        return (
          <GridItem key={photo.id}>
            <PhotosGalleryItem onOpenModal={onOpenModal} photo={photo} />
          </GridItem>
        );
      })}
    </Grid>
  );
}
