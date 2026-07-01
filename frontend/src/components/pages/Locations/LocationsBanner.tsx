import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BANNER_ITEMS = [
  {
    category: "restaurant",
    label: "Restaurants",
    description: "Find pet-friendly restaurants and cafés near you.",
    image: "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1782585496/restaurante_xuqsjs.jpg",
  },
  {
    category: "veterinary",
    label: "Veterinarians",
    description: "Find the best vets to care for your pet.",
    image: "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1782585488/vet_ere3ge.jpg",
  },
  {
    category: "other",
    label: "Other places",
    description: "Hotels, parks, stores and more that welcome your pet.",
    image: "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1782585497/cuddle_hc6f8a.jpg",
  },
];

export default function LocationsBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const navigate = useNavigate();

  // Cambia la imagen automaticamente cada 4 segundos con animacion de fundido
  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % BANNER_ITEMS.length);
        setFading(false);
      }, 800);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index === activeIndex) return;
    setFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setFading(false);
    }, 800);
  };

  const active = BANNER_ITEMS[activeIndex];

  return (
    <div className="relative w-full h-[700px] overflow-hidden bg-[var(--dark-color)]">
      {/* Imagen de fondo con transicion de fundido */}
      <img
        src={active.image}
        alt={active.label}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-800"
        style={{ opacity: fading ? 0 : 1 }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido encima */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-[var(--primary-color)] text-center px-6 transition-opacity duration-400"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <h2 className="text-5xl font-extrabold mb-3">{active.label}</h2>
        <p className="text-lg opacity-90 mb-6 max-w-md">{active.description}</p>
    
     
      </div>

      {/* Circulitos de navegacion */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {BANNER_ITEMS.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex
                ? "bg-[var(--orange-color)] scale-125"
                : "bg-[var(--orange-color)]/50 hover:bg-[var(--orange-color)]/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}