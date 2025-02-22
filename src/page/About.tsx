import Footer from "../components/Footer";
import Header from "../components/Header";
import pfImg from "../img/az.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-[url('/img/bgAbout.jpg'] w-[100vw] h-screen bg-cover bg-no-repeat">
      <Header />
      <div className="w-[100vw] h-screen py-[150px] px-[5%] lg:pb-[100px] lg:pt-[120px] bg-[#ffffff64]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          className="flex flex-col justify-center w-[100%] h-[100%] bg-[#e9f7ff87] rounded-3xl max-w-[800px] mx-auto gap-5"
        >
          <div className="w-[60%] max-w-[250px] mx-auto">
            <img
              src={pfImg}
              alt="プロフィール画像"
              className="w-[100%] rounded-[50%]"
            />
          </div>
          <ul className="w-[90%] mx-auto text-[1.1rem] md:text-[1.5rem] font-[NotoSans] truncate">
            <li>Kazuki Ito</li>
            <li>36歳</li>
            <li>Kawasaki→Nagoya→Osaka→Tokyo</li>
            <li>私立南山高校男子部卒業</li>
            <li>青山学院大学経済学部経済学科中退</li>
            <li>HTML,CSS,JavaScript,React,TypeScript,Tailwindcss</li>
            <li>boxing,soccer,Anime,APEX,valorant,slot</li>
          </ul>
        </motion.div>
        <div className="fixed left-0 right-0 bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
