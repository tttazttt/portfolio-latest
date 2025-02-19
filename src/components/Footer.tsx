import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3, delay: 0.3 }}
    >
      <p className="container mx-auto text-[#efefef] font-[NotoSans] text-center pb-5 pt-2 border-t border-dotted w-[70%] sm:w-[90%] text-[10px] sm:text-[13px]">
        <small>
          This page is made with React,React-router-dom,tailwindcss and
          Framer-motion
        </small>
      </p>
    </motion.div>
  );
};

export default Footer;
