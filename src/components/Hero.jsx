import styles from "../style";
import { discount, logo, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Empowering Blindness, </span> Enriching Lives.{" "}
            <span className="text-white"></span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">SightAI</span> Empowering Vision{" "}
            <br className="sm:block hidden" />{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[38px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          See Beyond Limits
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Discover a world of possibilities with our revolutionary smart
          glasses. Experience 180 degrees of vision, breaking barriers for the
          visually impaired. From reading text to identifying colors and
          currencies, our technology brings independence to your fingertips.
          Join us in creating a future where every step is a journey of
          empowerment. Explore the world anew – because vision knows no bounds."
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[60%] h-[70%] relative z-[5] rounded-full"

        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
