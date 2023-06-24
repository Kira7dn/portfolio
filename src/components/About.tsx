import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

type Props = {
  index: number;
  title: string;
  icon: string;
  size: number;
};

const ServiceCard = ({ index, title, icon, size }: Props) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className={`w-${size} h-${size} object-contain`}
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </Tilt>
    </motion.div>
  </Tilt>
);

const AboutComponent = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary text-[17px] max-w-6xl leading-[30px]"
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
    </>
  );
};
const About = AboutComponent;
export default About;
