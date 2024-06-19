import menu1 from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
import menu3 from "../assets/menu3.png";
import menu4 from "../assets/menu4.png";
import menu5 from "../assets/menu5.png";

export const DefineMenu = ({ name, boldtext, image, details }) => {
  return (
    <div className="menu-box w-[32%] py-[5rem] rounded-[15%] transition-all ease-in 2s flex flex-col items-center gap-8">
      <img src={image} alt="" className="menuimage" />
      <h2 className="text-5xl greatfamily-font text-[#094470]">
        <span className="font-extrabold">{boldtext} </span>{name}</h2>
      <p className="text-[1.6rem] w-[85%] font-['Segoe UI'] text-center tracking-tighter">{details}</p>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="menu px-4 h-screen">
      <div className="h-full container py-16 font-['Volkhov']">
        <h1 className="text-[2rem] text-center font-bold tracking-tighter mb-4">
          SARSON DA SAAG TE MAKKI DI ROTI
        </h1>
        <h2 className="text-center text-[4rem] mb-4 tracking-tighter font-bold text-[#094470] font-['Volkhov']">
          Yahan khana hai 'Dil se Desi' aur swaad hai 'Mast Punjabi'!
        </h2>
        <div className="w-[90%] m-auto menus flex justify-center items-center flex-wrap gap-7">
          <DefineMenu
            name="-on ka Nach!"
            boldtext="Curry"
            details=" An indulgent selection of flavoursome curries, seasoned with authentic
          spices."
          image={menu1}
          />
          <DefineMenu
            name="Proper Patola"
            boldtext="Pulao"
            details="A refreshing and vibrant mix of crispy vegetables, often accompanied by greens."
            image={menu2}
          />
          <DefineMenu
            name="Soniyon Jaisa"
            boldtext="Salad"
            details="A zesty and tangy drink made with a blend of aromatic spices, herbs, and lemon."
            image={menu3}
          />
          <DefineMenu
            name="Tadka Marke De"
            boldtext="Thali"
            details="A hearty meal consisting of a wide array of dishes, representing the flavours of Punjab."
            image={menu4}
          />
          <DefineMenu
            name="Jaljeera"
            details="A zesty and tangy drink made with a blend of aromatic spices, herbs, and lemon."
            image={menu5}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
