const Feature = ({image,name,para}) => {
  return <>
  <div className="w-[27%] h-[30rem] gap-4 flex flex-col items-center rounded-[15%] point-cursor transition-all ease-in-out duration-300 py-12 hover:bg-[white] hover:shadow-2xl">
    <img src={image} alt="" />
    <h1 className="text-3xl font-['Volkhov'] font-semibold mb-2">{name}</h1>
    <p className="text-[1.7rem] w-[80%] text-center">{para}</p>
  </div>
  </>;
};

export default Feature;
