import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import ServiceCard from "./ServiceCard";

const AboutComponent = () => {
  return (
    <div className="relative pb-20">
      <div className="flex flex-row">
        <div className="flex flex-col justify-center items-center mt-5 mr-10 mb-10">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-40 h-20 violet-gradient" />
        </div>

        <div>
          <h2
            className={`${styles.heroHeadText} text-white`}
            style={{ fontSize: "34px" }}
          >
            Hi, I'm <span className="text-[#915EFF]">Daniel</span>
          </h2>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Front-End developer and Data Analyst
          </p>
        </div>
      </div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mb-4`}>Introduction</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary text-[17px] max-w-6xl leading-[30px] mb-10"
      >
        I'm a skilled Web Application Front-End Developer with experience and
        knowledge on Digital Transformation, Data Analyst and Machinery
        Automation on Manufacture Domain. Possessing strong programming skills
        in TypeScript, Javascript and expertise in frameworks like React,
        Node.js, Azure Machine Learning. Able to participate in large and
        complex projects, ensuring optimal efficiency and cost reduction. Let's
        work together to bring values to life!
      </motion.p>

      <div className="mt-4 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="absolute xs:bottom-0 bottom-0 w-full flex justify-center items-center">
        <a href="#work">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </div>
  );
};
const About = SectionWrapper(AboutComponent, "about");
export default About;
