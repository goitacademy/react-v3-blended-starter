import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import { getPhotos } from "../../services/photos";
import type { Photo } from "../../types/photo";
import { useState } from "react";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const searchQuery = async (onSubmit: string) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const data = await getPhotos(onSubmit);
      setPhotos(data);
    } catch {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <>
      <Section>
        <Container>
          {isOpen && selectedPhoto && (
            <Modal photo={selectedPhoto} onClose={closeModal} />
          )}
          <Form onSubmit={searchQuery} />
          {isLoading && <Loader />}
          {isError && <h2> Ooops... Something went wrong </h2>}
          {photos.length > 0 && (
            <PhotosGallery photos={photos} onSelectPhoto={openModal} />
          )}
        </Container>
      </Section>
    </>
  );
}
