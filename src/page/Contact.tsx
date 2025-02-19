import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="w-[100vw] h-screen pt-30 pb-20 font-[NotoSans]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="container bg-[#d8edff] rounded-2xl w-[90%] h-[100%] mx-auto max-w-[800px]"
        >
          <h2 className="text-4xl text-center pt-10 mb-5">Contact</h2>
          <form className="w-[70%] h-[550px] mx-auto flex flex-col justify-around">
            <div className="flex justify-between gap-2">
              <label htmlFor="name" className="">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-[80%] rounded-xl outline-2 outline-gray-500 focus:outline-sky-400"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="mail" className="pr-5">
                mail
              </label>
              <input
                type="mail"
                id="mail"
                name="mail"
                className=" w-[80%] rounded-xl outline-2 outline-gray-500  focus:outline-sky-400"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="content" className="pr-5 leading-[200px]">
                content
              </label>
              <textarea
                name="content"
                id="content"
                className="w-[80%] h-[200px] p-3 rounded-xl outline-2 outline-gray-500  focus:outline-sky-400"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ opacity: 0.7, y: -5, transition: { delay: 0.1 } }}
              type="submit"
              className="bg-[#56caff] w-[70px] py-2 rounded-2xl mx-auto outline outline-gray-300"
            >
              send
            </motion.button>
          </form>
        </motion.div>
      </div>
      <div className="fixed left-0 right-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
