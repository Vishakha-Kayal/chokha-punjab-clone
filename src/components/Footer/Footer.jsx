import logo from "../../assets/logo.png";
import stylec from "styled-components";
import "../Footer/Footer.css";

const Footer = () => {
  const ListHead = stylec.li`
    font-family:'Segoe UI';
    font-size:2.25rem;
    font-weight:700;
    margin-bottom:3rem;
  `;

  const DivFlexProp = stylec.div`
    height:100%;
    display:flex;
    flex-direction:column;
  `
  return (
    <div className="container w-full h-full flex margin">
      <div className="basis-[25%] flex flex-col justify-center">
        <div className="w-full mb-5">
          <img src={logo} alt="" />
        </div>
        <p className="text-[1.6rem] leading-[3rem]">
          Khao, Piyo, Nacho! Chokha Punjab invites you to connect with the
          vibrant culture, lively ambience and swadisht food of Punjab in
          Jaipur.
        </p>
      </div>
      <div className="basis-[75%] w-full h-full flex justify-between items-center px-5">
        <DivFlexProp>
          <ul className="text-[1.6rem]">
            <ListHead>Quick Links</ListHead>
            <li>About</li>
            <li>Blogs</li>
            <li>Offers</li>
            <li>Bulk Booking</li>
          </ul>
        </DivFlexProp>
        <DivFlexProp>
          <ul className="text-[1.6rem]">
            <ListHead>Useful Links</ListHead>
            <li>Menu</li>
            <li>Gallery</li>
            <li>Activities</li>
          </ul>
        </DivFlexProp>
        <DivFlexProp>
          <ul className="text-[1.6rem]">
            <ListHead>More</ListHead>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </DivFlexProp>
        <DivFlexProp>
          <ul className="text-[1.6rem]">
            <ListHead>Opening Hours</ListHead>
            <li>We are available 7 days a week to assist you in any way!</li>
            <li>Monday to Friday 5:30PM - 10:30PM</li>
            <li>Saturday 5:30PM - 10:30PM</li>
            <li>Sunday 5:30PM - 10:30PM</li>
          </ul>
        </DivFlexProp>
      </div>
    </div>
  );
};

export default Footer;
