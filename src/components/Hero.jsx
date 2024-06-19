import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <>
    <div className="flex container px-4">
        <div className="basis-[50%]">
            <p className="text-[2rem] font-['Segoe UI'] uppercase text-[#DF6951] font-bold mb-9">Khao,Piyo, Nacho!</p>
        <h1 className="text-[6.5rem] font-bold text-[#094470] leading-24 font-['Volkhov'] mb-9">Swagat Hai Chokha Punjab Mein</h1>

            <p className="text-[1.5rem] font-bold font-['Volkhov'] mb-9">Jaha hai Khana aur Hansi Ka Vaada!</p>
            <p className="text-[1.7rem] font-bold font-['Volkhov'] mb-3">- A Unit of Chokhi Dhani Group</p>
            <p className="text-[1.7rem] leading-[4.3vh] w-[87%]">From the land of Punjab to the Pink City, we bring you the magic of a unique, colourful and extravagant Punjabi Pind. Relish desi Swaad, dance to the beats of Bhangra, and blend in the roots of Punjab, all at one destination.</p>
            <div className="call-to-action mt-4 flex items-center gap-4">
            <button className="shadow-lg h-24 text-[1.5rem] text-white bg-[#B32C28] px-16 rounded-lg">
                Book Now
            </button>
            <div className="flex justify-center items-center gap-3">
                <div><i class="ri-play-circle-fill text-9xl text-[#B32C28]"></i></div>
                <h1><a href="#" className="text-2xl">Watch Now</a></h1>
            </div>
        </div>
        </div>
        <div className="basis-[50%] relative">
            <img src={hero} className="img-animation w-[100%] absolute top-[-38px]" alt="" />
        </div>
     
    </div>
    
    </>
  )
}

export default Hero