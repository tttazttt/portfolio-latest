import Header from "../components/Header";
import bgImg from "../img/bg.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="absolute w-[100%] h-screen overflow-hidden">
        <img
          src={bgImg}
          alt="heroVisual"
          className="absolute h-screen object-cover w-[100vw] to-0 left-0"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 2 }}
          className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#727272] pr-10 text-[9vw] text-right leading-[1000px] mix-blend-screen font-[Piedra]"
        >
          Stay hungry, Stay foolish
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute z-50 text-[#ffbbc5b2] text-[6vw] w-[100%] h-[100%] font-[Piedra] text-right leading-[1400px] pr-10"
        >
          It's never too late to start.
        </motion.h2>
      </div>
    </div>
  );
};

export default Home;
