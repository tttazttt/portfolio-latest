import { Link } from "react-router-dom";
import xImg from "../img/x.svg";
import instagramImg from "../img/Instagram.svg";
import githubImg from "../img/github.svg";
import youtubeImg from "../img/youtube.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="container mx-auto text-[white] h-[90px] flex justify-between pt-10 fixed z-100 to-0 botom-0 right-0 left-0"
    >
      <ul className="flex gap-8 pl-10 tracking-wide md:text-xl">
        <Link to="/">
          <motion.li whileHover={{ scale: 1.3, y: -10 }}>Home</motion.li>
        </Link>
        <Link to="/about">
          <motion.li whileHover={{ scale: 1.3, y: -10 }}>About</motion.li>
        </Link>
        <Link to="/works">
          <motion.li whileHover={{ scale: 1.3, y: -10 }}>Works</motion.li>
        </Link>
        <Link to="/content">
          <motion.li whileHover={{ scale: 1.3, y: -10 }}>Contact</motion.li>
        </Link>
      </ul>
      <ul className="flex gap-8 pr-10">
        <motion.li whileHover={{ scale: 1.3, y: -5 }}>
          <a href="https://x.com/fox_inthehell">
            <img src={xImg} alt="xロゴ" className="w-[20px] md:w-[25px]" />
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.3, y: -5 }}>
          <a href="">
            <img
              src={instagramImg}
              alt="instagramロゴ"
              className="w-[20px] md:w-[25px]"
            />
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.3, y: -5 }}>
          <a href="https://github.com/tttazttt">
            <img
              src={githubImg}
              alt="githubロゴ"
              className="w-[20px] md:w-[25px]"
            />
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.3, y: -5 }}>
          <a href="https://www.youtube.com/channel/UCN4ElM4MclxfcRoqpcG-TeA">
            <img
              src={youtubeImg}
              alt="youtubeロゴ"
              className="w-[20px] h-[18px] pt-[1px] md:w-[25px] md:h-[22px] md:pt-[3px]"
            />
          </a>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Header;
