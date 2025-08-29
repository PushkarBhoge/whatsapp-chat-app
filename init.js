const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

const chats = [
  { form: "pushkar", to: "pranav", message: "hello", createdAt: new Date() },
  {
    form: "pranav",
    to: "abhay",
    message: "i an pranav",
    createdAt: new Date(),
  },
  {
    form: "abhay",
    to: "aarya",
    message: "Good Morning",
    createdAt: new Date(),
  },
  {
    form: "aarya",
    to: "pushkar",
    message: "Good Evening",
    createdAt: new Date(),
  },
];
Chat.insertMany(chats)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));
