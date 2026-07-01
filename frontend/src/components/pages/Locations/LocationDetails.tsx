import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavHeader from "../../ui/NavBar";
import LocationCard from "./LocationCard";
import { getLocationById, getLocations } from "../../../api/api";
import type { LocationDetail, Location } from "../../../api/api";

export default function LocationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [location, setLocation] = useState<LocationDetail | null>(null);
  const [recommended, setRecommended] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const [detailRes, allRes] = await Promise.all([
          getLocationById(id),
          getLocations(),
        ]);

        setLocation(detailRes.location);

        // Recomendados: misma categoria, excluyendo el actual, max 6
        const others = allRes.locations
          .filter(
            (loc) =>
              loc.id !== id && loc.category === detailRes.location.category,
          )
          .slice(0, 6);
        setRecommended(others);
      } catch {
        setError("Could not load location details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleGoThere = (locationId: string) => {
    navigate(`/places/detail/${locationId}`);
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      veterinary: "Veterinary",
      restaurant: "Restaurant",
      other: "Other Place",
    };
    return labels[category] ?? category;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-(--primary-color)">
        <NavHeader logo="WAG!" />
        <p className="text-center mt-20 text-(--dark-text)">Loading...</p>
      </div>
    );
  }

  if (error || !location) {
    return (
      <div className="min-h-screen bg-(--primary-color)">
        <NavHeader logo="WAG!" />
        <p className="text-center mt-20 text-red-500">
          {error ?? "Location not found."}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-(--primary-color)">
      <NavHeader logo="WAG!" />

      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-10">
        {/* Boton volver */}
        <button
          type="button"
          onClick={() => navigate("/places")}
          className="self-start text-sm font-semibold text-(--bright-orange) "
        >
          ← Back to Places
        </button>

        {/* Seccion superior: info + mapa */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Info izquierda */}
          <div className="flex-1 flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-(--bright-orange)">
              {getCategoryLabel(location.category)}
            </span>

            <h1 className="text-4xl font-extrabold text-(--dark-color) ">
              {location.name}
            </h1>

            {/* Rating placeholder */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-(--bright-orange) text-lg">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-500">(Coming soon)</span>
            </div>

            {/* Direccion */}
            <div className="bg-[var(--orange-color)]/10 rounded-2xl p-4 flex flex-col gap-3 pb-5">
              {/* Descripcion */}
              {location.description && (
                <p className="text-(--dark-text) text-base leading-relaxed">
                  {location.description}
                </p>
              )}


              <div className="flex gap-3 items-start">
                <span className="text-lg">
                  <img
                    className="h-5 w-5"
                    src="https://res.cloudinary.com/dnxlfdsh5/image/upload/v1782602482/ubicacion_1_obqb9p.png"
                    alt="icono de ubicacion, pin de ubicaicon."
                  />
                </span>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase">
                    Address
                  </p>
                  <p className="text-(--dark-text) text-sm">
                    {location.address}
                  </p>
                </div>
              </div>

              {location.phone && (
                <div className="flex gap-3 items-start">
                  <span className="text-lg">
                    <img
                      className="h-5 w-5"
                      src="https://res.cloudinary.com/dnxlfdsh5/image/upload/v1782602542/telefono_aim8bx.png"
                      alt="icono de telefono en color negro"
                    />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase">
                      Phone
                    </p>
                    <a
                      href={`tel:${location.phone}`}
                      className="text-(--bright-blue) text-sm hover:underline"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
              )}

              {location.schedule && (
                <div className="flex gap-3 items-start">
                  <span className="text-lg">
                    <img
                      className="h-5 w-5"
                      src="https://res.cloudinary.com/dnxlfdsh5/image/upload/v1782602819/calendario_r87kyp.png"
                      alt="icono de calendario con reloj, referencia a que este es el horario del lugar "
                    />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase">
                      Schedule
                    </p>
                    <p className="text-(--dark-text) text-sm whitespace-pre-line">
                      {location.schedule}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mapa derecha - placeholder hasta tener Google Maps API */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="w-full h-80 rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-4xl mb-2">🗺️</p>
                <p className="text-sm font-medium">Map coming soon</p>
                <p className="text-xs mt-1">{location.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seccion recomendados */}
        {recommended.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-(--dark-text)">
              Recommended
            </h2>

            <div className="flex gap-8 overflow-x-auto pb-4">
              {recommended.map((loc) => (
                <LocationCard
                  key={loc.id}
                  location={loc}
                  goButton={handleGoThere}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
