import LandingButton from "./LandingButton";

interface LandingCardsProps {
    titles: string[];
    images: string[];
    links: string[];
    buttonText: string;
}

export default function LandingCards(props: LandingCardsProps) {

    return (
        <div className="flex justify-center items-start gap-20 flex-wrap py-5 pb-30">
            {props.titles.map((title, index) => (
                <div key={index} className="flex flex-col items-center text-center">

                    <h3 className="text-(--dark-color) font-semibold mb-2">
                        {title}
                    </h3>

                    <img
                        src={props.images[index]}
                        alt={title}
                        className="h-28 w-28 object-contain mb-3"
                    />

                    <LandingButton
                        text={props.buttonText}
                        type="go"
                        link={props.links[index]}
                    />

                </div>
            ))}
        </div>
    )
}