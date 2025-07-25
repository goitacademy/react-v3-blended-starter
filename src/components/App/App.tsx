import { useState } from "react";
import { type Photo } from "../../types/photo";
import Section from "../Section/Section";
import { getPhotos } from "../../services/photos";
import Container from "../Container/Container";
import css from "./App.module.css";
import Form from "../Form/Form";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";
import Modal from "../Modal/Modal";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  const handleSearch = async (search: string) => {
    try {
      setIsLoading(true);
      setIsError(false);

      const fetchPhotos = await getPhotos({
        query: search,
        page: 1,
        per_page: 80,
      });
      setPhotos(fetchPhotos);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={css.app}>
        <Section>
          <Container>
            <Form onSubmit={handleSearch} />
            {isLoading && <Loader />}
            {isError && (
              <Text textAlign="center" marginBottom="20">
                Something went wrong. Please try again later.{" "}
              </Text>
            )}
            {photos.length > 0 && (
              <PhotosGallery photos={photos} onSelect={openModal} />
            )}
            {isModalOpen && selectedPhoto && (
              <Modal onClose={closeModal} photo={selectedPhoto}>
                <img
                  src={selectedPhoto.src.large}
                  alt={selectedPhoto.alt}
                  style={{ width: "100%", height: "auto" }}
                />
              </Modal>
            )}
          </Container>
        </Section>
      </div>
    </>
  );
}
