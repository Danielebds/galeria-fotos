import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SearchBar from "../components/SearchBar";
import PhotoGrid from "../components/PhotoGrid";

const Gallery = () => {
  const [photos, setPhotos] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [defaultPhotos, setDefaultPhotos] = useState([]); 


  useEffect(() => {
    const fetchDefaultPhotos = async () => {
      try {
        const API_KEY = "28487805-496391a1a3547e2b36620e6a0"; 
        const response = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=natureza&lang=pt&image_type=photo`
        );
        const data = await response.json();
        if (data.hits) {
          setDefaultPhotos(
            data.hits.map((photo) => ({
              id: photo.id,
              name: photo.tags, 
              url: photo.webformatURL,
            }))
          );
        }
      } catch (error) {
        console.error("Erro ao carregar as fotos padrão:", error);
      }
    };

    fetchDefaultPhotos();
  }, []); 

    const searchPhotos = async () => {
    if (!searchTerm.trim()) {
      setPhotos([]); 
    }

    try {
      const API_KEY = "28487805-496391a1a3547e2b36620e6a0";
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
          searchTerm
        )}&lang=pt&image_type=photo`
      );
      const data = await response.json();
      if (data.hits) {
        setPhotos(
          data.hits.map((photo) => ({
            id: photo.id,
            name: photo.tags, 
            name: photo.tags, 
            url: photo.webformatURL,
          }))
        );
      } else {
        setPhotos([]);
      }
    } catch (error) {
      console.error("Erro ao carregar as fotos:", error);
    }
  };

  
  const photosToShow = searchTerm ? photos : defaultPhotos;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchPhotos={searchPhotos}
        />
        <PhotoGrid photos={photosToShow} />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
