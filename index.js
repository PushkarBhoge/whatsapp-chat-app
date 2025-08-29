const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = 3000;
const app = express();
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const { log } = require("console");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/", (req, res) => {
  res.send("Home");
});

// Index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

// New route
app.get("/chats/new", async (req, res) => {
  res.render("new.ejs");
});
// Create Route
app.post("/chats", async (req, res) => {
  let { from, to, message } = req.body;
  console.log(req.body);
  let newChat = new Chat({
    form: from,
    to: to,
    message: message,
    createdAt: new Date(),
  });
  newChat
    .save()
    .then((result) => {
      console.log("chat saved");
    })
    .catch((err) => console.log(err));

  res.redirect("/chats");
});

// Edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

// Update Route
app.put("/chats/:id/", async (req, res) => {
  let { id } = req.params;
  // let { message: newMessage } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { message: req.body.message },
    { new: true },
    { runValidators: true }
  );
  res.redirect("/chats");
});

// destroy route
app.delete("/chats/:id/", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});

app.listen(PORT, () => {
  console.log(`service running on port ${PORT}`);
});
