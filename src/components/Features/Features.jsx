import Feature from "./Feature";
import mauja from '../../assets/mauja.png'
import swaad from '../../assets/swaad.png'
import khatron from '../../assets/khatron.png'
import punjabi from '../../assets/punjabi.png'

const Features = () => {
  return (
    <>
      <div className="pt-16 container pb-44">
        <h2 className="mb-16 text-[4rem] text-center font-bold text-[#094470] leading-24 font-['Volkhov']">
          Itthe Sab LIT Hai!
        </h2>
        <div className="container flex justify-between gap-8">
          <Feature
            image={mauja}
            name="Mauja Hi Mauja"
            para="Discover the sights and sounds of Punjab."
          />
          <Feature
           image={swaad}
            name="Swaad Ka Mela"
            para="Serving the best of traditional Punjabi cuisine."
          />
          <Feature
           image={khatron}
            name="Khatron Ke Khiladi"
            para="Explore Arcade Games, Rides and more."
          />
          <Feature
          image={punjabi}
            name="Punjabi Pind Vibes"
            para="Feel alive in the colourful Pind Di Vibes."
          />
        </div>
      </div>
    </>
  );
};

export default Features;
