require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const port = 3001;

const app = express();
app.use(
  cors({
    origin: "https://portfolio-latest-psi.vercel.app", // 許可するドメイン
    methods: ["GET", "POST", "PUT", "DELETE"], // 許可するHTTPメソッド
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.post("/send-mail", async (req, res) => {
  //メール送信の処理を記述
  const { name, mail, content } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // SSLポート
    secure: true,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });

  const SendMailOptions = {
    from: process.env.GMAILUSER,
    to: mail,
    subject: "お問い合わせありがとうございます。",
    text: `${name}様、ポートフォリオご覧頂き有難うございます。内容確認次第こちらからご連絡致します。\n\nお問い合わせ内容: ${content}`,
  };
  const RecieveMailOptions = {
    from: process.env.GMAILUSER,
    to: "afoxinthehell@gmail.com",
    subject: "ホームページからのお問い合わせ。",
    text: `Email: ${mail}\n名前: ${name}\n本文: ${content}`,
  };

  try {
    await transporter.sendMail(SendMailOptions);
    await transporter.sendMail(RecieveMailOptions);
    res.status(200).json({ message: "メールが送信されました。" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "メールの送信に失敗しました。" });
  }
});

app.listen(port, () => {
  console.log(`サーバーがポート${port}で起動しました。`);
});
