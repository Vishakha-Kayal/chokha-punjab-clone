import girl from "../assets/balleballe.png";
import pinddaswad from "../assets/pinddaswad.png";
import pinddimasti from "../assets/pinddimasti.png";
import pindivibes from "../assets/pindivibes.png";

export const PindiDiFeature = ({ name, image, para ,bgColor}) => {
  return (
    <div className="w-full flex justify-center items-center gap-[3rem] mb-[5rem]">
      <div className='w-[10%] h-[70%] rounded-3xl py-3 flex justify-center items-center' style={{backgroundColor:`${bgColor}`}}>
        <img src={image} className='w-[70%] h-[90%] object-cover' alt="" />
      </div>
      <div className="w-[90%] flex flex-col">
        <h1 className="text-[2rem] font-['Volkhov'] font-semibold">{name}</h1>
        <p className="text-[1.6rem] w-[90%] font-['Segoe UI']">{para}</p>
      </div>
    </div>
  );
};

const Punjabigirl = () => {
  return (
    <div className="container flex px-4">
      <div className="basis-[60%]">
        <h1 className="w-[80%] text-[4rem] mb-4 tracking-tighter font-extrabold text-[#094470] font-['Volkhov'] leading-tight">
          Balle Balle Bites, Chokha Punjab Nights!
        </h1>
        <p className="w-[90%] text-[1.7rem] mb-[5rem] font-['Segoe UI'] font-semibold">
          Dhaba style food, bhangra beats, village architecture and rich
          heritage, experience the Pind life at Chokha Punjab, Jaipur.
        </p>
      
       <PindiDiFeature
          name="Pind Da Swad"
          image={pinddaswad}
          para="From buttery naans straight out of the tandoor to sumptuous paneer, at Chokha Punjab you’ll find all the classic Punjabi signature dishes that will make you want to lick your fingers."
          bgColor={'#F0BB1F'}
        />
        <PindiDiFeature
          name="Pind Di Masti"
          image={pinddimasti}
          para="Your Punjabi adventure begins here! Enjoy Punjabi Dhol, Arcade Games, Bullock Cart, Horse Riding, Puppet Show, Toy Train and more."
          bgColor={'#F15A2B'}
        />
        <PindiDiFeature
          name="Pindi Di Vibes"
          image={pindivibes}
          para="Feel the electrifying Pind Di vibes in the colourful traditions, lively music, and authentic food that will transport you to the heart of Punjab."
          bgColor={'#006380'}
        />
      </div>
      <div className="basis-[40%]">
        <img src={girl} className="img-animation" alt="Punjabi Girl" />
      </div>
    </div>
  );
};


export default Punjabigirl;