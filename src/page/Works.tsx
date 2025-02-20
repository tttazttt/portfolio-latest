import Header from "../components/Header";
import { motion } from "framer-motion";
import vsImg from "../img/vs-portfolio.png";
import catImg from "../img/cat-of-today.png";
import pastelImg from "../img/pastel-color-picker.png";
import pachinkoImg from "../img/primitive-pachinko.png";
import quizImg from "../img/quiz-app.png";
import hayautiImg from "../img/hayauti.png";
import todoImg from "../img/todo-app.png";
import typingImg from "../img/typing-app.png";
import reversiImg from "../img/reversi-app.png";
import Footer from "../components/Footer";
import portfolio2503 from "../img/portfolio2503.png";
import bingoAppImg from "../img/bingo-app.png";

const Works = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto text-center pt-40 font-[NotoSans]">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="font-[NotoSans] text-[min(8vw,60px)] pb-15"
        >
          Works
        </motion.h2>
        <div className="flex flex-col w-[60%] mx-auto gap-30 mb-20 md:w-[90%] md:flex-row md:flex-wrap md:box-border md:gap-[3%] md:mb-10 md:gap-y-0">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.3 },
            }}
            whileHover={{
              y: -5,
              opacity: 0.7,
              transition: { duration: 0.3, delay: 0 },
            }}
            className="works relative after:content-['初制作したポートフォリオ'] after:opacity-0 after:absolute
            w-[100%] md:w-[calc(94%/3)] md:mb-30 md:after:bottom-[-20%]"
          >
            <a href="https://portfolio-rho-eight-38.vercel.app/">
              <img src={vsImg} alt="サイトプレビュー" className="w-[100%]" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.3 },
            }}
            whileHover={{
              y: -5,
              opacity: 0.7,
              transition: { duration: 0.3, delay: 0 },
            }}
            className="works relative after:content-['きょうのにゃんこApp'] after:opacity-0 after:absolute
            w-[100%] md:w-[calc(94%/3)] md:mb-30"
          >
            <a href="https://a-cat-of-today.vercel.app/">
              <img src={catImg} alt="サイトプレビュー" className="w-[100%]" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.3 },
            }}
            whileHover={{
              y: -5,
              opacity: 0.7,
              transition: { duration: 0.3, delay: 0 },
            }}
            className="works relative after:content-['カラーピッカーApp'] after:opacity-0 after:absolute
            w-[100%] md:w-[calc(94%/3)] md:mb-30"
          >
            <a href="https://pastel-color-picker.vercel.app/">
              <img
                src={pastelImg}
                alt="サイトプレビュー"
                className="w-[100%]"
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.3 },
            }}
            whileHover={{
              y: -5,
              opacity: 0.7,
              transition: { duration: 0.3, delay: 0 },
            }}
            className="works relative after:content-['原始的な遊びApp'] after:opacity-0 after:absolute
            w-[100%] md:w-[calc(94%/3)] md:mb-30"
          >
            <a href="https://primitive-pachinko.vercel.app/">
              <img
                src={pachinkoImg}
                alt="サイトプレビュー"
                className="w-[100%]]"
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.3 },
            }}
            whileHover={{
              y: -5,
              opacity: 0.7,
              transition: { duration: 0.3, delay: 0 },
            }}
            className="works relative after:content-['進撃の巨人クイズApp'] after:opacity-0 after:absolute
            w-[100%] md:w-[calc(94%/3)] md:mb-30"
          >
            <a href="https://quiz-app-sand-ten.vercel.app/">
              <img src={quizImg} alt="サイトプレビュー" className="w-[100%]" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.3 },
            }}
            whileHover={{
              y: -5,
              opacity: 0.7,
              transition: { duration: 0.3, delay: 0 },
            }}
            className="works relative after:content-['早撃ち数字クリックApp'] after:opacity-0 after:absolute
            w-[100%] md:w-[calc(94%/3)] md:mb-30"
          >
            <a href="https://hayauti-app.vercel.app/">
              <img
                src={hayautiImg}
                alt="サイトプレビュー"
                className="w-[100%]"
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.3 },
            }}
            whileHover={{
              y: -5,
              opacity: 0.7,
              transition: { duration: 0.3, delay: 0 },
            }}
            className="works relative after:content-['よくあるtodoApp'] after:opacity-0 after:absolute
            w-[100%] md:w-[calc(94%/3)] md:mb-30"
          >
            <a href="https://todo-app-liart-iota-48.vercel.app/">
              <img src={todoImg} alt="サイトプレビュー" className="w-[100%]" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.3 },
            }}
            whileHover={{
              y: -5,
              opacity: 0.7,
              transition: { duration: 0.3, delay: 0 },
            }}
            className="works relative after:content-['タイピングゲームApp'] after:opacity-0 after:absolute
            w-[100%] md:w-[calc(94%/3)] md:mb-30"
          >
            <a href="https://typing-app-six-eosin.vercel.app/">
              <img
                src={typingImg}
                alt="サイトプレビュー"
                className="w-[100%]"
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.3 },
            }}
            whileHover={{
              y: -5,
              opacity: 0.7,
              transition: { duration: 0.3, delay: 0 },
            }}
            className="works relative after:content-['不完全なリバーシApp'] after:opacity-0 after:absolute
            w-[100%] md:w-[calc(94%/3)] md:mb-30"
          >
            <a href="https://reversi-app.vercel.app/">
              <img
                src={reversiImg}
                alt="サイトプレビュー"
                className="w-[100%]"
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.3 },
            }}
            whileHover={{
              y: -5,
              opacity: 0.7,
              transition: { duration: 0.3, delay: 0 },
            }}
            className="works relative after:content-['2代目ポートフォリオ'] after:opacity-0 after:absolute
            w-[100%] md:w-[calc(94%/3)] md:mb-30"
          >
            <a href="https://vercel.com/azs-projects-b9dbaca7/portfolio2503">
              <img
                src={portfolio2503}
                alt="サイトプレビュー"
                className="w-[100%]"
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.3 },
            }}
            whileHover={{
              y: -5,
              opacity: 0.7,
              transition: { duration: 0.3, delay: 0 },
            }}
            className="works relative after:content-['ビンゴApp'] after:opacity-0 after:absolute
            w-[100%] md:w-[calc(94%/3)] md:mb-30"
          >
            <a href="https://bingo-app-rho.vercel.app/">
              <img
                src={bingoAppImg}
                alt="サイトプレビュー"
                className="w-[100%]"
              />
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Works;
