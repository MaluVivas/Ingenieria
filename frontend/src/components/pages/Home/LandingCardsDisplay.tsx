import LandingCards from "./LandingCards";

const background = "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315263/confetiNaranja_ore6k2.png";

export default function LandingCardsDisplay() {

    //cambiar a un solo array.

    const titles = ["Pet friendly", "Care", "Veterinarians"];

    const images = [
        "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315262/HappyDog_x5jfax.png", 
        "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315264/petHouse_qm4f1c.png", 
        "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315264/Vet_tqhm81.png", 
    ];

    const links = [
        "/locations?category=petshop",
        "/documents?category=cuidados",
        "/locations?category=veterinaria",
    ];

    return (
        <div
            className="w-full min-h-[400px]"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <h2 className="text-3xl font-bold text-center text-(--blue-color) pt-10 ">Our services</h2>

            <LandingCards
                titles={titles}
                images={images}
                links={links}
                buttonText="Go there!"

            />
        </div>
    )
}