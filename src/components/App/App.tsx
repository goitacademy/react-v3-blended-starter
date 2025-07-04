import Section from "../Section/Section";
import Container from "../Container/Container";
import { getPhotos } from "../../services/photos";
import { useEffect } from "react";

export default function App() {
  const query: string = "cat";

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await getPhotos(query);
      console.log(data);
    };

    fetchPhotos();
  }, [query]);

  return (
    <>
      <Section>
        <Container>{/* Компоненти застосунку */}</Container>
      </Section>
    </>
  );
}
