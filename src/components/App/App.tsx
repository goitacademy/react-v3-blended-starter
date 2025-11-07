import Section from "../Section/Section";
import Container from "../Container/Container";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import { useState } from "react";
import Form from "../Form/Form";
import { getPhotos } from "../../services/photos";
import Loader from "../Loader/Loader";
import type { Photo } from "../../types/photo";
import Text from "../Text/Text";
import Modal from "../Modal/Modal";

export default function App() {
  //const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleSearch = async (term: string) => {
    //setQuery(term);
    setIsLoading(true);
    setIsError(false);

    try {
      const photosData = await getPhotos(term);
      setPhotos(photosData);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleOpenModal = (photo: Photo) => {
    setSelectedPhoto(photo.src.large);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSearch} />
          {isLoading && <Loader />}
          {isError && (
            <Text textAlign="center" marginBottom="20px">
              Something went wrong while loading photos 😢
            </Text>
          )}
          {photos.length > 0 && (
            <PhotosGallery photos={photos} onOpenModal={handleOpenModal} />
          )}
          {selectedPhoto && (
            <Modal onClose={handleCloseModal}>
              <img src={selectedPhoto} alt="Selected" />
            </Modal>
          )}
        </Container>
      </Section>
    </>
  );
}
