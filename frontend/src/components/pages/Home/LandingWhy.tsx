

export default function LandingWhy() {
  return (

    <div >


      <section className="flex flex-col mx-20 gap-4 items-center justify-center my-10">

        
        {/* separador de arriba*/}
        <img
          src="https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315264/separadorhuella_icyhz1.png"
          alt="Separator, horizontal orange line with a dog paw print in the center (dog paw print: heart-shaped palm with 4 small toes on top)"
          className="mx-auto my-10 w-[1000px] max-w-none"
        ></img>

        <div className="flex gap-8 items-start ">
          {/* imagen de la izquierda*/}
          <div>
            <img
              src="https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315264/PETS_iu7i6x.png"
              alt="hamster,bird,dog and cat togheter in a 4 image mosaico"
              className="w-[400px] "
            />
          </div>

          {/* textos de la derecha */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-[var(--bright-blue)] ">
              Why pet owners
            </h2>

            <h3 className="text-3xl font-semibold text-[var(--bright-blue)] ">
              Choose us
            </h3>

            <p className="block w-[650px] pt-4 text-[var(--dark-color)] font-medium">
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, sit amet feugiat lectus. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, sit amet feugiat lectus. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Praesent auctor purus luctus enim egestas,
              ac{" "}
            </p>
          </div>
        </div>

        {/* separador de abajo*/}
        <img
          src="https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315264/separadorhuella_icyhz1.png"
          alt="Separator, horizontal orange line with a dog paw print in the center (dog paw print: heart-shaped palm with 4 small toes on top)"
          className="mx-auto my-10 w-[1000px] max-w-none"
        ></img>
      </section>

    </div>
  );
}
