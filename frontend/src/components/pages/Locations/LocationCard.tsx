import type { Location } from "../../../api/api";

interface LocationCardProps {
  location: Location;
  goButton: (id: string) => void;
}

export default function LocationCard({ location, goButton }: LocationCardProps) {
  return (
    <div className="flex flex-col rounded-t-full overflow-hidden  bg-white w-60 h-105">
      <div className="h-60 overflow-hidden">
        <img
        
          src={location.imageUrl ?? "https://via.placehttps://res.cloudinary.com/dnxlfdsh5/image/upload/v1782595750/notfound_hzbshs.pngholder.com/400x300?text=No+Image"}
          alt={location.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-lg text-(--dark-color) leading-tight pb-2 pt-2">
          {location.name}
        </h3>



        <p className="text-md text-gray-400 italic pb-4">{location.address}</p>

        <button
          type="button"
          onClick={() => goButton(location.id)}
          className="mt-auto bg-(--bright-orange) text-[var(--primary-color)] text-xs font-semibold rounded-xl hover:opacity-90 transition py-2 "
        >
          Go there!
        </button>
      </div>
    </div>
  );
}