import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; //da error pero si lo quito no funciona, no tocar lol.
import NavHeader from "../../ui/NavBar";
import LocationsBanner from "./LocationsBanner";
import LocationCard from "./LocationCard";
import { getLocations } from "../../../api/api";
import type { Location } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import Footer from "../../ui/Footer";

const CATEGORIES = [
  { key: "veterinary", label: "Veterinarians" },
  { key: "restaurant", label: "Restaurants" },
  { key: "other", label: "Other Places" },
];

export default function LocationsDisplay() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getLocations();
        setLocations(data.locations);
      } catch {
        setError("Could not load locations. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const getByCategory = (category: string) =>
    locations.filter((loc) => loc.category === category);

  const handleGoThere = (id: string) => {

    navigate(`/places/detail/${id}`);
  };

  return (
    <div className="bg-(--primary-color) min-h-screen">
      <NavHeader logo="WAG!" />

      {/* Banner */}
      <LocationsBanner />

      {/* Secciones por categoria */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 ">
        {loading && (
          <p className="text-center text-(--dark-color) text-lg pt-10">Loading locations...</p>
        )}

        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {!loading && !error && CATEGORIES.map(({ key, label }) => {
          const items = getByCategory(key);
          if (items.length === 0) return null;

          return (
            <section key={key}>
              <h2 className="text-2xl font-extrabold text-(--dark-color) mb-6 pt-10">
                {label}
              </h2>

              <Swiper
                slidesPerView={4}
                spaceBetween={24}
                className="pb-4"
              >
                {items.map((location) => (
                  <SwiperSlide key={location.id} className="w-60">
                    <LocationCard
                      location={location}
                      goButton={handleGoThere}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              
            </section>
          );
        })}

        
      </div>
       <Footer logo="WAG!" socialMedia={[]} />
    </div>
  );
}