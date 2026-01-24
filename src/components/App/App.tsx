import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import type { Photo } from "../../types/photo";
import { getPhotos } from "../../services/photos";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Modal from "../Modal/Modal";

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (query: string) => {
    try {
      setIsError(false);
      setIsLoading(true);
      setPhotos([]);
      const result = await getPhotos(query);
      if (result.length === 0) {
        toast.error("No found photos");
        return;
      }
      setPhotos(result);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelecdedPhoto = (photo: Photo | null) => {
    setSelectedPhoto(photo);
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSubmit} />
          {isLoading && <Loader />}
          {isError && <Text textAlign="center">Somesing went wrong</Text>}
          {photos.length > 0 && (
            <PhotosGallery selectPhoto={handleSelecdedPhoto} photos={photos} />
          )}
          {selectedPhoto && (
            <Modal onClose={() => handleSelecdedPhoto(null)}>
              <div
                style={{
                  backgroundColor: selectedPhoto.avg_color,
                  borderColor: selectedPhoto.avg_color,
                }}
              >
                <img src={selectedPhoto.src.large} alt={selectedPhoto.alt} />
              </div>
            </Modal>
          )}
        </Container>
      </Section>
      <Toaster />
    </>
  );
}
