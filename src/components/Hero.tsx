import { motion } from "framer-motion";
import { styles } from "../styles";
import { About } from "./";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start gap-5`}
      >
        <div className="flex flex-row">
          <div className="flex flex-col justify-center items-center mt-5 mr-10">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-40 h-20 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm Duc Anh "<span className="text-[#915EFF]">Daniel</span>"
              Le
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A Front-End developer and Data Analyst
            </p>
          </div>
        </div>
        <About />
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
    </section>
  );
};

export default Hero;
