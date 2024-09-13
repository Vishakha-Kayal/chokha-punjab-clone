import styled from "../components/GreatFontStyle.module.css";
import testimonial1 from "../assets/testimonial1.jpg";
import stylec from "styled-components";

const Testimonials = () => {
  const TestimonialName = stylec.h5`
  padding-top:1.6rem;
    font-size:1.8rem;
    font-weight:600;
    font-family:"Volkhov";
    letter-spacing:-0.1rem;
  `

  return (
    <div className="container h-[50vh] flex justify-center items-center testimonial m-44 ">
      <div className="basis-[50%] ">
        <h1 className={styled["great-font"]}>Testimonials</h1>
        <h2 className={styled["volkhov-font"]}>Log Ki Kende</h2>
      </div>
      <div className="basis-[50%] h-full bg-white flex flex-col justify-center">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex justify-center items-center mb-4">
          <img
            src={testimonial1}
            alt=""
            className=" rounded-full w-[90%] h-[90%]"
          />
        </div>
        <p className="text-[1.6rem] w-[90%] leading-[3rem]">
          I am delighted to share my experience at Chokha Punjab, a Punjabi
          restaurant that truly captures the essence of Punjab. From the moment
          I stepped in, I was greeted with warm hospitality and a vibrant
          atmosphere that instantly transported me to the lively streets of
          Punjab. The aroma of rich spices and flavors filled the air, teasing
          my taste buds and building anticipation for the culinary delights that
          awaited me.
        </p>
        <TestimonialName>Harwindar Singh</TestimonialName>
      </div>
    </div>
  );
};

export default Testimonials;
