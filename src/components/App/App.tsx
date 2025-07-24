import { useState } from "react";
import { type Photo } from "../../types/photo";
import Section from "../Section/Section";
import { getPhotos } from "../../services/photos";
import Container from "../Container/Container";
import css from "./App.module.css";
import Form from "../Form/Form";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

export default function App() {
  // const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);

  const handleSearch = async (search: string) => {
    try {
      const fetchPhotos = await getPhotos({
        query: search,
        page: 1,
        per_page: 80,
      });
      setPhotos(fetchPhotos);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  return (
    <>
      <div className={css.app}>
        <Section>
          <Container>
            <Form onSubmit={handleSearch} />
            <PhotosGalleryItem photos={photos} />
          </Container>
        </Section>
      </div>
    </>
  );
}
