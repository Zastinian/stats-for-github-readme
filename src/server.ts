import express from "express";
const app = express();
import readmeStats from "./api/index";

app.get("/", (req, res) => {
  res.redirect("https://docs.hedystia.com/stats/start");
});
app.use("/api", readmeStats);

const port: number = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`On!`);
});
