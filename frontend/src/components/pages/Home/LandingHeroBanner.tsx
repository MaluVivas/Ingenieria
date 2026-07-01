import LandingButton from "./LandingButton";



interface LandingHeroBannerProps {
  title: string;
}

export default function LandingHeroBanner(props:LandingHeroBannerProps) {
  return (
    <div className="relative w-full bg-(--blue-color) flex items-center h-10 md:h-130 overflow-hidden">

      {/* Semicírculo naranja */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[180%] aspect-square rounded-full bg-(--orange-color) translate-x-[40%]" />

      {/* Grid 3 columnas */}
      <div className="relative z-10 w-full h-full grid grid-cols-3">

        {/* Columna 1*/}
        <div />

        {/* Columna 2  */}
        <div className="flex flex-col items-center justify-center gap-4 text-center ">
          <h1 className="text-white text-5xl  font-bold text-center max-w-[200px] leading-normal">
            {props.title}
          </h1>
          <LandingButton text="Log in" type="large" />
        </div>

        {/* Columna 3*/}
        <div className="absolute bottom-0 right-0 w-1/3 h-[120%] flex items-end justify-center">
          <img
            src="https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315263/orangeCat_ifdqop.png"
            alt="Gato naranja"
            className="z-20 h-[90%] w-auto object-contain object-bottom"
          />
          <img
            src="https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315263/flufflyDog_fji2nt.png"
            alt="Perro"
            className="z-10 h-[110%] w-auto object-contain object-bottom -scale-x-110 -ml-20"
          />
        </div>

      </div>
    </div>
  );
}