import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import type { Photo } from "../../types/photo";
import { getPhotos } from "../../services/photos";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Modal from "../Modal/Modal";
import { useQuery } from "@tanstack/react-query";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const { isError, isLoading, data } = useQuery({
    queryKey: ["photos", query],
    queryFn: () => getPhotos(query),
    enabled: Boolean(query),
  });

  useEffect(() => {
    if (query && data?.length === 0) {
      toast.error("No found photos");
    }
  }, [data, query]);

  const handleSubmit = async (value: string) => {
    setQuery(value);
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSubmit} />
          {isLoading && <Loader />}
          {isError && <Text textAlign="center">Somesing went wrong</Text>}
          {data && data.length > 0 && (
            <PhotosGallery selectPhoto={setSelectedPhoto} photos={data} />
          )}
          {selectedPhoto && (
            <Modal onClose={() => setSelectedPhoto(null)}>
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
