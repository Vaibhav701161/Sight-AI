import { features, futures } from "../constants";
import styles, { layout } from "../style";
import { business1 } from "../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <FontAwesomeIcon icon={icon} className="text-white text-3xl" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);


const Future = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionImg} style={{ marginRight: "24px" }}>
      <img
        src={business1}
        alt="Features"
        className="w-full h-auto"
        style={{ maxWidth: "637px", height: "auto" }}
      />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Business Model <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The proposed business model revolves around providing innovative glasses
        equipped with advanced features to assist visually impaired individuals.
        Through a subscription model, users gain access to the glasses'
        features, including continuous updates and support. Additionally, the
        API is offered for sale, allowing developers and businesses to integrate
        the technology into their own applications. Leveraging partnerships and
        targeted efforts, sales to government entities are pursued to promote
        accessibility and inclusion initiatives. This multifaceted approach aims
        to generate revenue while making a meaningful impact on the lives of
        visually impaired individuals.
      </p>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {futures.map((future, index) => (
        <FeatureCard key={future.id} {...future} index={index} />
      ))}
    </div>
  </section>
);

export default Future;
