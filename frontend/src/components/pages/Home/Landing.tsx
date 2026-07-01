import NavHeader from "../../ui/NavBar";
import Footer from "../../ui/Footer";
import LandingHeroBanner from "./LandingHeroBanner";
import LandingWhy from "./LandingWhy";
import LandingCardsDisplay from "./LandingCardsDisplay";




export default function Landing() {
  return (
    <div className="bg-(--primary-color)">
<NavHeader logo="WAG!" />
      <LandingHeroBanner title="Your Pet Friendly Web" />

      <LandingWhy></LandingWhy>

      <LandingCardsDisplay></LandingCardsDisplay>

      <Footer logo="WAG!" socialMedia={[]} />
    </div>
  );
}
