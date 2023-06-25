import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

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
export default ServiceCard;
