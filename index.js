import express from "express";

const app = express();
const PORT = process.env.PORT || 3500;

//routes
app.get("/", async (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`App is running in ${PORT}`);
});
