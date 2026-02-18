import Section from "../Section/Section";
import Container from "../Container/Container";
import { useState } from "react";
import type { Photo } from "../../types/photo";
import Form from "../Form/Form";
import { getPhotos } from "../../services/photos";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";

export default function App() {
  const [photos, setPhotos] = useState<Photo[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleSubmit = async (query: string) => {
    try {
      setPhotos(null);
      setIsError(false);
      setIsLoading(true);
      const photos = await getPhotos(query);
      setPhotos(photos);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const onOpenModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const onCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSubmit} />
          {isLoading && <Loader />}
          {isError && <Text>Something went wrong!</Text>}
          {photos &&
            !isLoading &&
            !isError &&
            (photos.length == 0 ? (
              <Text>No photos for such topic </Text>
            ) : (
              <PhotosGallery photos={photos} onOpenModal={onOpenModal} />
            ))}
        </Container>
      </Section>
      {selectedPhoto && (
        <Modal onClose={onCloseModal}>
          <img src={selectedPhoto.src.large} alt={selectedPhoto.alt} />
        </Modal>
      )}
    </>
  );
}
