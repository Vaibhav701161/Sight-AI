import { prototype } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our <br className="sm:block hidden" /> Prototype
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        This sleek device boasts strategically placed cameras for a 180-degree
        view, a seamless text-to-speech mechanism, and color/currency detection.
        With a click, users can connect with volunteers, and Braille detection
        adds another layer of accessibility. Integrating cloud databases and AI
        assistance, our prototype not only provides an immediate impact but also
        sets the stage for the future of inclusive assistive technology.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={prototype} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;