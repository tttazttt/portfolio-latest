import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [content, setContent] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      await axios.post(`${apiUrl}/send-mail`, {
        name: name,
        mail: mail,
        content: content,
      });
      setIsSending(true);
    } catch (error) {
      console.log(error);
    }
  };

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
          {isSending ? (
            <motion.p
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-[#77d80f] text-center text-xl"
            >
              送信完了しました。お問い合わせありがとうございます。
            </motion.p>
          ) : (
            ""
          )}
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="w-[70%] h-[550px] mx-auto flex flex-col justify-around"
          >
            <div className="flex justify-between gap-2">
              <label htmlFor="name" className="">
                Name
              </label>
              <input
                onChange={(e) => handleName(e)}
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
                onChange={(e) => handleMail(e)}
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
                onChange={(e) => handleContent(e)}
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
