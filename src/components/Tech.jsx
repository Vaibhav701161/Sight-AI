import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const GoldenHoverLink = ({ href, children }) => {
    const linkStyle = {
      position: 'relative',
      textDecoration: 'none',
      color: 'inherit'
    };
  
    return (
      <a href={href} style={linkStyle}>
        {children}
        <style>
          {`
            a:hover::after {
              content: '';
              display: block;
              width: 100%;
              height: 2px;
              background-color: gold;
              position: absolute;
              bottom: 0;
              left: 0;
              transition: width 0.3s ease;
            }
          `}
        </style>
      </a>
    );
  };
  


const Tech = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Our Code <br className="sm:block hidden" /> Completely Open source
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          <GoldenHoverLink href="https://github.com/Vaibhav701161/Sight-AI/">
            Website made in React
          </GoldenHoverLink>
          <br />
          <GoldenHoverLink href="https://github.com/KRISH2832/SightAi_model">
            ML model
          </GoldenHoverLink>
        </p>
      </div>
    </div>
  </section>
);

export default Tech;
